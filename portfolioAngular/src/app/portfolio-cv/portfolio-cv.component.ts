import { Component, OnInit } from '@angular/core';

import { barCVs } from './../data/barCVs';

@Component({
  selector: 'app-portfolio-cv',
  templateUrl: './portfolio-cv.component.html',
  styleUrls: ['./portfolio-cv.component.css']
})
export class PortfolioCvComponent implements OnInit {

  barCVs: Array<any> = barCVs;

  professionalExperience:boolean = true;
  otherExperiences:boolean = false;
  certifiedStudies:boolean = false;
  otherStudies:boolean = false;
  languaje:boolean = false;
  programmingLanguages:boolean = false;
  technicalSkills:boolean = false;
  Capacities:boolean = false;
  cvSummary:boolean = false;

  switchLayout(element){
    this.professionalExperience = false;
    this.otherExperiences = false;
    this.certifiedStudies = false;
    this.otherStudies = false;
    this.languaje = false;
    this.programmingLanguages = false;
    this.technicalSkills = false;
    this.Capacities = false;
    this.cvSummary = false;

    switch (element.reference) {
      case "professionalExperience":
        this.professionalExperience = true;
        break;
      case "otherExperiences":
        this.otherExperiences  = true;
        break;
      case "certifiedStudies":
        this.certifiedStudies = true;
        break;
      case "otherStudies":
        this.otherStudies = true;
        break;
      case "languaje":
        this.languaje  = true;
        break;
      case "programmingLanguages":
        this.programmingLanguages = true;
        break;
      case "technicalSkills":
        this.technicalSkills  = true;
        break;
      case "Capacities":
        this.Capacities = true;
        break;
      case "cvSummary":
        this.cvSummary = true;
        break;
      default:
        console.log('non-existent selection');
        break;
    }
  }
  

  constructor() { }

  ngOnInit() {
  	/*this.http.get('/src/app/data.json')
  		.map(res => res.json())S
  		.subscribe(
  			data => console.log(data)
  			)*/
  }

}
