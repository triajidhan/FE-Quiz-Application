import { createReducer, on } from '@ngrx/store'
import { UsersDto } from 'src/app/dto/user/users.dto'
import { User } from '../../interface/user'
import { loadUsersSuccess } from '../actions/user.action'

export const initialState: UsersDto = new UsersDto()

export const userReducer = createReducer(
    initialState,
    on(loadUsersSuccess, (state, { allUsers }) => {
        return allUsers
    })
)