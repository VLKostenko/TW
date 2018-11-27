import { Component, OnInit } from '@angular/core';
import { fade } from '../../animations';

@Component({
  selector: 'app-work-intro',
  templateUrl: './work-intro.component.html',
  styleUrls: ['./work-intro.component.scss'],
  animations: [fade]

})
export class WorkIntroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
