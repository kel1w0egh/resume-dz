import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.css']
})
export class MainInfoComponent implements OnInit {
  public fio: string;
  public phone: string;
  public city: string;
  public photoURL: string;

  constructor() {
    this.fio = 'ПОЛЯЕВ АНТОН АЛЕКСАНДРОВИЧ';
    this.phone = '+38000000000';
    this.city = 'Кривой Рог';
    this.photoURL = 'https://via.placeholder.com/120x120';
  }

  ngOnInit(): void {
  }

}
