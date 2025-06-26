import { Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core'

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline'
  // private interval?: ReturnType<typeof setInterval>
  constructor() {}

  private destroyRef = inject(DestroyRef)
  ngOnInit() {


    const interval = setInterval(() => {
      const rnd = Math.random() // 0 - 0.9999999999999

      if (rnd < 0.5) {
        this.currentStatus = 'online'
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline'
      } else {
        this.currentStatus = 'unknown'
      }
    }, 5000)
    // Modern way available on newer after 16
    this.destroyRef.onDestroy(() => {
      clearInterval(interval)
    })
  }
  ngAfterViewInit() {
    console.log('After view init')
  }
  // ngOnDestroy() {
  //   clearTimeout(this.interval)
  // }
}
