import { HttpClientModule } from "@angular/common/http"
import { NgModule } from "@angular/core"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { MatBadgeModule } from '@angular/material/badge'
import { MatButtonModule } from '@angular/material/button'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { ValidationShareModule } from "../components/validation/validation.module"


@NgModule({
    exports: [
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        MatGridListModule,
        MatBadgeModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatIconModule,
        ValidationShareModule
    ]
})

export class MainModule { }