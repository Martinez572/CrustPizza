interface MenuCardProps {
    title: string;
    price: string;
    image: string;
    description: string;
}

export default function MenuCard({ title, price, image, description }: MenuCardProps) {
    return (
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-200/80 flex flex-col justify-between">
            <div>
                <div className="relative h-36 rounded-xl overflow-hidden mb-3 bg-stone-100">
                    <img src={image} alt={title} className="w-full h-full object-cover" />
                    <span className="absolute top-2 right-2 bg-stone-900/80 text-white text-[10px] font-bold px-2 py-0.5 rounded-md">${price}</span>
                </div>
                <h3 className="font-bold text-sm text-stone-900">{title}</h3>
                <p className="text-[11px] text-stone-500 mt-1 leading-normal">{description}</p>
            </div>
            <button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold py-2 rounded-xl transition">
                Add
            </button>
        </div>
    );
}