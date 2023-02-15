import { NgModule } from "@angular/core"
import { MasterModule } from "src/app/shared/module/master.module"
import { UserDetailComponent } from "./user-detail/user-detail.component"
import { UserListComponent } from "./user-list/user-list.component"
import { UserRouting } from "./user.routing"

@NgModule({
    declarations: [
        UserListComponent,
        UserDetailComponent
    ],
    imports: [
        UserRouting,
        MasterModule
    ],
    exports: [
        UserListComponent,
        UserDetailComponent
    ]
})
export class UserModule { }
