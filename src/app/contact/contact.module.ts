import { NgModule } from '@angular/core';
//import { AppRoutingModule } from './app-routing.module';
//import { CsvService } from './csv.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ContactComponent } from './contact.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        ContactComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        CommonModule
    ],
    exports: [
        ContactComponent
    ],
    providers: [],
    bootstrap: [ContactComponent]
})
export class ContactModule { }
