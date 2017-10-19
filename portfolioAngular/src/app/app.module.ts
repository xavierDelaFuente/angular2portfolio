import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { routes } from './app.router';

import { AppComponent } from './app.component';
import { PortfolioCvComponent } from './portfolio-cv/portfolio-cv.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LeftBarComponent } from './left-bar/left-bar.component';
import { SkillCardComponent } from './skill-card/skill-card.component';
import { PortfolioInterestsComponent } from './portfolio-interests/portfolio-interests.component';
import { PortfolioProjectsComponent } from './portfolio-projects/portfolio-projects.component';
import { LeftBarCellComponent } from './left-bar-cell/left-bar-cell.component';
import { InterestsMusicComponent } from './interests-music/interests-music.component';
import { InterestsSportsComponent } from './interests-sports/interests-sports.component';
import { InterestsVolunteeringComponent } from './interests-volunteering/interests-volunteering.component';
import { CvProfessionalExperienceComponent } from './cv-professional-experience/cv-professional-experience.component';
import { CvOtherExperiencesComponent } from './cv-other-experiences/cv-other-experiences.component';
import { CvCertifiedStudiesComponent } from './cv-certified-studies/cv-certified-studies.component';
import { CvOtherStudiesComponent } from './cv-other-studies/cv-other-studies.component';
import { CvLanguajesComponent } from './cv-languajes/cv-languajes.component';
import { CvProgrammingLanguajesComponent } from './cv-programming-languajes/cv-programming-languajes.component';
import { CvTechnicalSkillsComponent } from './cv-technical-skills/cv-technical-skills.component';
import { CvCapacitiesComponent } from './cv-capacities/cv-capacities.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioCvComponent,
    NavBarComponent,
    LeftBarComponent,
    SkillCardComponent,
    PortfolioInterestsComponent,
    PortfolioProjectsComponent,
    LeftBarCellComponent,
    InterestsMusicComponent,
    InterestsSportsComponent,
    InterestsVolunteeringComponent,
    CvProfessionalExperienceComponent,
    CvOtherExperiencesComponent,
    CvCertifiedStudiesComponent,
    CvOtherStudiesComponent,
    CvLanguajesComponent,
    CvProgrammingLanguajesComponent,
    CvTechnicalSkillsComponent,
    CvCapacitiesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
