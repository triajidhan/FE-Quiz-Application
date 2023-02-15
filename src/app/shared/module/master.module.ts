import { NgModule } from "@angular/core"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { MatBadgeModule } from '@angular/material/badge'
import { MatButtonModule } from '@angular/material/button'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { ValidationShareModule } from "../components/validation/validation.module"
import { TitleShareModule } from "../components/title/title.module"
import { CommonModule } from "@angular/common"
import { ButtonShareModule } from "../components/button/button.module"
import { MatRadioModule } from '@angular/material/radio'
import { MatTooltipModule } from '@angular/material/tooltip'


@NgModule({
    exports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        MatGridListModule,
        MatBadgeModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatIconModule,
        MatRadioModule,
        MatTableModule,
        MatTooltipModule,
        MatPaginatorModule,
        ValidationShareModule,
        TitleShareModule,
        ButtonShareModule
    ]
})

export class MasterModule { }