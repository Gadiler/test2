import { Component, OnInit } from '@angular/core';
import { Point } from 'src/app/models/point';
import { PointsServerService } from 'src/app/services/points-server.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public point?: Point;
  constructor(private pointsServer: PointsServerService) { }

  ngOnInit(): void {
  }

  public searchByName(): void {
    var name = (<HTMLInputElement>document.getElementById('mySearch'))?.value;
    console.log(name);
    this.pointsServer.getPointByName(name).subscribe(point => {
      if (name === point.name) {
        document.getElementById('imageBox')?.setAttribute('src', '/assets/images/'+point.id+'/1.jpg');
        // var p: any = document.getElementById(`carouselExampleInterval${point.id}`);
        return;
      }
    },
      err => alert(err.message));


  }

}
