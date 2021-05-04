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
import { GooglemapsComponent } from './googlemaps/googlemaps.component';
import { AgmCoreModule } from '@agm/core';
import { ChatComponent } from './chat/chat.component';



@NgModule({
  declarations: [
    AppComponent,
    PublicationComponent,
    AddPublicationComponent,
    PublicationDetailsComponent,
    GooglemapsComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    PickerModule,
    MomentModule,
    AgmCoreModule.forRoot({
      apiKey:''
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
