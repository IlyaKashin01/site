import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { Table1Component } from './table1.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
@NgModule({
    declarations: [
        Table1Component,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        MatTableModule,
        MatPaginatorModule
    ],
    exports: [
        Table1Component
    ],
    providers: [],
    bootstrap: [Table1Component]
})
export class Table1Module { }
