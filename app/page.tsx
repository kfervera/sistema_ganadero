import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 p-4">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex w-full max-w-5xl min-h-[600px]">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">Bienvenido!</h1>

          <form className="space-y-8">
            <div className="space-y-2">
              <label className="block text-base font-bold text-gray-800" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border-b-2 border-gray-300 py-2 text-gray-900 focus:outline-none focus:border-black transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-base font-bold text-gray-800" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  className="w-full border-b-2 border-gray-300 py-2 text-gray-900 focus:outline-none focus:border-black transition-colors pr-10"
                />
                <button type="button" className="absolute right-0 top-2 text-gray-500 hover:text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <a href="#" className="text-sm text-gray-500 hover:text-black">
                Forgot Password?
              </a>
            </div>

            <div className="pt-4">
              <button
                type="button"
                className="w-full bg-[#222] text-white py-3 rounded-full font-bold text-lg hover:bg-black transition-colors"
              >
                Iniciar
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
  );
}
