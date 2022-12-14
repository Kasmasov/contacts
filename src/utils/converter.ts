import { TCardForFrontEnd, TCardFromBackend } from './../types/types';
import { v4 } from 'uuid'
export const addidForFrontendToContacts = (contacts: TCardFromBackend): TCardForFrontEnd => {

    const contactsForFrontEnd = {
        id: contacts.id,
        idForFrontend: v4(),
        name: contacts.name,
        phone: contacts.phone,
        email: contacts.email,
        note: contacts.note,
        company: {
            bs: contacts.company.bs,
            name: contacts.company.name,
            catchPhrase: contacts.company.catchPhrase
        },
        address: {
            street: contacts.address.street,
            city: contacts.address.city,
            suite: contacts.address.suite,
            zipcode: contacts.address.zipcode
        }
    }
    return contactsForFrontEnd
}