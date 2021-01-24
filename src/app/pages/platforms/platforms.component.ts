import { Component, OnInit } from '@angular/core';
import { PlatformsService } from '../platforms.service';

@Component({
  selector: 'app-platforms',
  templateUrl: './platforms.component.html',
  styleUrls: ['./platforms.component.scss']
})
export class PlatformsComponent implements OnInit {
  items:any;

  constructor(private obj:PlatformsService) { }

  ngOnInit(): void {
    var platforms = this.obj.getAll().subscribe( (data:any) => {
      this.items = data.results;
      console.log(data.results);
    });
  }

}
