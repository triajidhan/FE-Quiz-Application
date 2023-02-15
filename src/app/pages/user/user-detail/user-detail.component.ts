import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core"
import { MatPaginator } from "@angular/material/paginator"
import { MatSort } from "@angular/material/sort"
import { MatTableDataSource } from "@angular/material/table"
import { Router } from "@angular/router"
import { Subscription } from "rxjs"
import { User } from "src/app/interface/user"
import { UserService } from "src/app/service/user.service"
import { PATH } from "src/app/utils/routing-path"

@Component({
    selector: 'user-detail',
    templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit, OnDestroy {
    displayedColumns: string[] = ['no', 'fullName', 'userName', 'email']
    dataSource!: MatTableDataSource<User>
    data: any[] = []

    @ViewChild(MatPaginator) paginator!: MatPaginator
    @ViewChild(MatSort) sort!: MatSort

    private getUserListSubscription?: Subscription

    constructor(
        private userService: UserService,
        private router: Router) { }

    ngOnInit(): void {
        this.getUserListSubscription = this.userService.getAll().subscribe(result => {
            this.data = result.data
            this.dataSource = new MatTableDataSource(result.data)
        })
    }

    ngAfterViewInit() {
        // this.dataSource.paginator = this.paginator
        // this.dataSource.sort = this.sort
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value
        this.dataSource.filter = filterValue.trim().toLowerCase()

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage()
        }
    }

    ngOnDestroy(): void {
        this.getUserListSubscription?.unsubscribe()
    }
}
