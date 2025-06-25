import { Component } from '@angular/core';
// import { NgFor, NgIf } from '@angular/common';
import { Header } from './header/header';
import { User } from './user/user';
import { DUMMY_USERS } from '../dummy-users';
import { Tasks } from './tasks/tasks';

/* 🔍 NgFor  is depricated but if it is used, needs to be unlocked here by adding imports */

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, User, Tasks], // We are registering the header component here
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}