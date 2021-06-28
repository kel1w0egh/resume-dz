import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-info',
  templateUrl: './experience-info.component.html',
  styleUrls: ['./experience-info.component.css']
})
export class ExperienceInfoComponent implements OnInit {
  public experience: string[];
  constructor() {
    this.experience = ['Опыт 1', 'Опыт 2', 'Опыт 3'];
  }

  ngOnInit(): void {
  }

}
