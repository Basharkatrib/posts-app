import { Badge } from "@/components/ui/Badge";

const exhibits = [
  { title: "The Architecture of Silence:...", tags: ["Philosophy", "Design"], status: "PUBLISHED" },
  { title: "Brutalism in 2024: The Return o...", tags: ["Trends", "UI/UX"], status: "DRAFT" },
  { title: "Whisper-Quiet Typography: A...", tags: ["Art", "Editorial"], status: "PUBLISHED" },
];

export const RecentExhibits = () => (
  <div className="bg-[#0a1224]/40 border border-white/5 backdrop-blur-md rounded-[2.5rem] p-10 mt-8">
    <div className="flex justify-between items-center mb-10">
      <h2 className="text-xl font-bold">Recent Exhibits</h2>
      <button className="text-xs font-bold text-gray-500 hover:text-white transition">Filter</button>
    </div>
    
    <div className="space-y-8">
      {exhibits.map((item, idx) => (
        <div key={idx} className="flex justify-between items-center group cursor-pointer">
          <div className="space-y-1">
            <h4 className="text-sm font-bold group-hover:text-blue-400 transition">{item.title}</h4>
            <div className="flex gap-2 text-[10px] text-gray-500">
              {item.tags.map(tag => <span key={tag}>• {tag}</span>)}
            </div>
          </div>
          <Badge variant={item.status === "PUBLISHED" ? "success" : "ghost"}>
            {item.status}
          </Badge>
        </div>
      ))}
    </div>
  </div>
);