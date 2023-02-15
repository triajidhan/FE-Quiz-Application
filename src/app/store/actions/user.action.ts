import { createAction, props } from '@ngrx/store'
import { UsersDto } from 'src/app/dto/user/users.dto'

export const loadUsers = createAction(
    '[User] Load Users'
)

export const loadUsersSuccess = createAction(
    '[User] Load Users Success',
    props<{ allUsers: UsersDto }>()
)