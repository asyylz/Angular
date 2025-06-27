import { Component, input, output, signal } from '@angular/core'

import { Ticket } from '../ticket.model'

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  data = input.required<Ticket>()
  // data = input.required<Ticket>({transform:(value)=>}) Example changing type of data
  // ticket = input.required<Ticket>({ alias: 'data' }) // Setting alias, we are just using property name but it is not recommended

  detailsVisible = signal(false)
  // @Output('closeTicket')
  close = output()
  // close = output({alias:"closeTicket"}). //setting alias

  onToggleDetails() {
    // this.detailsVisible.set(!this.detailsVisible());
    this.detailsVisible.update((wasVisible) => !wasVisible)
  }
  onMarkAsCompleted() {
    this.close.emit()
  }
}

