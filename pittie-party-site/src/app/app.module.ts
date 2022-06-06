import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WalletConnectorComponent } from './wallet-connector/wallet-connector.component';
import { PittieFooterComponent } from './pittie-footer/pittie-footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { WalletConnectButtonComponent } from './wallet-connect-button/wallet-connect-button.component';

@NgModule({
  declarations: [
    AppComponent,
    WalletConnectorComponent,
    PittieFooterComponent,
    NavBarComponent,
    WalletConnectButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
