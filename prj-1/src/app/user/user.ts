/* 🧠 Angular, Zones, and Signals: The Big Picture

✅ 1. Angular’s Default Change Detection (with Zones)
Angular uses Zone.js to detect when something might have changed in your app — like:

An event (click, input)
A timer (setTimeout, setInterval)
An HTTP response (XHR, fetch)
A promise resolution
When any of those happen, Angular runs change detection across the entire component tree, starting from the root.

🔁 Even if just one variable changed, Angular re-checks everything (unless using OnPush strategy).
🔥 Problem:
This can lead to performance bottlenecks in large apps, because:

Unrelated components are re-evaluated.
There’s no fine-grained control over what triggered the update. */

/* ✅ 2. Why Signals Were Introduced
Signals (introduced in Angular 16) are Angular's answer to fine-grained reactivity, inspired by Reactivity models in SolidJS, Vue, etc.

With signals, only the parts of the UI that actually depend on the changed value get updated — no need to run change detection for the whole app.

Think of signals like Angular-native observables that:
Automatically track dependencies
React only when needed
Work without Zone.js */

/* 🆚 Zone-based vs Signal-based state management

Feature	Zone-based (NgZone)	Signals (@angular/core)
✅ Default Angular?	Yes	New in Angular 16+
🔁 Change detection	Global (whole component tree)	Fine-grained (only dependents)
🔍 Performance control	Requires OnPush, manual tuning	Built-in efficient updates
🧠 Reactive tracking	Implicit (zone triggers CD)	Explicit (you read/write signals)
❌ Drawbacks	Can be slow in big apps	Still maturing (as of Angular 17) */

// Input with uppercase is decorator , lowercase is a special function as signal

import {
  Component,
  signal,
  computed,
  Input,
  input,
  Output,
  output,
  EventEmitter,
} from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';
import { type UserType } from './user.model';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})

// So all the properties we are defining in our componnet  class here are avilable in the tremplate of the component that is core feature of angular
export class User {
  /*   Initial Priject base
  selectedUser = signal(DUMMY_USERS[randomIndex]);
  imagePath= computed(()=>'assets/users/' + this.selectedUser().avatar);

  get imagePath() {
    return `assets/users/${this.selectedUser.avatar}`;
  } */

  /*   // Signal input approach
  avatar = input.required<string>();
  name = input.required<string>();
  Modern approach of output similar to input signal  but it is not signal, it does not create a signal, 
  it is just a way to create an event emitter
  select =output<string>();
  Using signal to make the imagePath reactive
  imagePath = computed(() => `assets/users/${this.avatar()}`); */

  // ! near avatar tells TS that we know that this property will be initialized later, so it won't be undefined
  @Input({ required: true }) user: UserType = { id: '', avatar: '', name: '' };

  @Output() select = new EventEmitter<string>(); // Extra security to ensure that the output is always a string

  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
    // this.task = this.tasks.find((task) => task.userId === this.id)?.title || '';
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
    // this.selectedUser=DUMMY_USERS[randomIndex];
  }
}
