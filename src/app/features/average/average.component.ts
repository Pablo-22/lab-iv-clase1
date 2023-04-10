import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-average',
  templateUrl: './average.component.html',
  styleUrls: ['./average.component.css']
})
export class AverageComponent implements OnInit {

	edadUno:number = 0;
	edadDos:number = 0;
	
	average:number = 0;
	sum:number = 0;

	constructor() { }

	ngOnInit(): void {
	}

	calcAverage(numbers:number[]){
		this.average = this.calcSum(numbers) / numbers.length
		return this.average
	}

	calcSum(numbers:number[]){
		this.sum =  numbers.reduce((a,b)=>a+b)
		return this.sum
	}

	makeCalculations(){
		this.sum = this.calcSum([this.edadUno, this.edadDos])
		this.average = this.calcAverage([this.edadUno, this.edadDos])
	}

}
