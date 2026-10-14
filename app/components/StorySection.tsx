import Button from './Button';

export default function StorySection() {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white p-8 md:p-12 rounded-3xl border border-stone-200/80 shadow-sm mt-12">
            <div>
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-stone-900 mb-4 leading-tight">
                    Home of the Chicago-Style Thin Crust Pizza
                </h2>
                <p className="text-stone-600 text-xs md:text-sm leading-relaxed mb-6">
                    Every pizza we serve is a testament to traditional Chicago recipes. Made with care, aged cheeses, and our signature tangy tomato sauce perfected over generations.
                </p>
                <div className="flex gap-4">
                    <Button text="Learn More" variant="primary" />
                    <Button text="Locations" variant="secondary" />
                </div>
            </div>

            {/* Fotos estilo Polaroid */}
            <div className="flex justify-center gap-6 relative">
                <div className="bg-white p-3 pb-8 rounded shadow-lg border border-stone-200 rotate-[-4deg] w-44">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80" className="w-full h-36 object-cover rounded-sm" alt="Chef" />
                    <span className="block text-center text-[10px] font-bold text-stone-600 mt-2 font-mono">Our Chef</span>
                </div>
                <div className="bg-white p-3 pb-8 rounded shadow-lg border border-stone-200 rotate-[6deg] w-44 translate-y-4">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80" className="w-full h-36 object-cover rounded-sm" alt="Founder" />
                    <span className="block text-center text-[10px] font-bold text-stone-600 mt-2 font-mono">Co-Founder</span>
                </div>
            </div>
        </section>
    );
}