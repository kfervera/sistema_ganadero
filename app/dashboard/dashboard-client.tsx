'use client'

import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import type { User } from '@supabase/supabase-js'

interface DashboardClientProps {
    user: User
}

export default function DashboardClient({ user }: DashboardClientProps) {
    const router = useRouter()
    const supabase = createClient()

    const handleLogout = async () => {
        await supabase.auth.signOut()
        router.push('/login')
        router.refresh()
    }

    // Obtener nombre del email (la parte antes del @)
    const displayName = user.email?.split('@')[0] || 'Usuario'

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiKDI1NSwyNTUsMjU1KSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>

            <div className="relative z-10">
                {/* Header */}
                <header className="border-b border-white/10 backdrop-blur-xl bg-white/5">
                    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                                <span className="text-white font-bold text-xl">🐄</span>
                            </div>
                            <h1 className="text-2xl font-bold text-white">Sistema Ganadero</h1>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="text-right">
                                <p className="text-sm text-purple-200">Bienvenido,</p>
                                <p className="font-semibold text-white capitalize">{displayName}</p>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="px-4 py-2 rounded-lg bg-red-500/20 text-red-200 border border-red-500/30 hover:bg-red-500/30 transition-all"
                            >
                                Cerrar sesión
                            </button>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="max-w-7xl mx-auto px-6 py-8">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-white mb-2">
                            Panel de Control
                        </h2>
                        <p className="text-purple-200">
                            Gestiona tu ganado de manera eficiente
                        </p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-4xl">🐮</span>
                                <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-xs font-semibold">
                                    Activo
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-1">156</h3>
                            <p className="text-purple-200 text-sm">Total de Ganado</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-4xl">📊</span>
                                <div className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold">
                                    +12%
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-1">89%</h3>
                            <p className="text-purple-200 text-sm">Salud Promedio</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-4xl">🏥</span>
                                <div className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 text-xs font-semibold">
                                    Atención
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-1">3</h3>
                            <p className="text-purple-200 text-sm">Pendientes</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-4xl">💰</span>
                                <div className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold">
                                    Mensual
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-1">$45,200</h3>
                            <p className="text-purple-200 text-sm">Ingresos</p>
                        </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                        <h3 className="text-xl font-bold text-white mb-4">Actividad Reciente</h3>
                        <div className="space-y-4">
                            {[
                                { action: 'Nuevo registro', detail: 'Vaca #157 agregada al inventario', time: 'Hace 2 horas', icon: '➕' },
                                { action: 'Vacunación completada', detail: '12 animales vacunados contra fiebre aftosa', time: 'Hace 5 horas', icon: '💉' },
                                { action: 'Control de peso', detail: 'Actualización de peso del lote B', time: 'Ayer', icon: '⚖️' },
                                { action: 'Alerta de salud', detail: 'Vaca #089 requiere revisión veterinaria', time: 'Hace 2 días', icon: '⚠️' },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all border border-white/10"
                                >
                                    <span className="text-2xl">{item.icon}</span>
                                    <div className="flex-1">
                                        <p className="font-semibold text-white">{item.action}</p>
                                        <p className="text-sm text-purple-200">{item.detail}</p>
                                    </div>
                                    <span className="text-xs text-purple-300">{item.time}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
