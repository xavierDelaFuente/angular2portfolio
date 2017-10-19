import { Component, OnInit } from '@angular/core';

import { CurrentSkills } from './../data/CurrentSkills';
import { workedSkills } from './../data/workedSkills';
import { learningSkills } from './../data/learningSkills';
import { interestedSkills } from './../data/interestedSkills';


@Component({
  selector: 'app-cv-programming-languajes',
  templateUrl: './cv-programming-languajes.component.html',
  styleUrls: ['./cv-programming-languajes.component.css']
})
export class CvProgrammingLanguajesComponent implements OnInit {

	CurrentSkills: Array<any> = CurrentSkills;
	workedSkills: Array<any> = workedSkills;
	learningSkills: Array<any> = learningSkills;
	interestedSkills: Array<any> = interestedSkills;

  constructor() { }

  ngOnInit() {
  }

}
