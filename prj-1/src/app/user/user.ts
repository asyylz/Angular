import { Component } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';

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
  selectedUser = DUMMY_USERS[randomIndex];
}
