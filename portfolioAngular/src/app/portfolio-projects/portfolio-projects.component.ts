import { Component, OnInit } from '@angular/core';
import { Projects } from './../data/Projects';


@Component({
  selector: 'app-portfolio-projects',
  templateUrl: './portfolio-projects.component.html',
  styleUrls: ['./portfolio-projects.component.css']
})
export class PortfolioProjectsComponent implements OnInit {

	Projects: Array<any> = Projects;

	Angular:boolean = true;
  	React:boolean = false;
  	Image:boolean = false;
  	Sound:boolean = false;
  	Video:boolean = false;
  	MachineLearning:boolean = false;


	switchLayout(element){
		this.Angular = false;
		this.React = false;
		this.Image = false;
		this.Sound = false;
		this.Video = false;
		this.MachineLearning = false;

		switch (element.parentlabel) {
		  case "Angular":
		    this.Angular = true;
		    break;
		  case "React":
		    this.React  = true;
		    break;
		  case "Image":
		    this.Image = true;
		    break;
		  case "Sound":
		    this.Sound = true;
		    break;
		  case "Video":
		    this.Video  = true;
		    break;
		  case "Machine Learning":
		    this.MachineLearning = true;
		    break;
		  default:
		    console.log('non-existent selection');
		    break;
		}
	}

  constructor() { }

  ngOnInit() {
  }

}
