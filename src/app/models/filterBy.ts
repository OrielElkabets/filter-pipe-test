export class FilterBy{
    public get key() : string[] {
        return this._key.split(".")
    }

    constructor(private _key:string, public value:any){}
}