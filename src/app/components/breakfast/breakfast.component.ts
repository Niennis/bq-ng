import { Component, OnInit } from '@angular/core';
import { selectedMeal } from '../../allmeals';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})

export class BreakfastComponent implements OnInit {

  constructor() {}

  selectedMeal: selectedMeal;
 
  ngOnInit(): void {}

}
