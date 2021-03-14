import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeVideoContainerComponent } from './home-video-container/home-video-container.component';
import { IndividualVideoComponent } from './individual-video/individual-video.component';
import { HomeComponent } from './home/home.component';
import { IndividualSideCardsComponent } from './individual-side-cards/individual-side-cards.component';
import { YoutubeLikesTitleComponent } from './youtube-likes-title/youtube-likes-title.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { CommentsComponent } from './comments/comments.component';
import { CreateVideoComponent } from './create-video/create-video.component';

import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    HomeVideoContainerComponent,
    IndividualVideoComponent,
    HomeComponent,
    IndividualSideCardsComponent,
    YoutubeLikesTitleComponent,
    SubscribeComponent,
    CommentsComponent,
    CreateVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
