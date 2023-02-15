import { NgModule } from "@angular/core"
import { TestingComponent } from "./testing.component"
import { TestingRouting } from "./testing.routing"
import { MasterModule } from "src/app/shared/module/master.module"
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { userReducer } from "src/app/store/reducers/user.reducer"
import { UserEffects } from "src/app/store/effects/user.effect"


@NgModule({
    declarations: [
        TestingComponent
    ],
    imports: [
        TestingRouting,
        MasterModule,
        StoreModule.forFeature('users', userReducer),
        EffectsModule.forFeature([UserEffects])
    ],
    exports: [
        TestingComponent
    ]
})

export class TestingModule { }