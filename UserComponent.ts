import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  users: any[] = [];
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private apiService: ApiService) {
    this.getUsers();
  }

  getUsers() {
    this.apiService.getUsers().subscribe(data => this.users = data);
  }

  register() {
    const user = { username: this.username, email: this.email, password: this.password };
    this.apiService.createUser(user).subscribe(() => this.getUsers());
  }
}
