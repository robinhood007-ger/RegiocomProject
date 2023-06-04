import { Component, OnInit } from '@angular/core';
import { BarModel } from '../models/barModel';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss'],
})
export class BarchartComponent implements OnInit {
  exampleData: BarModel[] = [
    { value: 15, color: 'red', legend: 'Data1', size: '' },
    { value: 25, color: 'green', legend: 'Data2', size: '' },
    { value: 40, color: 'blue', legend: 'Data3', size: '' },
    { value: 20, color: 'yellow', legend: 'Data4', size: '' },
  ];
  total: number = 0
  maxHeight: number = 200

  ngOnInit() {
    this.calculateHeight()
  }

  calculateHeight(){
    this.exampleData.forEach(element => {
      this.total += element.value;
    });
    this.exampleData.forEach(element => {
      element.size = Math.round((element.value*this.maxHeight)/this.total) + '%';
    });
  }
}
