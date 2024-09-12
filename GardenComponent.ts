import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-garden',
  templateUrl: './garden.component.html',
  styleUrls: ['./garden.component.scss']
})
export class GardenComponent {
  gardens: any[] = [];
  location: string = '';
  plantTypes: string = '';
  size: number = 0;

  constructor(private apiService: ApiService) {
    this.getGardens();
  }

  getGardens() {
    this.apiService.getGardens().subscribe(data => this.gardens = data);
  }

  addGarden() {
    const garden = { location: this.location, plantTypes: this.plantTypes, size: this.size };
    this.apiService.createGarden(garden).subscribe(() => this.getGardens());
  }
}
