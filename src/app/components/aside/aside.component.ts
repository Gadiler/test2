import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Area } from 'src/app/models/area';
import { Point } from 'src/app/models/point';
import { PointsServerService } from 'src/app/services/points-server.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  @Input()
  public points: Point[] = [];
  @Input()
  public areas: Area[] = [];

  private index = 1;
  private id = 0;

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

  public setImagePath(path: string) {
    document.getElementById('imageBox')?.setAttribute('src', path);
  }

  public setHomeImage(id: any, arrow: any, numOfImages: any) {
    if (id !== this.id) {
      this.index = 1;
      this.id = id;
    }
    if (arrow === "prev") {
      if (this.index === 1) {
        this.index = numOfImages;
      } else {
        this.index--;
      }
    } else {
      if (this.index === numOfImages) {
        this.index = 1;
      } else {
        this.index++;
      }
    }
    this.setImagePath("/assets/images/" + id + "/" + this.index + ".jpg");
  }
}
