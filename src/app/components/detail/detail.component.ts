import { Component, OnInit, Input } from '@angular/core';
import { selectedMeal } from '../../allmeals'
import { MEALS } from '../../mock-data';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['../breakfast/breakfast.component.css']
})

export class DetailComponent implements OnInit {
  @Input() meal: selectedMeal;
  meals = MEALS.lunch;
  total: number;
  add: Array<object>;

  constructor() { 
    this.total = 0;
    this.add  =[];
  }
 
  selectedMeal: selectedMeal;
  onSelect(meal: selectedMeal): number {
    this.selectedMeal = meal;  
    this.total += meal.price;  
    if(this.add.includes(meal)){
      console.log('this.selectedMeal.quantity', this.selectedMeal.quantity);
      return this.selectedMeal.quantity +=1
    }else{
      console.log('else meal', this.add)
      return this.add.push(meal);
    }
  }

  delete(meal: selectedMeal): void{
    // this.total -= meal.price;
    const index: number = this.add.indexOf(meal);
    if (index !== -1) {
      if(meal.quantity > 1){
        meal.quantity-=1;
        this.total -= meal.price
      } else {
        this.add.splice(index,1)
        this.total -= meal.price
      }
    }
  }

  sendToKitchen = () =>{
    console.log(this.add)
  }

  ngOnInit(): void {}

}
