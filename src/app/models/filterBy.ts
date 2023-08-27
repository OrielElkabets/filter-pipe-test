export class FilterBy{
    public get keys() : string[] {
        return this.key.split(".")
    }

    constructor(public key:string, public value:any){}
}