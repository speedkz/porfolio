import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FeatherIconDirective } from './feather-icon.directive';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
    declarations: [FeatherIconDirective],
    imports: [
        CommonModule,
        FormsModule,
        MatSliderModule
    ],
    exports: [
        FeatherIconDirective,
        MatSliderModule
    ]
})
export class UIModule { }
