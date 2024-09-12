import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { GardenComponent } from './components/garden/garden.component';
import { NotificationComponent } from './components/notification/notification.component';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    GardenComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
