import { Component, OnInit } from '@angular/core';

import { CurrentSkills } from './../data/CurrentSkills';
import { workedSkills } from './../data/workedSkills';
import { learningSkills } from './../data/learningSkills';
import { interestedSkills } from './../data/interestedSkills';

@Component({
  selector: 'app-portfolio-cv',
  templateUrl: './portfolio-cv.component.html',
  styleUrls: ['./portfolio-cv.component.css']
})
export class PortfolioCvComponent implements OnInit {

	//currentSkills: Array<any>;
	CurrentSkills: Array<any> = CurrentSkills;
	workedSkills: Array<any> = workedSkills;
	learningSkills: Array<any> = learningSkills;
	interestedSkills: Array<any> = interestedSkills;

  constructor() { }

  ngOnInit() {
  	/*this.http.get('/src/app/data.json')
  		.map(res => res.json())S
  		.subscribe(
  			data => console.log(data)
  			)*/
  }

}
