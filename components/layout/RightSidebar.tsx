// src/components/layout/RightSidebar.tsx
import { FaFireAlt, FaUserPlus } from 'react-icons/fa';

const trendingTopics = [
  { tag: '#ATELIERDESIGN', title: 'The Glassmorphism Era', posts: '2.4k posts this morning' },
  { tag: '#DIGITALART', title: 'AI Collaboration', posts: '1.8k posts' },
  { tag: '#PRODUCTIVITY', title: 'Deep Work Rituals', posts: '942 posts' },
];

const newArtists = [
  { name: 'Oliver Kent', role: '3D Sculptor', avatar: 'https://i.pravatar.cc/150?u=oliver' },
  { name: 'Sasha Bloom', role: 'Motion Designer', avatar: 'https://i.pravatar.cc/150?u=sasha' },
];

export const RightSidebar = () => {
  return (
    <aside className="w-[320px] fixed right-0 top-[72px] h-[calc(100vh-72px)] p-6 overflow-y-auto hidden lg:block border-l border-slate-800/30 bg-[#020817]">
      
      {/* قسم Trending Now */}
      <div className="bg-[#0a101f]/40 border border-slate-800/50 rounded-[2rem] p-6 mb-6">
        <div className="flex items-center gap-2 mb-8 text-blue-500">
          <FaFireAlt size={14} className="animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">Trending Now</span>
        </div>

        <div className="space-y-8">
          {trendingTopics.map((topic, index) => (
            <div key={index} className="group cursor-pointer">
              <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1 group-hover:text-blue-400 transition-colors">
                {topic.tag}
              </p>
              <h4 className="text-[14px] font-bold text-white leading-tight mb-1">
                {topic.title}
              </h4>
              <p className="text-[11px] text-slate-600 font-medium">
                {topic.posts}
              </p>
            </div>
          ))}
        </div>

        <button className="w-full mt-10 pt-4 border-t border-slate-800/50 text-[10px] font-black text-slate-500 uppercase tracking-widest hover:text-white transition-colors">
          View All Curation
        </button>
      </div>

      {/* قسم New Artists */}
      <div className="bg-[#0a101f]/40 border border-slate-800/50 rounded-[2rem] p-6">
        <div className="flex items-center gap-2 mb-8 text-blue-500">
          <FaUserPlus size={14} />
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">New Artists</span>
        </div>

        <div className="space-y-6">
          {newArtists.map((artist, index) => (
            <div key={index} className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full overflow-hidden border border-slate-800 group-hover:border-blue-500/50 transition-all">
                  <img src={artist.avatar} alt={artist.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h5 className="text-[13px] font-bold text-white">{artist.name}</h5>
                  <p className="text-[10px] text-slate-500 font-medium">{artist.role}</p>
                </div>
              </div>
              <button className="text-[9px] font-black px-3 py-1.5 border border-slate-800 rounded-lg text-slate-400 hover:bg-white hover:text-black hover:border-white transition-all uppercase tracking-widest">
                Watch
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* روابط الفوتر البسيطة في الأسفل */}
      <div className="mt-8 px-6 space-y-2">
        <p className="text-[9px] text-slate-700 font-bold leading-relaxed">
          © 2026 Atelier Collective. All thoughts curated.
        </p>
        <div className="flex gap-3 text-[9px] text-slate-500 font-bold">
          <span className="hover:text-blue-500 cursor-pointer">Privacy</span>
          <span className="hover:text-blue-500 cursor-pointer">Ethics</span>
          <span className="hover:text-blue-500 cursor-pointer">Archive</span>
        </div>
      </div>
    </aside>
  );
};