import { Component, OnInit  } from '@angular/core';
import { Observable } from "rxjs/Observable";

import { ThemeService } from "./services/theme.service";

@Component({
  selector: 'app-root',
  // host: {
  //   "[class.payyex-theme]": "( theme === 'payyex' )",
  //   "[class.default-theme]": "( theme === 'default' )",
  //   "[class.apptop-theme]": "( theme === 'apptop' )"
  // },
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'TotemWide';

  isThemeDark: Observable<boolean>;
  isThemeCyan: Observable<boolean>;

  // public theme: string;

  constructor(private themeService: ThemeService) {
    // this.theme = 'default';
  }
  ngOnInit() {
    this.isThemeDark = this.themeService.isThemeDark;
    this.isThemeCyan = this.themeService.isThemeCyan;
  }


}
