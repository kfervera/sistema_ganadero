# Sistema Ganadero 🐄

Sistema de gestión de ganado construido con Next.js y Supabase.

## Características

- ✅ Autenticación con Supabase (login/registro)
- ✅ Dashboard protegido con información del usuario
- ✅ Middleware de protección de rutas
- ✅ Diseño moderno con glassmorphism
- ✅ Responsive design

## Configuración Inicial

### 1. Instalar dependencias

```bash
npm install
```

### 2. Configurar Supabase

**⚠️ IMPORTANTE:** Antes de ejecutar la aplicación, necesitas configurar Supabase.

1. Ve a [https://supabase.com](https://supabase.com) y crea un proyecto
2. Obtén tus credenciales en **Settings** > **API**:
   - Project URL
   - anon/public key
3. Crea un archivo `.env.local` en la raíz del proyecto:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-clave-publica-anonima
```

4. En Supabase, ve a **Authentication** > **Settings** y configura:
   - Site URL: `http://localhost:3000`
   - Redirect URLs: `http://localhost:3000/**`

📖 **Consulta `SUPABASE_SETUP.md` para instrucciones detalladas**

### 3. Ejecutar el servidor de desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Estructura del Proyecto

```
/app
  /login          # Página de inicio de sesión
  /dashboard      # Dashboard protegido (requiere autenticación)
  page.tsx        # Página principal (redirige a /login)
/lib
  /supabase       # Configuración de Supabase
    client.ts     # Cliente browser
    server.ts     # Cliente server
middleware.ts     # Protección de rutas
```

## Rutas

- `/` - Redirige automáticamente a `/login`
- `/login` - Página de inicio de sesión y registro
- `/dashboard` - Panel de control (requiere autenticación)

## Tecnologías

- [Next.js 16](https://nextjs.org) - Framework React
- [Supabase](https://supabase.com) - Autenticación y base de datos
- [TailwindCSS](https://tailwindcss.com) - Estilos
- [TypeScript](https://www.typescriptlang.org) - Tipado estático

## Deploy en Vercel

La forma más fácil de desplegar es usando [Vercel Platform](https://vercel.com/new).

**No olvides agregar las variables de entorno en Vercel:**
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

Consulta la [documentación de Next.js deployment](https://nextjs.org/docs/app/building-your-application/deploying) para más detalles.
