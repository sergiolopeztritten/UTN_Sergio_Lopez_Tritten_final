import { Route, Routes } from 'react-router'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import ContactScreen from './Screens/ContactScreen/ContactScreen'
import ErrorNotFoundScreen from './Screens/ErrorNotFoundScreen/ErrorNotFoundScreen'
import ContactsContextProvider from './Context/ContactsContext'

function App() {
    return (
        <ContactsContextProvider>
            <Routes>
                <Route path='/' element={<HomeScreen />} />
                <Route path='/contact/:contact_id' element={<ContactScreen />} />
                <Route path='*' element={<ErrorNotFoundScreen />} />
            </Routes>
        </ContactsContextProvider>
    )
}

export default App
