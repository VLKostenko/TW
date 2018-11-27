import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})

export class ThemeService {

  public themeDark: Subject<boolean> = new Subject<boolean>();
  isThemeDark = this.themeDark.asObservable();

  public themeCyan: Subject<boolean> = new Subject<boolean>();
  isThemeCyan = this.themeCyan.asObservable();


  setDarkTheme(isThemeDark: boolean) {
    this.themeDark.next(isThemeDark);
  }

  setCyanTheme(isThemeCyan: boolean) {
    this.themeDark.next(isThemeCyan);
  }


  constructor() { }
}
