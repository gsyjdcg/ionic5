import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private iab: InAppBrowser
  ) {

    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  test(): void {
    alert('android: ' + this.platform.is('android'));
    alert('ios: ' + this.platform.is('ios'));
    alert('cordova: ' + this.platform.is('cordova'));
    alert('capacitor: ' + this.platform.is('capacitor'));
    alert('desktop: ' + this.platform.is('desktop'));
    alert('electron: ' + this.platform.is('electron'));
    alert('hybrid: ' + this.platform.is('hybrid'));
    alert('ipad: ' + this.platform.is('ipad'));
    alert('iphone: ' + this.platform.is('iphone'));
    alert('mobile: ' + this.platform.is('mobile'));
    alert('mobileweb: ' + this.platform.is('mobileweb'));
    alert('phablet: ' + this.platform.is('phablet'));
    alert('pwa: ' + this.platform.is('pwa'));
    alert('tablet: ' + this.platform.is('tablet'));
  }
}
