import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"
import { ApiService } from "src/app/service/api.service"
import { PATH } from "src/app/utils/routing-path"

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    myRolePath!: string
    myRoleCode!: string | null
    navMenus!: any[]
    profiles!: any[]
    superAdminAccess: boolean = false

    constructor(
        private apiService: ApiService,
        private router: Router) { }

    ngOnInit() {
        this.myRoleCode = this.apiService.getRoleCode()
        this.myRolePath = this.apiService.getRolePath(this.myRoleCode ?? "", false)

        this.navMenus = [
            {
                label: 'Home',
                icon: 'home',
                routerLink: PATH.LANDING_PAGE
            },
            {
                label: 'User Candidate',
                icon: 'group',
                routerLink: PATH.LIST_USER
            },
            {
                label: 'Question',
                icon: 'article',
                routerLink: PATH.LIST_QUESTION
            }
        ]


        this.profiles = [
            {
                label: 'Profile',
                icon: 'person_filled'
            },
            {
                label: 'Log Out',
                icon: 'power_settings_new'
            }
        ]


    }

    toProfile(label: string) {
        if (label === 'Profile') {
            this.router.navigate(['profiles', this.myRolePath])
        } else {
            this.logOut()
        }
    }

    logOut() {
        this.apiService.logOut()
    }

}