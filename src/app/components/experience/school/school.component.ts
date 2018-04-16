import { Component } from '@angular/core';
import { MnFullpageService } from 'ngx-fullpage';

@Component({
  selector: 'school',
  styleUrls: ['school.component.scss'],
  templateUrl: 'school.component.html'
})
export class SchoolComponent {

  listOfAchievement = [
    {year: '1992', location:'here', description: 'Pi arrive'},
    {year: '2000', location:'there', description: 'Well, it 2000.'},
    {year: '2014', location:'somewhere', description: `Random year. Cuz i don't know what to put in`},
    {year: '2018', location:'guess where', description: 'Current year.'},
  ];

  listOfResearch = [
    {name: 'paper1', link:'https://www.google.com'},
    {name: 'paper2', link:'https://www.yahoo.com'},
    {name: 'paper3', link:'https://www.instagram.com'}
  ];

  constructor(
    public fullpageService: MnFullpageService
  ) {}
}