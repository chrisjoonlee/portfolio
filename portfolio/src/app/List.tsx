type ListProps = {
    title: string;
    items: string[];
    bullets?: boolean;
}

export default function List({ title, items, bullets = true }: ListProps) {
    return (
        <div>
            <h3 className="text-gray-900 font-semibold uppercase text-xl">
                {title}
            </h3>
            <ul className={`text-gray-900 text-lg ${bullets && "list-disc pl-5"}`}>
                {items.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    );
}