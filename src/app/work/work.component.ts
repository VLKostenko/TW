import { Component, OnInit } from '@angular/core';
import { fade } from '../animations';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  animations: [fade]
})
export class WorkComponent implements OnInit {
  constructor() {  }

  ngOnInit() {
  }

}
