
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

export type TCardFromBackend = {
    id: string;
    name: string;
    phone: string;
    email: string;
    note?: string;
    company: TCompany;
    address: TAddress;
};

export type TCardForFrontEnd = {
    id: string;
    idForFrontend: string;
    name: string;
    phone: string;
    email: string;
    note?: string;
    company: TCompany;
    address: TAddress;
}

export type TContacts = TCardForFrontEnd[];

export type TItemList = keyof TCardFromBackend;

export type TList = TItemList[];

export type TLoginAndRegistrationProps = {
    handleClickForRegistrationAndLogin: (email: string, password: string) => void;
}; 