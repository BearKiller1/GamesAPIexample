import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.scss']
})
export class AllproductComponent implements OnInit {
  items:any;

  constructor(private obj:GamesService) { }

  ngOnInit(): void {
    var games = this.obj.getAll().subscribe( (data:any) => {
      this.items = data.results;
      console.log(data.results);
    });
  }

}
