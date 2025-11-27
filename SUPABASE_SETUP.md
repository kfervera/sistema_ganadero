# Configuración de Supabase para Sistema Ganadero

## Pasos de configuración

### 1. Crear un proyecto en Supabase

1. Ve a [https://supabase.com](https://supabase.com) y crea una cuenta o inicia sesión
2. Haz clic en "New Project"
3. Completa los detalles del proyecto:
   - Nombre del proyecto
   - Contraseña de base de datos (guárdala en un lugar seguro)
   - Región (selecciona la más cercana a ti)

### 2. Obtener las credenciales

1. En el panel de tu proyecto, ve a **Settings** > **API**
2. Copia los siguientes valores:
   - **Project URL** (NEXT_PUBLIC_SUPABASE_URL)
   - **anon/public key** (NEXT_PUBLIC_SUPABASE_ANON_KEY)

### 3. Configurar variables de entorno

1. Crea un archivo `.env.local` en la raíz del proyecto (ya está en .gitignore)
2. Copia el contenido de `.env.local.example` y reemplaza con tus valores:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-clave-publica-anonima
```

### 4. Configurar la autenticación en Supabase

1. En el panel de Supabase, ve a **Authentication** > **Providers**
2. Asegúrate de que **Email** esté habilitado
3. En **Authentication** > **Settings**, configura:
   - Site URL: `http://localhost:3000` (para desarrollo)
   - Redirect URLs: `http://localhost:3000/**` (para desarrollo)

### 5. Ejecutar la aplicación

```bash
npm run dev
```

La aplicación estará disponible en http://localhost:3000

## Rutas disponibles

- `/` - Redirige automáticamente a `/login`
- `/login` - Página de inicio de sesión y registro
- `/dashboard` - Panel de control (requiere autenticación)

## Características implementadas

✅ Autenticación con Supabase
✅ Registro de nuevos usuarios
✅ Inicio de sesión
✅ Cierre de sesión
✅ Protección de rutas con middleware
✅ Redirecciones automáticas según estado de autenticación
✅ Dashboard con nombre de usuario
✅ Diseño moderno con glassmorphism

## Próximos pasos (opcional)

- Agregar recuperación de contraseña
- Implementar perfiles de usuario con nombres personalizados
- Agregar autenticación con proveedores sociales (Google, GitHub, etc.)
- Crear módulos específicos para gestión de ganado
