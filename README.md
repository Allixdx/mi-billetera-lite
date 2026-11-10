# Mi Billetera Lite 💵

PWA ultraligera para registrar gastos diarios, diseñada para funcionar al 100% sin conexión a internet (modo avión).

## 🚀 Características
- **Offline First:** Funciona completamente sin red gracias al Service Worker.
- **Instalable:** Se puede instalar como app nativa (standalone) en móviles y escritorio.
- **Persistencia Local:** Los gastos se guardan en el `localStorage` del navegador.
- **Diseño Responsivo:** Interfaz optimizada para móviles (Mobile First).

## 🛠️ Tecnologías Usadas
- HTML5, CSS3 (Variables, Flexbox)
- JavaScript (Vanilla)
- Service Worker (Estrategia Cache First)
- Web App Manifest

## 📋 Cómo probar el modo Offline
1. Abre la aplicación en Chrome.
2. Abre DevTools (F12) y ve a la pestaña **Network**.
3. Cambia la conexión a **Offline**.
4. Recarga la página (F5). La app debe cargar normalmente.
5. Agrega un gasto, cierra la pestaña, vuelve a abrirla (sigue offline). El gasto y el total deben seguir ahí.

## 🌐 Demo en vivo
Puedes ver la aplicación desplegada aquí: [ENLACE_A_TU_GITHUB_PAGES]