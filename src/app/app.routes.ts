import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterComponent } from './character/character.component';
import { ComicsComponent } from './comics/comics.component';
import { ComicComponent } from './comic/comic.component';
import { CallbackComponent } from './callback/callback.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'characters/:id', component: CharacterComponent },
  { path: 'comics', component: ComicsComponent },
  { path: 'comics/:id', component: ComicComponent },
  { path: '**', redirectTo: '' }
];
