import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
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
    window.open('http://apicp.herbecon.es:3000/api/registros/informeJornadasUsuariosPDF?&access_token=e3lsK7ReHhMDmWAVbHNYAUCTEStNU03w78gfhjBDAde1CZd0Xnifjs6ta3yv6JEz&entidId=herbecon&intervalo=mes&languageClient=es&incluirRegistros=false&incluirLocalizacion=false');
  }
}
