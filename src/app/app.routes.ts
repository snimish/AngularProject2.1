import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterComponent } from './character/character.component';
import { ComicsComponent } from './comics/comics.component';
import { ComicComponent } from './comic/comic.component';
import { CallbackComponent } from './callback/callback.component';
import { CanActivateViaAuthGuard } from 'app/auth/login-auth.guard';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'characters', component: CharactersComponent, canActivate: [CanActivateViaAuthGuard] },
  { path: 'characters/:id', component: CharacterComponent, canActivate: [CanActivateViaAuthGuard] },
  { path: 'comics', component: ComicsComponent, canActivate: [CanActivateViaAuthGuard] },
  { path: 'comics/:id', component: ComicComponent, canActivate: [CanActivateViaAuthGuard] },
  { path: '**', redirectTo: '' }
];
