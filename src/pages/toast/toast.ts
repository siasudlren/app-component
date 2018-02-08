import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';

/**
 * Generated class for the ToastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-toast',
  templateUrl: 'toast.html',
})
export class ToastPage {

  constructor(public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ToastPage');
  }

  showToast(): void {
    let toast=this.toastCtrl.create({
      message: 'a basic toast...',
      duration: 1000
    });
    //呈现
    toast.present();
  }
  showToastPosition(position:string):void{
    let toast=this.toastCtrl.create({
      message: 'a basic toastPosition...',
      duration: 2000,
      position:position
    });
    //呈现
    toast.present();
  }
  showToastClose():void{
    let toast=this.toastCtrl.create({
      message: 'a basic toastClose...',
      showCloseButton:true,
      closeButtonText:'OK'
    });
    //呈现
    toast.present();
  }
}
