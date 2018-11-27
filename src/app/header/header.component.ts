import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isThemeDark: Observable<boolean>;
  isThemeCyan: Observable<boolean>;


  // count of work
  work: any;

  constructor(private themeService: ThemeService) {

    this.work = {
      count: '35',
    };

  }

  ngOnInit() {
    this.isThemeDark = this.themeService.isThemeDark;
    this.isThemeCyan = this.themeService.isThemeCyan;

  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }

  toggleCyanTheme(checked: boolean) {
    this.themeService.setCyanTheme(checked);
  }

}
