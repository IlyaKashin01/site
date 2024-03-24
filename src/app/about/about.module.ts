import { NgModule } from '@angular/core';
//import { AppRoutingModule } from './app-routing.module';
//import { CsvService } from './csv.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './about.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        AboutComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        CommonModule
    ],
    exports: [
        AboutComponent
    ],
    providers: [],
    bootstrap: [AboutComponent]
})
export class AboutModule { }
