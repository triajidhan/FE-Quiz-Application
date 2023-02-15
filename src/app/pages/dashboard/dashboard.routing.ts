import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { DashboardAdminComponent } from "./admin/dashboard-admin.componenet"

const routes: Routes = [
    {
        path: 'admin',
        component: DashboardAdminComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class DashboardRouting { }