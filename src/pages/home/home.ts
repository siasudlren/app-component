import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ButtonPage} from '../button/button';
import {ListPage} from "../list/list";
import {ShoplistPage} from "../shoplist/shoplist";
import {CardPage} from "../card/card";
import {FabPage} from "../fab/fab";
import {GesturePage} from "../gesture/gesture";
import {GridPage} from "../grid/grid";
import {FormPage} from "../form/form";
import {ToastPage} from "../toast/toast";
import {AlertPage} from "../alert/alert";
import {IconPage} from "../icon/icon";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  buttonPage;
  listPage;
  shoplistPage;
  cardPage;
  fabPage;
  gesturePage;
  gridPage;
  formPage;
  toastPage;
  alertPage;
  iconPage;

  constructor(public navCtrl: NavController) {
    this.buttonPage = ButtonPage;
    this.listPage = ListPage;
    this.shoplistPage = ShoplistPage;
    this.cardPage = CardPage;
    this.fabPage = FabPage;
    this.gesturePage = GesturePage;
    this.gridPage = GridPage;
    this.formPage = FormPage;
    this.toastPage = ToastPage;
    this.alertPage=AlertPage;
    this.iconPage=IconPage;
  }

}
