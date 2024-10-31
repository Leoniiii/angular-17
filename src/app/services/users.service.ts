import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs';
import { User, UserResponse, UsersResponse } from '@interfaces/req-response';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private http = inject(HttpClient)

  
   #state = signal<State>({
    loading: true,
    users: [],
  })

  users = computed(() => this.#state().users)
  loading = computed(() => this.#state().loading)

  constructor() {

    this.http.get<UsersResponse>('/reqres-api/api/users')
      .pipe( delay(1500) )
      .subscribe( res => {
        this.#state.set({
          loading: false,
          users: res.data,
        })

      });

  }

  getUserById(id: number) {
    return this.http.get<UserResponse>(`/reqres-api/api/users/${id}`).pipe(
      delay(1500),
      map(res => res.data)
    )
  }


}
