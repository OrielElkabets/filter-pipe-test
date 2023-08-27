export class TableValue {
    constructor(
        public name: string,
        public address: Address,
    ) { }
}

export class Address {
    constructor(
        public city: string,
        public street: string,
    ) { }
}