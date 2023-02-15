import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { RouterModule } from "@angular/router"
import { HeaderComponent } from "./header.component"
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from "@angular/material/icon"
import { MatButtonModule } from "@angular/material/button"
import { MatMenuModule } from '@angular/material/menu'

@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule
    ],
    exports: [
        HeaderComponent
    ]
})
export class HeaderModule { }