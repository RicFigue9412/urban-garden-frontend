import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
  notifications: any[] = [];

  constructor(private apiService: ApiService) {
    this.getNotifications();
  }

  getNotifications() {
    this.apiService.getNotifications().subscribe(data => this.notifications = data);
  }
}
