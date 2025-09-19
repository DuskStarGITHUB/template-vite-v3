# 🚀 Template Fullstack - Vite + React + SSR + SSG + NestJS

Este repositorio es un **template fullstack** que combina **Frontend + Backend** en un solo entorno.
La idea de este template es que, al clonarlo y ejecutar un comando, obtienes un **entorno completo de desarrollo** listo para empezar a programar.

---

## 📂 Estructura del proyecto

```text
template-vitev3/
│── backend/      → Servidor NestJS (Node.js + TypeScript)
│── frontend/     → Cliente React (Vite + TS + Minista, CSS normal)
│── package.json  → Scripts para inicializar la stack
```

---

### 🖥️ Backend (`backend/`)

* **Framework:** [NestJS](https://nestjs.com/)
* **Runtime:** Node.js
* **Lenguaje:** TypeScript
* **Gestor de paquetes:** npm

📂 Estructura del código:

```text
backend/src/
├── app.module.ts
├── main.ts
└── server/
    ├── server.controller.ts
    ├── server.controller.spec.ts
    └── server.module.ts
```

El backend responde en **[http://localhost:3000/](http://localhost:3000/)** y puede servir rutas y APIs según tus controladores.

---

### 🌐 Frontend (`frontend/`)

* **Framework:** [React](https://react.dev/) con [Vite](https://vitejs.dev/)
* **Lenguaje:** TypeScript
* **Estilos:** CSS normal (no Tailwind)
* **UI Components:** Personalizados o propios

📂 Estructura del código:

```text
frontend/src/
├── components/
│   └── Example.tsx        → Componente de ejemplo
├── pages/
│   └── index.tsx          → Página principal
```

El frontend se ejecuta en **[http://localhost:5173/](http://localhost:5173/)** y usa **Minista** para render SSR.

Los estilos globales están en `frontend/public/css/index.css` y los recursos públicos en `frontend/public/img/`.

---

## ⚡ Scripts disponibles

En el **package.json raíz**:

```json
{
  "scripts": {
    "init": "npm install --prefix backend && npm install --prefix frontend",
    "stack": "concurrently \"npm run dev --prefix frontend\" \"npm run start:dev --prefix backend\""
  }
}
```

### 🔧 Inicializar proyecto

Instalar dependencias en **backend** y **frontend**:

```bash
npm i
npm run init
```

### 🚀 Iniciar desarrollo

Levantar **frontend + backend al mismo tiempo**:

```bash
npm run stack
```

### 🖥️ Ejecutar de forma individual

* **Frontend:**

  ```bash
  cd frontend
  npm run dev
  ```

* **Backend:**

  ```bash
  cd backend
  npm run start:dev
  ```

---

## 📂 Estructura de carpetas (en árbol)

```text
template-vitev3/
├── backend/               → Servidor NestJS
│   ├── src/
│   │   ├── app.module.ts
│   │   ├── main.ts
│   │   └── server/
│   │       ├── server.controller.ts
│   │       ├── server.controller.spec.ts
│   │       └── server.module.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── tsconfig.build.json
├── frontend/              → Cliente React + Minista
│   ├── src/
│   │   ├── components/
│   │   │   └── Example.tsx
│   │   └── pages/
│   │       └── index.tsx
│   ├── public/
│   │   ├── css/
│   │   │   └── index.css
│   │   └── img/
│   │       └── icon.png
│   ├── dist/             → Carpeta de build
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
├── package.json           → Scripts raíz
└── README.md
```

---

## 🏗️ Cómo compilar el proyecto

### Backend (NestJS)

Para construir el backend y generar los archivos en `dist/`:

```bash
cd backend
npm run build
```

Para iniciar el backend en modo desarrollo (con watch y recarga automática):

```bash
npm run start:dev
```

Para producción:

```bash
npm run start:prod
```

---

### Frontend (React + Minista)

Para construir el frontend y generar los archivos finales en `dist/`:

```bash
cd frontend
npm run build
```

Para iniciar el servidor de desarrollo con Minista (SSR y hot reload):

```bash
npm run dev
```

Para previsualizar la build ya generada:

```bash
npm run preview
```

---

### 📌 Notas

* El frontend usa **[Minista](https://github.com/qrac/minista)**, por lo que soporta SSR y páginas tipo `/pages`.
* Estructura simple lista para desarrollo rápido y escalable.

---