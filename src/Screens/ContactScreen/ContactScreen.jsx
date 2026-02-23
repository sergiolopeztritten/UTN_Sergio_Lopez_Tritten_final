import { useContext, useState, useRef, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import { ContactsContext } from '../../Context/ContactsContext'
import ContactSidebar from '../../Components/ContactSideBar/ContactSideBar'

export default function ContactScreen() {
    const { contacts, addMessage } = useContext(ContactsContext)
    const { contact_id } = useParams()
    const navigate = useNavigate()
    const [messageText, setMessageText] = useState('')
    const messagesEndRef = useRef(null)

    const contact = contacts.find(c => Number(c.id) === Number(contact_id))

    // Auto-scroll al último mensaje
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [contact?.messages])

    const handleSendMessage = (e) => {
        e.preventDefault()
        const trimmed = messageText.trim()
        if (!trimmed) return
        addMessage(contact_id, trimmed)
        setMessageText('')
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSendMessage(e)
        }
    }

    return (
        <div className="app-container">
            <ContactSidebar />

            <main className="main-content chat-open">
                {!contact ? (
                    <div className="welcome-screen">
                        <h2>Contacto no encontrado</h2>
                        <p>El contacto que buscás no existe.</p>
                        <button onClick={() => navigate('/')} style={{ marginTop: '16px', padding: '10px 20px', background: 'var(--text-accent)', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
                            Volver al inicio
                        </button>
                    </div>
                ) : (
                    <div className="chat-container">
                        {/* Header del chat */}
                        <header className="chat-header">
                            <button
                                className="back-button"
                                onClick={() => navigate('/')}
                                aria-label="Volver a contactos"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                                </svg>
                            </button>
                            <img
                                className="chat-header-avatar"
                                src={contact.profile_picture}
                                alt={contact.name}
                                onError={(e) => { e.target.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${contact.name}` }}
                            />
                            <div className="chat-header-info">
                                <h3>{contact.name}</h3>
                                <span>{contact.last_time_connection}</span>
                            </div>
                        </header>

                        {/* Mensajes */}
                        <section className="messages-area" aria-label="Mensajes">
                            {contact.messages.length === 0 && (
                                <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginTop: '24px' }}>
                                    No hay mensajes aún. ¡Enviá el primero!
                                </p>
                            )}
                            {contact.messages.map(message => (
                                <div
                                    key={message.id}
                                    className={`message-wrapper ${message.send_by_me ? 'sent' : 'received'}`}
                                >
                                    <div className="message-bubble">
                                        <p className="message-text">{message.text}</p>
                                        <p className="message-time">{message.time}</p>
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </section>

                        {/* Formulario para enviar mensaje */}
                        <form className="message-input-area" onSubmit={handleSendMessage}>
                            <textarea
                                className="message-textarea"
                                placeholder="Escribe un mensaje..."
                                value={messageText}
                                onChange={e => setMessageText(e.target.value)}
                                onKeyDown={handleKeyDown}
                                rows={1}
                                aria-label="Escribir mensaje"
                            />
                            <button
                                type="submit"
                                className="send-button"
                                aria-label="Enviar mensaje"
                                disabled={!messageText.trim()}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.717 7.184l3.178 4.995-4.427-11.066 1.249 6.07Zm3.32 4.462 5.536-13.84-6.07 1.249 4.534 12.591Z"/>
                                </svg>
                            </button>
                        </form>
                    </div>
                )}
            </main>
        </div>
    )
}
