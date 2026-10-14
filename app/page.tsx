import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuCard from './components/MenuCard';
import StorySection from './components/StorySection';
import BottomSection from './components/BottomSection';

export default function Home() {
    return (
        <div className="bg-[#F4F0EA] min-h-screen text-[#2C2C2C] font-sans antialiased">
            <Navbar />

            <main className="max-w-6xl mx-auto px-4 py-8 space-y-16">
                <Hero />

                <section className="space-y-6">
                    <h2 className="text-xl font-black uppercase tracking-tight text-stone-900">Our Menu</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <MenuCard 
                            title="CHICKEN PARM" 
                            price="14" 
                            image="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80"
                            description="Crispy chicken, house marinara, melted mozzarella, fresh basil."
                        />
                        <MenuCard 
                            title="CHICKEN ALFREDO" 
                            price="15" 
                            image="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=400&q=80"
                            description="Creamy garlic alfredo sauce, grilled chicken, parmesan cheese."
                        />
                        <MenuCard 
                            title="SPAGHETTI & MEATBALLS" 
                            price="13" 
                            image="https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=400&q=80"
                            description="Classic Italian meatballs over al dente pasta with rich tomato sauce."
                        />
                        <MenuCard 
                            title="BAKED MAC & CHEESE" 
                            price="12" 
                            image="https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=400&q=80"
                            description="Blend of artisanal cheeses, baked golden brown with breadcrumb crust."
                        />
                    </div>
                </section>

                <StorySection />
                <BottomSection />
            </main>

            <footer className="bg-[#F4F0EA] border-t border-stone-300/60 py-8 mt-16 text-center text-xs text-stone-500">
                <p>© 2026 Crust Pizza Co. All rights reserved. Pixel Perfect Modular Design.</p>
            </footer>
        </div>
    );
}