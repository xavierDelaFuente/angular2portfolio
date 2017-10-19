import { Component, OnInit, Input } from '@angular/core';

import { barCVs } from './../data/barCVs';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.css']
})
export class LeftBarComponent implements OnInit {

	@Input('barCVs') barCVs: any;

  switchLayout(element){
debugger;

  }

	constructor() { }

	ngOnInit() {
	}

}
