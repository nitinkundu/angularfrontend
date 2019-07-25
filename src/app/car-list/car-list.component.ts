import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CarService } from '../car.service';
 
@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
 
  car: Car[];
 
  constructor(private carService: CarService) {
  }
 
  ngOnInit() {
    this.carService.findAll().subscribe(data => {
      this.car = data;
    });
  }
}