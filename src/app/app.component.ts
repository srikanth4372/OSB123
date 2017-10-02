import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { RenewalPage } from '../pages/renewal/renewal';
import { RequestHistoryPage } from '../pages/request-history/request-history';
import { MyProfilePage } from '../pages/my-profile/my-profile';
import { MyAccountPage } from '../pages/my-account/my-account';
import { ReferFriendPage  } from '../pages/refer-friend/refer-friend';
import { AddressPage } from '../pages/address/address';
import { OffersPage } from '../pages/offers/offers';
import { TroubleshootPage } from '../pages/troubleshoot/troubleshoot';
import { ShortcutsPage } from '../pages/shortcuts/shortcuts';
import { VoluntarySuspensionPage } from '../pages/voluntary-suspension/voluntary-suspension';
import { LoginPage } from '../pages/login/login';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any, class: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, class:'home' },
      { title: 'Renewal', component: RenewalPage, class:'card' },
	  { title: 'Request History', component: RequestHistoryPage, class:'create' },
	  { title: 'My Profile', component: MyProfilePage, class:'contact' },
	  { title: 'My Account', component: MyAccountPage, class:'paper' },
	  { title: 'Refer Friend', component: ReferFriendPage, class:'person-add' },
	  { title: 'Address', component: AddressPage, class:'pin' },
	  { title: 'Offers', component: OffersPage, class:'pricetags' },
	  { title: 'Troubleshoot', component: TroubleshootPage, class:'logo-steam' },
	  { title: 'Shortcuts', component: ShortcutsPage , class:'jet'},
	  { title: 'Voluntary Suspension', component: VoluntarySuspensionPage, class:'cut' },
	  { title: 'Log out', component: LoginPage, class:'log-out' },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
	  
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
