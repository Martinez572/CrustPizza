import Button from './Button';

export default function BottomSection() {
    return (
        <div className="space-y-16 mt-16">
            
            {/* SECCIÓN 1: WAYS TO ENJOY */}
            <section className="space-y-8">
                <h2 className="text-xl font-black uppercase tracking-tight text-stone-900">Ways to Enjoy</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Tarjeta 1: Solo la imagen limpia de la pizza (pizza-banner.png) */}
                    <div className="relative bg-stone-900 rounded-3xl overflow-hidden shadow-sm h-80 flex items-center justify-center">
                        <img src="/images/pizza-banner.png" 
                             alt="Pizza" className="absolute inset-0 w-full h-full object-cover" />
                    </div>

                    {/* Tarjeta 2: Award-Winning */}
                    <div className="bg-stone-900 text-white p-8 rounded-3xl shadow-sm flex flex-col justify-between">
                        <div>
                            <div className="w-10 h-10 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center font-bold mb-4">🏆</div>
                            <h3 className="text-lg font-black uppercase tracking-tight mb-2">Award-Winning Pizza & Service</h3>
                            <p className="text-stone-400 text-xs leading-relaxed">Experience world-class culinary excellence made from scratch every single day.</p>
                        </div>
                        <div className="mt-6">
                            <Button text="Learn More" variant="primary" />
                        </div>
                    </div>

                    {/* Tarjeta 3: Kids Eat Free */}
                    <div className="bg-stone-900 text-white p-8 rounded-3xl shadow-sm flex flex-col justify-between">
                        <div>
                            <div className="w-10 h-10 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center font-bold mb-4">🍕</div>
                            <h3 className="text-lg font-black uppercase tracking-tight mb-2">Kids Eat Free Tuesdays!</h3>
                            <p className="text-stone-400 text-xs leading-relaxed">Treat the family with our special weekly promotion. Bring your little ones over.</p>
                        </div>
                        <div className="mt-6">
                            <Button text="View Kids Menu" variant="primary" />
                        </div>
                    </div>
                </div>
            </section>


            {/* SECCIÓN 2: WHY CHOOSE US & COMUNIDAD (Usando grid-collage.png) */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="bg-white p-8 rounded-3xl border border-stone-200/80 shadow-sm flex flex-col justify-between h-full">
                    <div>
                        <span className="text-[10px] font-bold tracking-widest text-stone-400 uppercase">@yourbrandhandle</span>
                        <h3 className="text-xl font-black uppercase tracking-tight text-stone-900 mt-1 mb-2">Let's Work Together For Our Community</h3>
                        <p className="text-stone-500 text-xs leading-relaxed mb-6">We love supporting local initiatives, schools, and neighborhood organizations. Partner with us!</p>
                    </div>
                    <div className="bg-stone-50 p-4 rounded-2xl border border-stone-100 flex items-center justify-between">
                        <span className="text-xs font-bold text-stone-800">Join our local program</span>
                        <Button text="Get In Touch" variant="primary" />
                    </div>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-stone-200/80 shadow-sm">
                    <h3 className="text-sm font-black uppercase tracking-tight text-stone-900 mb-4">Why Choose Us</h3>
                    <div className="rounded-2xl overflow-hidden shadow-sm bg-stone-100">
                        <img src="/images/grid-collage.png" alt="Why Choose Us Collage" className="w-full h-full object-cover" />
                    </div>
                </div>
            </section>


            {/* SECCIÓN 3: FRANQUICIAS Y LOCAL (Usando restaurant-store.png) */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white p-8 md:p-10 rounded-3xl border border-stone-200/80 shadow-sm">
                <div>
                    <h3 className="text-xl font-black uppercase tracking-tight text-stone-900 mb-2">Want To Own Your Own Crust Pizza Co.?</h3>
                    <p className="text-stone-500 text-xs leading-relaxed mb-6">Discover franchise opportunities and bring the best Chicago-style pizza to your city.</p>
                    <Button text="Submit A Request" variant="primary" />
                </div>

                <div className="relative h-48 rounded-2xl overflow-hidden shadow-inner bg-stone-200">
                    <img src="/images/restaurant-store.png" alt="Restaurant building" className="w-full h-full object-cover" />
                </div>
            </section>

        </div>
    );
}