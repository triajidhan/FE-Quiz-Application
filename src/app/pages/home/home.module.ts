import { NgModule } from "@angular/core"
import { MasterModule } from "src/app/shared/module/master.module"
import { HomeListComponent } from "./home-list/home-list.component"
import { HomeRouting } from "./home.routing"

@NgModule({
    declarations: [
        HomeListComponent
    ],
    imports: [
        HomeRouting,
        MasterModule
    ],
    exports: [
        HomeListComponent
    ]
})
export class HomeModule { }
