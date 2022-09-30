
export type TAdress = {
    street: string;
    city: string;
    zipcode: string;
    suite: string;
};

export type TCard = {
    id: number;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    note: string;
    company: string;
    adress: TAdress;
};

export type TItemList = {
    firstName: string;
    lastName: string;
};

export type TList = TItemList[];