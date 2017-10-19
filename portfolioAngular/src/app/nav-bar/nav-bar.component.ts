import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

	Projects: Array<any>;
	Interests: Array<any>;
	CVs: Array<any>;

	constructor() { }

	ngOnInit() {
	}

}
