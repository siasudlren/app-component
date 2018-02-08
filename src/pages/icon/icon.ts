import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the IconPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-icon',
  templateUrl: 'icon.html',
})
export class IconPage {
  testIcon: string = 'heart';
  testColor: string = '#ff0f26';
  items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for (let i = 0; i < 30; i++) {
      this.items.push(this.items.length);
    }
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.items.push(this.items.length);
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }
}
