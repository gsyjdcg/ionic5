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
    const urlPrueba = 'https://www.pickar.es/api/registros/informeJornadasUsuariosPDF?ids=%5B%7B%22id%22%3A%225ca4ae27eaba930733d2b74a%22%2C%22tipo%22%3A%22usuarios%22%7D%5D&access_token=EyXEADDa4aUYj3J5DE2L39OQnJqI4NLyuEVlpL5sTh5v8CPNhRHt8E8JVZ2pR06N&entidId=herbecon&intervalo=semana&languageClient=es&incluirRegistros=false&incluirLocalizacion=false';

    this.iab.create(urlPrueba, `_system`);
  }
}
