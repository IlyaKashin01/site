import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReviewsComponent } from './reviews.component';

@NgModule({
    declarations: [
        ReviewsComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        CommonModule
    ],
    exports: [
        ReviewsComponent
    ],
    providers: [],
    bootstrap: [ReviewsComponent]
})
export class ReviewsModule { }
