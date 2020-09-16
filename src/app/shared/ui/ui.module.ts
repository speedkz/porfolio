import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FeatherIconDirective } from './feather-icon.directive';
import { MatCardModule } from '@angular/material/card';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [FeatherIconDirective],
    imports: [
        CommonModule,
        FormsModule,
        MatCardModule,
        NgbAlertModule,
    ],
    exports: [
        FeatherIconDirective,
        MatCardModule,
        NgbAlertModule,
    ]
})
export class UIModule { }
