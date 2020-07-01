import { Component, OnInit } from '@angular/core';
import { selectedMeal } from '../../allmeals';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['../breakfast/breakfast.component.css']
})
export class LunchComponent implements OnInit {
  // meals = MEALS.lunch;
  // total: number;
  // add: Array<object>;

  constructor() {
    // this.total = 0;
    // this.add  =[];
  }

  selectedMeal: selectedMeal;
  // onSelect(meal: selectedMeal): void {
  //   this.selectedMeal = meal;
  //   this.total += meal.price;
  //   this.add.push(meal);
  // }

  // delete(meal): void{
  //   console.log('meal', meal)
  //   this.total -= meal.price;
  //   const index: number = this.add.indexOf(meal);
  //   if (index !== -1) {
  //     this.add.splice(index,1)
  //   }
  // }

  ngOnInit(): void {}
}
