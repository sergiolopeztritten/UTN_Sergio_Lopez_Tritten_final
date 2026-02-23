const contacts = [
    {
        id: 1,
        name: 'Yoda',
        last_time_connection: 'Hace 2 horas',
        profile_picture: 'https://images.immediate.co.uk/production/volatile/sites/3/2017/12/yoda-the-empire-strikes-back-28a7558.jpg?quality=90&webp=true&resize=800,534',
        messages: [
            { id: 1, text: 'Hola, ¿cómo estás?', send_by_me: true, time: '12:00', is_read: true },
            { id: 2, text: 'Bien yo estoy. ¿Tú?', send_by_me: false, time: '12:05', is_read: true },
            { id: 3, text: '¡Excelente! Gracias por preguntar.', send_by_me: true, time: '12:06', is_read: true }
        ]
    },
    {
        id: 2,
        name: 'Pepe Argento',
        last_time_connection: 'Hace 3 horas',
        profile_picture: 'https://www.clarin.com/img/2022/01/20/GWR2-6fo__1256x620__1.jpg',
        messages: [
            { id: 1, text: '¡Holaaa! ¿Qué tal el día?', send_by_me: true, time: '09:00', is_read: true },
            { id: 2, text: 'Todo bien, trabajando como siempre...', send_by_me: false, time: '09:15', is_read: false }
        ]
    },
    {
        id: 3,
        name: 'Darth Vader',
        last_time_connection: 'En línea',
        profile_picture: 'https://upload.wikimedia.org/wikipedia/en/7/76/Darth_Vader.jpg',
        messages: [
            { id: 1, text: 'Luke, yo soy tu padre.', send_by_me: false, time: '08:00', is_read: true },
            { id: 2, text: '¡Eso es imposible!', send_by_me: true, time: '08:01', is_read: true }
        ]
    },
    {
        id: 4,
        name: 'Yoda (Star Wars)',
        last_time_connection: 'Hace 900 años',
        profile_picture: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Yoda_Empire_Strikes_Back.png',
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
        profile_picture: 'https://pngimg.com/uploads/rick_morty/rick_morty_PNG20.png',
        messages: [
            { id: 1, text: 'Wubba lubba dub dub!', send_by_me: false, time: '09:00', is_read: true },
            { id: 2, text: '¿Qué significa eso?', send_by_me: true, time: '09:01', is_read: true },
            { id: 3, text: 'Significa que estoy en dolor intenso. Morty, agarra el portal gun.', send_by_me: false, time: '09:02', is_read: false }
        ]
    },
    {
        id: 6,
        name: 'Pepe',
        last_time_connection: 'En el mar',
        profile_picture: 'https://upload.wikimedia.org/wikipedia/en/8/8d/Chicken_Joe.png',
        messages: [
            { id: 1, text: 'Dude, ¡las olas están brutales hoy!', send_by_me: false, time: '08:00', is_read: true },
            { id: 2, text: '¿Salís a surfear hoy?', send_by_me: true, time: '08:05', is_read: true },
            { id: 3, text: 'Siempre, bro. El mar me llama.', send_by_me: false, time: '08:07', is_read: false }
        ]
    }
]

export default contacts
