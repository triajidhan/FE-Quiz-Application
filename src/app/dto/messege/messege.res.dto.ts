export class MessegeResDto {

    private _messege!: string

    public set messege(_messege: string) {
        this._messege = _messege;
    }

    public get messege(): string {
        return this._messege
    }
}