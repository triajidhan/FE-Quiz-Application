import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"
import { ContentComponent } from "./shared/components/content/content.component"
import { ContentModule } from "./shared/components/content/content.module"
import { NotFoundComponent } from "./shared/components/not-found/not-found.component"

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: "login",
        loadChildren: () => import('./pages/login/login.module').then(u => u.LoginModule)
    },
    {
        path: "registration",
        loadChildren: () => import('./pages/registration/registration.module').then(u => u.RegistrationModule)
    },
    {
        path: "home",
        component: ContentComponent,
        loadChildren: () => import('./pages/home/home.module').then(u => u.HomeModule)
    },
    {
        path: "dashboard",
        component: ContentComponent,
        loadChildren: () => import('./pages/dashboard/dasgboard.module').then(u => u.DashboardModule)
    },
    {
        path: "users",
        component: ContentComponent,
        loadChildren: () => import('./pages/user/user.module').then(u => u.UserModule)
    },
    {
        path: "questions",
        component: ContentComponent,
        loadChildren: () => import('./pages/question/question.module').then(u => u.QuestionModule)
    },
    {
        path: "testing",
        component: ContentComponent,
        loadChildren: () => import('./pages/testing/testing.module').then(u => u.TestingModule)
    },
    {
        path: '**',
        component: NotFoundComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        ContentModule
    ],
    exports: [
        RouterModule
    ]
})

export class AppRouting { }