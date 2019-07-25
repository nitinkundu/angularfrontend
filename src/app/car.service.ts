import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Car } from './car';
import { Observable } from 'rxjs/Observable';
 
@Injectable()
export class CarService {
 
  private carUrl: string;
 
  constructor(private http: HttpClient) {
    this.carUrl = 'http://localhost:8090/car';
  }
 
  public findAll(): Observable<Car[]> {
    return this.http.get<Car[]>(this.carUrl);
  }
 
  public save(car: Car) {
    return this.http.post<Car>(this.carUrl, car);
  }
}