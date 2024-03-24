import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ServicesComponent } from './services.component';
import { Table1Module } from "../tables/table1/table1.module";

@NgModule({
    declarations: [
        ServicesComponent,
    ],
    exports: [
        ServicesComponent
    ],
    providers: [],
    bootstrap: [ServicesComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        Table1Module
    ]
})
export class ServicesModule { }
