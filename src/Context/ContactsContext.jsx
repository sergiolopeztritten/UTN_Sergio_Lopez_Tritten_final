import { createContext, useState } from "react"
import { getContacts } from "../services/contactsService"

export const ContactsContext = createContext({
    contacts: [],
    addMessage: () => {},
    addContact: () => {}
})

const ContactsContextProvider = ({ children }) => {
    const [contacts, setContacts] = useState(getContacts())

    // Agrega un mensaje a la conversación de un contacto
    const addMessage = (contactId, text) => {
        const time = new Date().toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' })
        setContacts(prev =>
            prev.map(contact => {
                if (Number(contact.id) !== Number(contactId)) return contact
                const newMessage = {
                    id: contact.messages.length + 1,
                    text,
                    send_by_me: true,
                    time,
                    is_read: false
                }
                return { ...contact, messages: [...contact.messages, newMessage] }
            })
        )
    }

    // Agrega un nuevo contacto
    const addContact = (name, profilePicture) => {
        const newContact = {
            id: Date.now(),
            name,
            last_time_connection: 'Ahora',
            profile_picture: profilePicture || `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(name)}`,
            messages: []
        }
        setContacts(prev => [...prev, newContact])
        return newContact.id
    }

    return (
        <ContactsContext.Provider value={{ contacts, addMessage, addContact }}>
            {children}
        </ContactsContext.Provider>
    )
}

export default ContactsContextProvider
