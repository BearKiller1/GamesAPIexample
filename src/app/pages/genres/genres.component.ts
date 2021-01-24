import { Component, OnInit } from '@angular/core';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {
  items:any;

  constructor(private obj:GenresService) { }

  ngOnInit(): void {
    var genres = this.obj.getAll().subscribe( (data:any) => {
      this.items = data.results;
      console.log(data.results);
    });
  }

}
