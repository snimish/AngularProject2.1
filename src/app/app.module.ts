import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { ROUTES } from './app.routes';

import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './callback/callback.component';
import { CharacterComponent } from './character/character.component';
import { ComicsComponent } from './comics/comics.component';
import { CharactersComponent } from './characters/characters.component';
import { ComicComponent } from './comic/comic.component';
import { MarvelDataService } from 'app/marvel-data/marvel-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CallbackComponent,
    CharacterComponent,
    ComicsComponent,
    CharactersComponent,
    ComicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [AuthService, MarvelDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
