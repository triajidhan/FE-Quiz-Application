import { NgModule } from "@angular/core"
import { RouterModule } from "@angular/router"
import { FooterComponent } from "../footer/footer.component"
import { HeaderModule } from "../header/header.module"
import { ContentComponent } from "./content.component"

@NgModule({
    declarations: [
        ContentComponent,
        FooterComponent
    ],
    imports: [
        RouterModule,
        HeaderModule
    ],
    exports: [
        ContentComponent,
        FooterComponent
    ]
})
export class ContentModule { }