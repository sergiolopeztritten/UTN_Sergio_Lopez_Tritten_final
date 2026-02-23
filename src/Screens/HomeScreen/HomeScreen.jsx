import ContactSidebar from '../../Components/ContactSideBar/ContactSideBar'

export default function HomeScreen() {
    return (
        <div className="app-container">
            <ContactSidebar />
            <main className="main-content">
                <div className="welcome-screen">
                    <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13zM1.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5h-13zM8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                    <h2>WhatsApp Clone</h2>
                    <p>Seleccioná un contacto para empezar a chatear o buscá uno con la barra de búsqueda.</p>
                </div>
            </main>
        </div>
    )
}
