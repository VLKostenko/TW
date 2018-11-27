import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { WorkComponent } from './work/work.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ActifinderComponent } from './work/actifinder/actifinder.component';
import { ApptopComponent } from './work/apptop/apptop.component';
import { WorkIntroComponent } from './work/work-intro/work-intro.component';
import { IclubComponent } from './work/iclub/iclub.component';
import { CancelonComponent } from './work/cancelon/cancelon.component';
import { CitymaxComponent } from './work/citymax/citymax.component';
import { CoinComponent } from './work/coin/coin.component';
import { CryptobasketsComponent } from './work/cryptobaskets/cryptobaskets.component';
import { DigencyComponent } from './work/digency/digency.component';
import { FlexipostComponent } from './work/flexipost/flexipost.component';
import { PayyexComponent } from './work/payyex/payyex.component';
import { SoniroComponent } from './work/soniro/soniro.component';
import { SprintComponent } from './work/sprint/sprint.component';
import { UplauchComponent } from './work/uplauch/uplauch.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'work', component: WorkComponent,
    children: [
      { path: 'intro', component: WorkIntroComponent, outlet: 'workIntro'},
      { path: 'actifinder', component: ActifinderComponent, outlet: 'workActifinder'},
      { path: 'apptop', component: ApptopComponent, outlet: 'workApptop'},
      { path: 'cancelon', component: CancelonComponent, outlet: 'workCancelon'},
      { path: 'citymax', component: CitymaxComponent, outlet: 'workCitymax'},
      { path: 'coin', component: CoinComponent, outlet: 'workCoin'},
      { path: 'cryptobaskets', component: CryptobasketsComponent, outlet: 'workCryptobaskets'},
      { path: 'digency', component: DigencyComponent, outlet: 'workDigency'},
      { path: 'flexipost', component: FlexipostComponent, outlet: 'workFlexipost'},
      { path: 'iclub', component: IclubComponent, outlet: 'workIclub'},
      { path: 'payyex', component: PayyexComponent, outlet: 'workPayyex'},
      { path: 'soniro', component: SoniroComponent, outlet: 'workSoniro'},
      { path: 'sprint', component: SprintComponent, outlet: 'workSprint'},
      { path: 'uplauch', component: UplauchComponent, outlet: 'workUplauch'},
    ],
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    // enableTracing: true // <-- debugging purposes only
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
