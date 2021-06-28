import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainInfoComponent } from './main-info/main-info.component';
import { ExperienceInfoComponent } from './experience-info/experience-info.component';
import { LearnInfoComponent } from './learn-info/learn-info.component';

@NgModule({
  declarations: [
    AppComponent,
    MainInfoComponent,
    ExperienceInfoComponent,
    LearnInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
