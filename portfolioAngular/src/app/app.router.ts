import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PortfolioCvComponent } from './portfolio-cv/portfolio-cv.component';
import { PortfolioInterestsComponent } from './portfolio-interests/portfolio-interests.component';
import { PortfolioProjectsComponent } from './portfolio-projects/portfolio-projects.component';

import { InterestsMusicComponent } from './interests-music/interests-music.component';
import { InterestsSportsComponent } from './interests-sports/interests-sports.component';
import { InterestsVolunteeringComponent } from './interests-volunteering/interests-volunteering.component';

export const router: Routes = [
	{ path:'', redirectTo:'cv', pathMatch:'full'},
	{ path:'cv', component:PortfolioCvComponent},
	{ path:'interests', component:PortfolioInterestsComponent},
	//{ path:'interests/music', component:InterestsMusicComponent},
	//{ path:'interests/sports', component:InterestsSportsComponent},
	//{ path:'interests/volunteer', component:InterestsVolunteeringComponent},
	{ path:'projects', component:PortfolioProjectsComponent},
];


export const routes: ModuleWithProviders = RouterModule.forRoot(router);