import { Component } from '@angular/core';
import { MnFullpageService } from 'ngx-fullpage';

@Component({
  selector: 'work',
  styleUrls: ['work.component.scss'],
  templateUrl: 'work.component.html'
})
export class WorkComponent {
  constructor(
    public fullpageService: MnFullpageService
  ) {}
}