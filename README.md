# WhatsApp Clone — TP Final Frontend UTN BA

Aplicación web de mensajería estilo WhatsApp desarrollada con React como Trabajo Práctico Final del Curso de Frontend de UTN BA.

## 🛠️ Tecnologías y librerías

- **React 19** — biblioteca principal de UI
- **react-router-dom v7** — enrutamiento y navegación (incluye `useParams`, `useSearchParams`, `Link`, `Routes`)
- **Vite** — bundler y servidor de desarrollo
- **CSS vanilla** — estilos responsivos sin dependencias externas

## ✅ Funcionalidades

- **Lista de contactos** en sidebar con foto, nombre y última conexión
- **Búsqueda de contactos** en tiempo real usando `useSearchParams` de react-router-dom (los parámetros se reflejan en la URL: `?q=yoda`)
- **Chat en tiempo real** — envío de mensajes con estado local, auto-scroll al último mensaje
- **Agregar contacto** — formulario con validación que agrega un nuevo contacto al estado global
- **Diseño responsivo** — funciona de 320px a 2000px. En móvil el chat cubre toda la pantalla y hay botón de volver
- **Página de error 404** para rutas no encontradas

## 📁 Estructura del proyecto

```
src/
├── App.jsx                          # Rutas principales
├── main.jsx                         # Entry point
├── index.css                        # Estilos globales responsivos
├── Context/
│   └── ContactsContext.jsx          # Contexto global (contacts, addMessage, addContact)
├── Components/
│   └── ContactSideBar/
│       └── ContactSideBar.jsx       # Sidebar con búsqueda y lista de contactos
├── Screens/
│   ├── HomeScreen/HomeScreen.jsx    # Pantalla de bienvenida
│   ├── ContactScreen/ContactScreen.jsx  # Chat con un contacto
│   └── ErrorNotFoundScreen/         # Página 404
├── data/
│   └── contactData.js               # Datos iniciales de contactos
└── services/
    └── contactsService.js           # Capa de servicio (simula API)
```

## 🚀 Cómo ejecutar

```bash
npm install
npm run dev
```

## 📋 Requisitos del TP cumplidos

| Requisito | Estado |
|---|---|
| Desarrollado en React | ✅ |
| Enrutamiento con react-router-dom | ✅ |
| Al menos 2 páginas | ✅ (Home, ContactScreen, 404) |
| Uso de estados (`useState`) | ✅ |
| Uso de contextos (`useContext`) | ✅ |
| Al menos 1 formulario | ✅ (enviar mensaje + agregar contacto) |
| Uso de componentes | ✅ |
| Search params de react-router | ✅ (búsqueda de contactos en URL) |
| Estilos accesibles | ✅ (fondo oscuro con texto claro) |
| Responsiva 320px–2000px | ✅ |
| Calidad de código (DRY, YAGNI, KISS) | ✅ |

## 👤 Autor

Sergio López Tritten — UTN BA Centro de e-Learning
