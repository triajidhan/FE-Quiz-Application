import { User } from "src/app/interface/user"

export class UsersDto {
    private _data!: User[]

    public set data(_data: User[]) {
        this._data = _data;
    }

    public get data(): User[] {
        return this._data
    }
}