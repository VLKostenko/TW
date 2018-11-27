import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  isThemeDark: Observable<boolean>;
  isThemeCyan: Observable<boolean>;


  constructor(private themeService: ThemeService) {
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
