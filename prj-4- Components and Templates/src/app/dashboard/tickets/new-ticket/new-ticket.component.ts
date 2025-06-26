import {
  AfterViewInit,
  Component,
  ElementRef,
  viewChild,
  OnInit,
  ViewChild,
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

  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form')
  ngOnInit() {
    console.log('On init')
    console.log(this.form?.nativeElement)
  }

  onSubmit(title: string, ticketText: string) {
    console.log(title)
    console.log(ticketText)
    this.form?.nativeElement.reset()
  }
  ngAfterViewInit() {
    console.log('After view init')
    console.log(this.form?.nativeElement)
  }
}
