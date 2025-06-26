import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  ViewEncapsulation,
  inject,
  input,
} from '@angular/core'

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()', // Angular team recommend this approach
  },
})
export class ControlComponent {
  // @HostBinding('class') class = 'control'
  // @HostListener('click) onClick() {
  // console.log('Clicked')
  // }
  label = input.required<string>()

  private el = inject(ElementRef)// Accessing elements

  onClick() {
    console.log('Clicked')
    console.log(this.el);
  }

}
