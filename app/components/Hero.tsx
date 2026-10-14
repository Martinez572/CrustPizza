import Button from './Button';

export default function Hero() {
    return (
        <section className="relative bg-stone-900 rounded-3xl overflow-hidden shadow-xl min-h-[420px] flex items-center">
            {/* IMAGEN LOCAL DEL BANNER */}
            <img src="/images/pizza-manos.png" 
                 alt="Delicious Pizza" className="absolute inset-0 w-full h-full object-cover opacity-80" />
            
            <div className="relative z-10 m-8 md:m-12 bg-stone-950/90 backdrop-blur-md p-8 md:p-10 rounded-2xl max-w-lg border border-stone-800 shadow-2xl">
                <h1 className="text-3xl md:text-4xl font-black text-white leading-tight uppercase tracking-tight mb-4">
                    For Delicious, Made-From Scratch Pizzas
                </h1>
                <p className="text-stone-300 text-xs md:text-sm mb-6 leading-relaxed">
                    Handcrafted artisan pizzas made with fresh, locally sourced ingredients daily.
                </p>
                <Button text="Order Online" variant="primary" />
            </div>
        </section>
    );
}