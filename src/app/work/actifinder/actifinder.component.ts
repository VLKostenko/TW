import { Component, OnInit } from '@angular/core';
import { fade } from '../../animations';


@Component({
  selector: 'app-actifinder',
  templateUrl: './actifinder.component.html',
  styleUrls: ['./actifinder.component.scss'],
  animations: [fade]
})
export class ActifinderComponent implements OnInit {
  constructor() {}

  ngOnInit() {
  }


}
