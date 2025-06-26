import {
  Component,
  DestroyRef,
  effect,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core'

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  // currentStatus: 'online' | 'offline' | 'unknown' = 'offline'

  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline')

  // private interval?: ReturnType<typeof setInterval>
  constructor() {
    // Angular now set up a subscriptiopn with effect and automatically remove subcription if component is removed from dom
    effect(() => {
      console.log(this.currentStatus());
    });
  }

  private destroyRef = inject(DestroyRef)
  ngOnInit() {
    const interval = setInterval(() => {
      const rnd = Math.random() // 0 - 0.9999999999999

      if (rnd < 0.5) {
        // this.currentStatus = 'online'
        this.currentStatus.set('online')
      } else if (rnd < 0.9) {
        // this.currentStatus = 'offline'
        this.currentStatus.set('offline')
      } else {
        // this.currentStatus = 'unknown'
        this.currentStatus.set('unknown')
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
