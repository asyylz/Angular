import { Component } from '@angular/core';
import { Header } from './header/header';
import { User } from './user/user';
import { DUMMY_USERS } from '../dummy-users';
import { Tasks } from './tasks/tasks';
import { DUMMY_TASKS } from '../dummy-task';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, User, Tasks], // We are registering the header component here
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  users = DUMMY_USERS;

  selectedUserId: string = '';

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  task: string | null = null;

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
