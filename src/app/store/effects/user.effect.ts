import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { map, switchMap } from 'rxjs/operators'
import { UserService } from 'src/app/service/user.service';
import { loadUsers, loadUsersSuccess } from '../actions/user.action';

@Injectable()
export class UserEffects {

    constructor(
        private actions$: Actions,
        private userService: UserService
    ) { }

    loadUsers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadUsers),
            switchMap(() =>
                this.userService.getAll().pipe(
                    map(data => loadUsersSuccess({ allUsers: data }))
                )
            )
        )
    )

}