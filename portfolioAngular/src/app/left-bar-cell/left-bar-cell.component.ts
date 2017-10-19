import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-left-bar-cell',
  templateUrl: './left-bar-cell.component.html',
  styleUrls: ['./left-bar-cell.component.css']
})
export class LeftBarCellComponent implements OnInit {

	
	@Input('barCV') barCV: any;

//	showCVs:true;
//	showInterests:false;
//	showProjects:false;

	constructor() { }

	ngOnInit() {
	}

}
