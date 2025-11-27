'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import Image from "next/image";

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const router = useRouter()
    const supabase = createClient()

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        try {
            const { data, error: signInError } = await supabase.auth.signInWithPassword({
                email,
                password,
            })

            if (signInError) {
                setError(signInError.message)
                setLoading(false)
                return
            }

            if (data.user) {
                router.push('/dashboard')
                router.refresh()
            }
        } catch (err) {
            setError('Ha ocurrido un error inesperado')
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200 p-4">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex w-full max-w-7xl min-h-[700px]">
                <div>
                    <Image src="/unc_logo.png" alt="UNC Logo" className="relative top-10 left-10" width={350} height={350} />
                </div>
                {/* Left Side - Form */}
                <div className="w-full md:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
                    <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">Sistema Ganadero</h1>
                    <h2 className="text-2xl font-bold text-center mb-12 text-gray-900">Bienvenido!</h2>

                    {error && (
                        <div className={`p-4 rounded-lg mb-6 ${error.includes('exitosamente')
                            ? 'bg-green-500/20 text-green-200 border border-green-500/30'
                            : 'bg-red-500/20 text-gray-900 border border-red-500/30'
                            }`}>
                            {error}
                        </div>
                    )}

                    <form className="space-y-8" onSubmit={handleLogin}>
                        <div className="space-y-2">
                            <label className="block text-base font-bold text-gray-800" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full border-b-2 border-gray-300 py-2 text-gray-900 focus:outline-none focus:border-black transition-colors"
                                placeholder="tu@email.com"
                                disabled={loading}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-base font-bold text-gray-800" htmlFor="password">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="w-full border-b-2 border-gray-300 py-2 text-gray-900 focus:outline-none focus:border-black transition-colors pr-10"
                                    placeholder="••••••••"
                                    disabled={loading}
                                />
                                <button type="button" className="absolute right-0 top-2 text-gray-500 hover:text-black" onClick={() => setShowPassword(!showPassword)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                        <circle cx="12" cy="12" r="3" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#222] text-white py-3 rounded-full font-bold text-lg hover:bg-black transition-colors"
                            >
                                {loading ? 'Cargando...' : 'Iniciar'}
                            </button>
                        </div>
                    </form>
                </div>

                {/* Right Side - Image */}
                <div className="hidden md:block w-1/2 relative">
                    <Image
                        src="/cows.png"
                        alt="Cows in a field"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>
        </div>
    )
}
