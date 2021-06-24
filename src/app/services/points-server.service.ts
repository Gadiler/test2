import { Point } from 'src/app/models/point';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Area } from '../models/area';

const DOMAIN_URL ='';


@Injectable({
  providedIn: 'root'
})
export class PointsServerService {

  constructor(private httpClient: HttpClient) { }

  public getAllPoints(): Observable<Point[]> {
    return this.httpClient.get<Point[]>("https://book-sayeret-g.herokuapp.com/user/getAllPoints");
    // return this.httpClient.get<Point[]>('/user/getAllPoints');
  }
  public getPointByName(name: string): Observable<Point>{
    return this.httpClient.get<Point>(`https://book-sayeret-g.herokuapp.com/user/getPointByName/${name}`);
    // return this.httpClient.get<Point>(`/getPointByName/${name}`);
  }
  public getAllAreas(): Observable<Area[]> {
    return this.httpClient.get<Area[]>("https://book-sayeret-g.herokuapp.com/user/getAllAreas");
    // return this.httpClient.get<Area[]>("/user/getAllAreas");
  }
}
