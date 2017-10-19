import { Component, OnInit } from '@angular/core';
import { Interests } from './../data/Interests';

@Component({
  selector: 'app-portfolio-interests',
  templateUrl: './portfolio-interests.component.html',
  styleUrls: ['./portfolio-interests.component.css']
})
export class PortfolioInterestsComponent implements OnInit {

  Interests: Array<any> = Interests;

  Volunteering:boolean = true;
  Music:boolean = false;
  Sports:boolean = false;

  switchLayout(element){
    this.Volunteering = false;
    this.Music        = false;
    this.Sports       = false;
    switch (element.parentlabel) {
      case "Volunteering":
        this.Volunteering = true;
        break;
      case "Music":
        this.Music  = true;
        break;
      case "Sports":
        this.Sports = true;
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
