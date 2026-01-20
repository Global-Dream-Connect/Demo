// src/components/resources/ResourceCard.tsx
export default function ResourceCard({ title, description, buttonText }: { title: string, description: string, buttonText: string }) {
  return (
    <div className="bg-[#F8F7FF] p-8 rounded-3xl flex flex-col justify-between h-72 border border-transparent hover:border-purple-200 transition-all shadow-sm">
      <div>
        <h4 className="text-2xl font-bold mb-3 text-slate-800">{title}</h4>
        <p className="text-gray-500 leading-relaxed">{description}</p>
      </div>
      <button className="border border-blue-900 text-blue-900 text-sm font-semibold py-2.5 px-6 rounded-lg w-fit bg-white hover:bg-blue-900 hover:text-white transition-all">
        {buttonText}
      </button>
    </div>
  );
}