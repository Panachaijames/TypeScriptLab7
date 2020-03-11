import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leinster-countries',
  templateUrl: './leinster-countries.page.html',
  styleUrls: ['./leinster-countries.page.scss'],
})
export class LeinsterCountriesPage implements OnInit {

  counties: string[] = ["Carlow", "Dublin", "Kildare",
"Kilkenny", "Laois", "Longford", "Louth", "Meath",
"Offaly", "Westmeath", "Wexford", "Wicklow"];
 constructor() { }
  ngOnInit() {
  }

}
