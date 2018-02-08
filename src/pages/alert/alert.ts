import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';

/**
 * Generated class for the AlertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html',
})
export class AlertPage {

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertPage');
  }

  basicAlert(): void {
    this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Invalid Email or passWord',
      buttons: ['OK']
    }).present();
  }

  confirmAlert(): void {
    this.alertCtrl.create({
      title: 'Confirm Alert',
      subTitle: 'Confirm alert subTitle',
      buttons: [
        {
          text: 'Cancel', handler: () => {
            console.error('cancelled...')
          }
        }, {
          text: 'OK', handler: () => {
            console.error('ok...');
          }
        }]
    }).present();
  }
}
