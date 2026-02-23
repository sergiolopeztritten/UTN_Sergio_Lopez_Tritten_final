import { createContext, useState } from "react"
import { getContacts } from "../services/contactsService"
import replies from "../data/contactReplies"

export const ContactsContext = createContext({
    contacts: [],
    addMessage: () => {},
    addContact: () => {}
})

const ContactsContextProvider = ({ children }) => {
    const [contacts, setContacts] = useState(getContacts())

    const getTime = () => new Date().toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' })

    // Agrega un mensaje a la conversación de un contacto
    const addMessage = (contactId, text) => {
        const time = getTime()
        setContacts(prev =>
            prev.map(contact => {
                if (Number(contact.id) !== Number(contactId)) return contact
                const newMessage = {
                    id: Date.now(),
                    text,
                    send_by_me: true,
                    time,
                    is_read: false
                }
                return { ...contact, messages: [...contact.messages, newMessage] }
            })
        )

        // Respuesta automática del contacto
        const contactReplies = replies[Number(contactId)]
        if (contactReplies) {
            const randomReply = contactReplies[Math.floor(Math.random() * contactReplies.length)]
            setTimeout(() => {
                setContacts(prev =>
                    prev.map(contact => {
                        if (Number(contact.id) !== Number(contactId)) return contact
                        const replyMessage = {
                            id: Date.now() + 1,
                            text: randomReply,
                            send_by_me: false,
                            time: getTime(),
                            is_read: false
                        }
                        return { ...contact, messages: [...contact.messages, replyMessage] }
                    })
                )
            }, 1500)
        }
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
