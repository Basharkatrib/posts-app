// src/components/posts/PostStats.tsx
export default function PostStats({ likes, views }: { likes?: number, views?: number }) {
  const stats = [
    { label: "EXHIBITS (Likes)", value: likes || "0" },
    { label: "VIEWS", value: views || "0" },
    { label: "THOUGHTS", value: "89" }, // رقم افتراضي للتعليقات
  ];

  return (
    <div className="flex justify-around py-8 border-y border-gray-800/50 my-10">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <h4 className="text-3xl font-black text-white tracking-tighter">{stat.value}</h4>
          <p className="text-[9px] tracking-[0.3em] text-slate-500 uppercase mt-2 font-bold">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}