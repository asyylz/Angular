import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  ViewEncapsulation,
  contentChild,
  inject,
  input,
  afterRender,
  afterNextRender,
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
export class ControlComponent implements AfterContentInit {
  // @HostBinding('class') class = 'control'
  // @HostListener('click) onClick() {
  // console.log('Clicked')
  // }
  label = input.required<string>()

  private el = inject(ElementRef) // Accessing elements

  // @ContentChild('input') private control?: ElementRef<
  //   HTMLTextAreaElement | HTMLInputElement
  // >

  private control =
    contentChild<ElementRef<HTMLTextAreaElement | HTMLInputElement>>('input')

  constructor() {
    afterRender(() => {
      console.log('after render')
    })

    afterNextRender(() => {
      console.log('after next render')
    })
  }
  ngAfterContentInit(): void {}

  onClick() {
    console.log('Clicked')
    console.log(this.el)
    console.log(this.control())
  }
}

/* 📜 Lifecycle Hooks & ContentChild

Hook	What’s available
ngOnInit()	✅ Your component’s own inputs are set
❌ Projected content (what <ng-content> brings in) is not yet initialized.
ngAfterContentInit()	✅ At this point all <ng-content> children have been inserted and your @ContentChild() / @ContentChildren() queries are guaranteed to have values.
//* Why ngOnInit() is too early
@ContentChild looks for elements that are projected from the parent via <ng-content>.
Angular only projects that external content after it runs ngOnInit().
So in ngOnInit(), your @ContentChild(...) property is still undefined. 

//* Why ngAfterContentInit() is the right spot
After Angular finishes projecting all content, it calls ngAfterContentInit().
At that moment, every @ContentChild() or @ContentChildren() query has been resolved.
You can safely read or interact with the projected elements here.


❤️ ngAfterRender

❤️ ngAFterNextRender
Whereas after next render will only be triggered for the next change anywhere in the entire application. And therefore if you have some code that should be executed whenever anything changes anywhere or after the next change anywhere in your application, these two special hooks


*/

