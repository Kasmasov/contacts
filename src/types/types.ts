
type TAddress = {
    street: string;
    city: string;
    zipcode: string;
    suite: string;
};

type TCompany = {
    bs: string;
    catchPhrase: string;
    name: string
}

export type TCard = {
    id: number;
    name: string;
    phone: string;
    email: string;
    note?: string;
    company: TCompany;
    address: TAddress;
};

export type TContacts = TCard[];

export type TItemList = keyof TCard;

export type TList = TItemList[];