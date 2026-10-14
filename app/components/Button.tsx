interface ButtonProps {
    text: string;
    variant?: "primary" | "secondary";
}

export default function Button({ text, variant = "primary" }: ButtonProps) {
    const styles = variant === "primary" 
        ? "bg-orange-500 hover:bg-orange-600 text-white shadow-md shadow-orange-500/20" 
        : "border border-stone-300 hover:bg-stone-100 text-stone-800";

    return (
        <button className={`text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl transition duration-200 ${styles}`}>
            {text}
        </button>
    );
}