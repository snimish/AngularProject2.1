import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { MarvelDataService } from 'app/marvel-data/marvel-data.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private characters: any;
 
  constructor(public auth: AuthService, private marvelService: MarvelDataService, private router: Router) { }

  ngOnInit() {
  }

  private navigateToCharacterData()
  {
    this.router.navigate(['/characters']);
  }
}
