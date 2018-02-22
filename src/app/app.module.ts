import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {Home} from './home/home';
import {Login} from './login/login';
import {Portfolio} from './portfolio/portfolio';
import {Setting} from './setting/setting';
import {Watchlist} from './watchlist/watchlist';
import {Error403} from './error403/error403';
import {Error404} from './error404/error404';
import {Error405} from './error405/error405';
import {Error500} from './error500/error500';
import {Coindetails} from './coindetails/coindetails';
import {Admin} from './admin/admin';
import {Addnews} from './addnews/addnews';
import {Addcoin} from './addcoin/addcoin';


@NgModule({
  declarations: [
    AppComponent,
    Home,
    Login,
    Portfolio,
    Setting,
    Watchlist,
    Error403,
    Error404,
    Error405,
    Error500,
    Coindetails,
    Admin,
    Addnews,
    Addcoin
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [Login]
})
export class AppModule { }
