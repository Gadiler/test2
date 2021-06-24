import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.css']
})
export class ImageViewComponent implements OnInit {
  @Input()
  public path? = '';

  @Input()
  public width? = "350";

  constructor() { }

  ngOnInit(): void {
  }

  public setImagePath(path: string): void {
    this.path = path;
  }

}
