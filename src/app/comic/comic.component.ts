import { Component, OnInit } from '@angular/core';
import { MarvelDataService } from 'app/marvel-data/marvel-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {
  private isLoaded: boolean = false;
  private comic: any;
  constructor(private marvelService: MarvelDataService, private route: ActivatedRoute, private router: Router) { }
  id: number;
  private sub: any;

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      console.log(this.id);

      this.marvelService.getComicById(this.id).subscribe((res) => {
        this.comic = res.data.results;
        this.isLoaded = true;
        console.log(res);
      });

    });
  }

  loadCreators(id:number){
    this.router.navigate(['/creators'], { queryParams: { cid: id } });
  }  
}
