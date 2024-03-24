import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { ServicesModule } from './services/services.module';
import { LayoutModule } from './layout/layout.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AboutModule, 
    ContactModule,
    HeaderModule,
    FooterModule,
    ServicesModule,
    AppRoutingModule,
    LayoutModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
