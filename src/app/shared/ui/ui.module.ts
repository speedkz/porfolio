import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FeatherIconDirective } from './feather-icon.directive';

@NgModule({
    declarations: [FeatherIconDirective],
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [FeatherIconDirective]
})
export class UIModule { }
