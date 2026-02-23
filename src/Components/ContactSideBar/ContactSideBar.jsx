import { useContext, useState } from 'react'
import { Link, useSearchParams, useParams, useNavigate } from 'react-router'
import { ContactsContext } from '../../Context/ContactsContext'

export default function ContactSidebar() {
    const { contacts, addContact } = useContext(ContactsContext)
    const { contact_id } = useParams()

    // Search params para filtrar contactos (cumple requisito de react-router search params)
    const [searchParams, setSearchParams] = useSearchParams()
    const searchQuery = searchParams.get('q') || ''

    // Estado modal agregar contacto
    const [showModal, setShowModal] = useState(false)
    const [formData, setFormData] = useState({ name: '', profilePicture: '' })
    const [formError, setFormError] = useState('')
    const navigate = useNavigate()

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const handleSearch = (e) => {
        const value = e.target.value
        if (value) {
            setSearchParams({ q: value })
        } else {
            setSearchParams({})
        }
    }

    const handleAddContact = (e) => {
        e.preventDefault()
        if (!formData.name.trim()) {
            setFormError('El nombre es obligatorio')
            return
        }
        const newId = addContact(formData.name.trim(), formData.profilePicture.trim())
        setFormData({ name: '', profilePicture: '' })
        setFormError('')
        setShowModal(false)
        navigate(`/contact/${newId}`)
    }

    return (
        <aside className="sidebar">
            {/* Header */}
            <header className="sidebar-header">
                <h2>WhatsApp Clone</h2>
            </header>

            {/* Búsqueda — usa search params de react-router-dom */}
            <div className="sidebar-search">
                <div className="search-input-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.099zm-5.242 1.656a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z"/>
                    </svg>
                    <input
                        type="text"
                        placeholder="Buscar contacto..."
                        value={searchQuery}
                        onChange={handleSearch}
                        aria-label="Buscar contacto"
                    />
                </div>
            </div>

            {/* Botón agregar contacto */}
            <button className="add-contact-btn" onClick={() => setShowModal(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
                Nuevo contacto
            </button>

            {/* Lista de contactos */}
            <nav className="contacts-list">
                {filteredContacts.length === 0 ? (
                    <p className="no-contacts">No se encontraron contactos</p>
                ) : (
                    filteredContacts.map(contact => (
                        <Link
                            to={`/contact/${contact.id}`}
                            key={contact.id}
                            className={`contact-item ${Number(contact_id) === Number(contact.id) ? 'active' : ''}`}
                        >
                            <img
                                className="contact-avatar"
                                src={contact.profile_picture}
                                alt={contact.name}
                                onError={(e) => { e.target.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${contact.name}` }}
                            />
                            <div className="contact-info">
                                <p className="contact-name">{contact.name}</p>
                                <p className="contact-last-connection">{contact.last_time_connection}</p>
                            </div>
                        </Link>
                    ))
                )}
            </nav>

            {/* Modal: formulario para agregar contacto */}
            {showModal && (
                <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="Agregar contacto">
                    <div className="modal">
                        <h3>Agregar nuevo contacto</h3>
                        <form onSubmit={handleAddContact}>
                            <div className="form-group">
                                <label htmlFor="contact-name">Nombre *</label>
                                <input
                                    id="contact-name"
                                    type="text"
                                    placeholder="Ej: Juan Pérez"
                                    value={formData.name}
                                    onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                />
                                {formError && <span className="form-error">{formError}</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="contact-pic">URL de foto (opcional)</label>
                                <input
                                    id="contact-pic"
                                    type="text"
                                    placeholder="https://..."
                                    value={formData.profilePicture}
                                    onChange={e => setFormData(prev => ({ ...prev, profilePicture: e.target.value }))}
                                />
                            </div>
                            <div className="modal-actions">
                                <button type="button" className="btn-cancel" onClick={() => { setShowModal(false); setFormError('') }}>
                                    Cancelar
                                </button>
                                <button type="submit" className="btn-submit">Agregar</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </aside>
    )
}
