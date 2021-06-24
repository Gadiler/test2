import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Area } from 'src/app/models/area';
import { Point } from 'src/app/models/point';
import { PointsServerService } from 'src/app/services/points-server.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input()
  public points: Point[] = [];
  @Input()
  public areas: Area[] = [];
  @Input()
  public path? = '';
  
  constructor(private title: Title, private pointsServer: PointsServerService) { }


  ngOnInit(): void {
    this.getAllPoints();
    this.getAllAreas();
  }

  public getAllPoints(): void {
    this.pointsServer.getAllPoints().subscribe(points => { this.points! = points; }, err => alert(err.message));
  }

  public getAllAreas(): void {
    this.pointsServer.getAllAreas().subscribe(areas => {
      this.areas! = areas;
    }, err => alert(err.message));
  }

  public haveImage(number: number, point: Point): boolean {
    return point.numOfImages! > number || point.numOfImages === number;
  }


}
