export type TAdress = {
    street: string;
    city: string;
    zipcode: string;
    suite: string;
}

export type TCard = {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    note: string;
    adress: TAdress;
}

export type TList = {
    firstName: string;
    lastName: string;
}