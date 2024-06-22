type SkillCardProps = {
    title: string;
    items: string[];
    bullets?: boolean;
}

export default function SkillCard({ title, items, bullets = true }: SkillCardProps) {
    return (
        <div className="rounded-xl w-[300px]">

            {/* Title */}
            <div className="bg-gray-600 px-6 py-2 rounded-t-xl h-[72px] flex items-center justify-center">
                <h3 className="text-gray-100 font-semibold uppercase text-lg max-w-22 text-center">
                    {title}
                </h3>
            </div>

            {/* List */}
            <div className="px-4 pt-3 pb-4 bg-white rounded-b-xl">
                <ul className={`text-gray-600 text-lg flex flex-col space-y-1
                    ${bullets && "list-disc pl-5"}`}>
                    {items.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </div>
        </div>
    );
}