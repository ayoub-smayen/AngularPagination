import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicationComponent } from './publication/publication.component';
import { HttpClientModule } from '@angular/common/http';
import { AddPublicationComponent } from './add-publication/add-publication.component';
import { PublicationDetailsComponent } from './publication-details/publication-details.component';
import { FormsModule } from '@angular/forms';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { MomentModule } from 'ngx-moment';



@NgModule({
  declarations: [
    AppComponent,
    PublicationComponent,
    AddPublicationComponent,
    PublicationDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    PickerModule,
    MomentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
