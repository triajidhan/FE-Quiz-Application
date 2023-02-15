import { createFeatureSelector } from '@ngrx/store'
import { UsersDto } from 'src/app/dto/user/users.dto'

export const selectUsers = createFeatureSelector<UsersDto>('users');
