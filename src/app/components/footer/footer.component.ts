import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private home: HomeComponent) { }

  ngOnInit() {
  }

  selectTown(town) {
    this.home.insertData(town);
  }
}
