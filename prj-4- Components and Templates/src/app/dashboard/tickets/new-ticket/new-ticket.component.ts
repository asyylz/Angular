import {
  AfterViewInit,
  Component,
  ElementRef,
  viewChild,
  OnInit,
  ViewChild,
  output,
} from '@angular/core'

import { ButtonComponent } from '../../../shared/button/button.component'
import { ControlComponent } from '../../../shared/control/control.component'
import { FormsModule } from '@angular/forms'
// import { ControlComponent } from "../../../shared/control/control.component";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
  imports: [ButtonComponent, ControlComponent, FormsModule],
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  // Must select template variable name without hash
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>
  enteredTitle = '';
  enteredText = '';
  // @Output() add = new EventEmitter<{title: string; text: string}>();
  add = output<{ title: string; text: string }>()

  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form')
  ngOnInit() {
    console.log('On init')
    console.log(this.form?.nativeElement)
  }

  onSubmit() {
    this.add.emit({ title: this.enteredTitle, text: this.enteredText });
    // this.form?.nativeElement.reset();
    this.enteredTitle = '';
    this.enteredText = '';
  }
  ngAfterViewInit() {
    console.log('After view init')
    console.log(this.form?.nativeElement)
  }
}
