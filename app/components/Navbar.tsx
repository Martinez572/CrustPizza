export default function Navbar() {
    return (
        <header className="w-full bg-[#F4F0EA] py-4 px-8 border-b border-stone-200/60 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center relative">
                
                {/* Links Izquierda */}
                <nav className="hidden md:flex items-center gap-8 text-xs font-bold tracking-wider uppercase text-stone-800">
                    <a href="#" className="bg-orange-500 text-white px-3 py-1.5 rounded-md shadow-sm">Home</a>
                    <a href="#" className="hover:text-orange-600 transition">Menu</a>
                    <a href="#" className="hover:text-orange-600 transition">Locations</a>
                    <a href="#" className="hover:text-orange-600 transition">Order Online</a>
                </nav>

                {/* LOGO CENTRAL CON IMAGEN LOCAL */}
                <div className="absolute left-1/2 -translate-x-1/2">
                    <div className="w-14 h-14 bg-stone-900 rounded-full overflow-hidden border-2 border-stone-700 shadow-md flex items-center justify-center">
                        <img src="/images/logo.png" alt="Crust Pizza Co Logo" className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* Links Derecha */}
                <div className="hidden md:flex items-center gap-8 text-xs font-bold tracking-wider uppercase text-stone-800 ml-auto">
                    <a href="#" className="hover:text-orange-600 transition">About</a>
                    <a href="#" className="hover:text-orange-600 transition">Contact</a>
                    <a href="#" className="flex items-center gap-1.5 text-stone-900 hover:text-orange-600">
                        <span>📞</span> Call Now
                    </a>
                </div>

            </div>
        </header>
    );
}