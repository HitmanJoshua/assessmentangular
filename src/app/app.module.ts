import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooklistComponent } from './Component/booklist/booklist.component';
import { BookserviceService } from './Services/bookservice.service';
import { HttpClient } from 'selenium-webdriver/http';
// import { HttpClientModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BooklistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BookserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
