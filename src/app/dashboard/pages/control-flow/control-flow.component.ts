import { Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

type Grade = 'A' | 'B' | 'E';

@Component({
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {
  public showContent = signal(false)
  public grade = signal<Grade>('B')
  public frameworks = signal(['Angular', 'Vue', 'Svelt', 'React', 'Nest'])
  public frameworks2 = signal([]);
  public title = this.frameworks()[0];

  

  toggleContent() {
    this.showContent.update(value => !value);
  }
}
