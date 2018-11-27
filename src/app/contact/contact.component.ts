import { Component, OnInit } from '@angular/core';
import { fade } from '../animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [fade]

})
export class ContactComponent implements OnInit {

  email: string;
  message: string;

  constructor() { }

  ngOnInit() {
  }

  processForm() {
    const allInfo = `My email is ${this.email}. My message is ${this.message}`;
    alert(allInfo);
  }

}
