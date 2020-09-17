import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeatherIconDirective } from './feather-icon.directive';
import { MatCardModule } from '@angular/material/card';
import { NgbAlertModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { PageTitleComponent } from './page-title/page-title.component';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'

@NgModule({
    declarations: [FeatherIconDirective, PageTitleComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatTableModule,
        MatPaginatorModule,
        MatDialogModule,
        MatButtonModule,
        MatFormFieldModule,
        NgbAlertModule,
        FlexLayoutModule,
        NgbPaginationModule
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        FeatherIconDirective,
        MatCardModule,
        MatTableModule,
        MatPaginatorModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        NgbAlertModule,
        NgbPaginationModule,
        FlexLayoutModule,
        PageTitleComponent,
    ]
})
export class UIModule { }
