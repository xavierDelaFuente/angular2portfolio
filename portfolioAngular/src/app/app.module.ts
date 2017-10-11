import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PortfolioCvComponent } from './portfolio-cv/portfolio-cv.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LeftBarComponent } from './left-bar/left-bar.component';
import { SkillCardComponent } from './skill-card/skill-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioCvComponent,
    NavBarComponent,
    LeftBarComponent,
    SkillCardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
