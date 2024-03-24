import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header.component';
import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
    declarations: [
        HeaderComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        NavbarModule
    ],
    exports: [
        HeaderComponent
    ],
    providers: [],
    bootstrap: [HeaderComponent]
})
export class HeaderModule { }
