import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WalletConnectorComponent } from './wallet-connector/wallet-connector.component';
import { PittieFooterComponent } from './pittie-footer/pittie-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    WalletConnectorComponent,
    PittieFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
