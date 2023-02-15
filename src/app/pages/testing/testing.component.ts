import { Component, OnInit } from "@angular/core"
import { Store, select } from "@ngrx/store"
import { map, Observable } from "rxjs"
import { UsersDto } from "src/app/dto/user/users.dto"
import { User } from "src/app/interface/user"
import { loadUsers } from "src/app/store/actions/user.action"
import { selectUsers } from "src/app/store/selectors/user.selector"

@Component({
    selector: 'app-testing',
    templateUrl: './testing.component.html'
})
export class TestingComponent implements OnInit {

    users$: Observable<User[]> = new Observable()

    constructor(private store: Store<{}>) {
        this.users$ = this.store.pipe(
            select(selectUsers),
            map((usersDto: UsersDto) => usersDto.data)
        )
    }

    ngOnInit(): void {
        this.store.dispatch(loadUsers())
    }
}
