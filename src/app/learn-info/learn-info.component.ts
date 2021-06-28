import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-info',
  templateUrl: './learn-info.component.html',
  styleUrls: ['./learn-info.component.css']
})
export class LearnInfoComponent implements OnInit {
  public skills: string[];
  public knowledge: string[];
  public certificates: string[];

  constructor() {
    this.skills = ['Навык 1', 'Навык 2', 'Навык 3'];
    this.knowledge = ['Знание 1', 'Знание 2', 'Знание 3'];
    this.certificates = ['https://via.placeholder.com/100x100', 'https://via.placeholder.com/100x100', 'https://via.placeholder.com/100x100'];
  }

  ngOnInit(): void {
  }

}
