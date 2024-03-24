import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './footer.component';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon'
@NgModule({
    declarations: [
        FooterComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        CommonModule,
        MatIconModule
    ],
    exports: [
        FooterComponent
    ],
    providers: [],
    bootstrap: [FooterComponent]
})
export class FooterModule { }
