import { NgModule } from "@angular/core"
import { DashboardAdminComponent } from "./admin/dashboard-admin.componenet"
import { DashboardRouting } from "./dashboard.routing"

@NgModule({
    declarations: [
        DashboardAdminComponent
    ],
    imports: [
        DashboardRouting
    ],
    exports: [
        DashboardAdminComponent
    ]
})

export class DashboardModule { }