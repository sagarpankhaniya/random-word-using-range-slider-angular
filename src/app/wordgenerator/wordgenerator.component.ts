import { Component, OnInit } from '@angular/core';
import { fruits } from '../Variables';





@Component({
  selector: 'app-wordgenerator',
  templateUrl: './wordgenerator.component.html',
  styleUrls: ['./wordgenerator.component.css']
})
export class WordgeneratorComponent implements OnInit {
  
  Demo=[];
  value=25;
  flag = false;

  constructor() {}

  ngOnInit(): void {
    console.log();
    
  }
  demo() {
    this.Demo=fruits.slice(0,this.value);
    this.flag = true;
  }
}
