import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutComponent } from './layout.component';
import { AboutModule } from '../about/about.module';
import { ContactModule } from '../contact/contact.module';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { ServicesModule } from '../services/services.module';
import { ReviewsModule } from '../reviews/reviews.module';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AboutModule,
    ContactModule,
    HeaderModule,
    FooterModule,
    ServicesModule,
    ReviewsModule,
  ],
  providers: [],
})
export class LayoutModule { }
