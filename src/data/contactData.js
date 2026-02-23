const contacts = [
    {
        id: 2,
        name: 'Pepe',
        last_time_connection: 'Hace 3 horas',
        profile_picture: '/pepe.jpg',
        messages: [
            { id: 1, text: '¡Holaaa! ¿Qué tal el día?', send_by_me: true, time: '09:00', is_read: true },
            { id: 2, text: 'Todo bien, trabajando como siempre...', send_by_me: false, time: '09:15', is_read: false }
        ]
    },
    {
        id: 3,
        name: 'Darth Vader',
        last_time_connection: 'En línea',
        profile_picture: '/vader.jpg',
        messages: [
            { id: 1, text: 'Luke, yo soy tu padre.', send_by_me: false, time: '08:00', is_read: true },
            { id: 2, text: '¡Eso es imposible!', send_by_me: true, time: '08:01', is_read: true }
        ]
    },
    {
        id: 4,
        name: 'Yoda (Star Wars)',
        last_time_connection: 'Hace 900 años',
        profile_picture: '/yoda.jpg', 
        messages: [
            { id: 1, text: 'Hola Yoda, ¿cómo va todo?', send_by_me: true, time: '10:00', is_read: true },
            { id: 2, text: 'Mucho por aprender, aún tienes.', send_by_me: false, time: '10:03', is_read: true },
            { id: 3, text: 'Jaja, siempre con la sabiduría.', send_by_me: true, time: '10:05', is_read: false }
        ]
    },
    {
        id: 5,
        name: 'Rick Sanchez',
        last_time_connection: 'Hace 5 minutos',
        profile_picture: '/rick.jpg',
        messages: [
            { id: 1, text: 'Wubba lubba dub dub!', send_by_me: false, time: '09:00', is_read: true },
            { id: 2, text: '¿Qué significa eso?', send_by_me: true, time: '09:01', is_read: true },
            { id: 3, text: 'Significa que estoy en dolor intenso. Morty, agarra el portal gun.', send_by_me: false, time: '09:02', is_read: false }
        ]
    }
]

export default contacts
