import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { PayyexComponent } from './work/payyex/payyex.component';
import { CryptobasketsComponent } from './work/cryptobaskets/cryptobaskets.component';
import { SprintComponent } from './work/sprint/sprint.component';
import { CoinComponent } from './work/coin/coin.component';
import { CancelonComponent } from './work/cancelon/cancelon.component';
import { CitymaxComponent } from './work/citymax/citymax.component';
import { ActifinderComponent } from './work/actifinder/actifinder.component';
import { IclubComponent } from './work/iclub/iclub.component';
import { DigencyComponent } from './work/digency/digency.component';
import { SoniroComponent } from './work/soniro/soniro.component';
import { FlexipostComponent } from './work/flexipost/flexipost.component';
import { UplauchComponent } from './work/uplauch/uplauch.component';
import { ApptopComponent } from './work/apptop/apptop.component';
import { LogoComponent } from './logo/logo.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AsideComponent } from './aside/aside.component';
import { WorkIntroComponent } from './work/work-intro/work-intro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkComponent,
    ContactComponent,
    PayyexComponent,
    CryptobasketsComponent,
    SprintComponent,
    CoinComponent,
    CancelonComponent,
    CitymaxComponent,
    ActifinderComponent,
    IclubComponent,
    DigencyComponent,
    SoniroComponent,
    FlexipostComponent,
    UplauchComponent,
    ApptopComponent,
    LogoComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    AsideComponent,
    WorkIntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
