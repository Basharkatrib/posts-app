// src/components/layout/Sidebar.tsx
import { FaRss, FaCompass, FaBookmark, FaListUl, FaUser } from 'react-icons/fa';

const menuItems = [
  { icon: FaRss, label: 'Feed', active: true },
  { icon: FaCompass, label: 'Explore' },
  { icon: FaBookmark, label: 'Bookmarks' },
  { icon: FaListUl, label: 'Lists' },
  { icon: FaUser, label: 'Profile' },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 fixed h-screen p-6 border-r border-slate-800 hidden lg:block">
      <h2 className="text-2xl font-black text-blue-500 italic mb-12">Atelier</h2>
      
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <div
            key={item.label}
            className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all ${
              item.active ? 'bg-blue-600/10 text-blue-500' : 'text-slate-500 hover:bg-slate-900 hover:text-white'
            }`}
          >
            <item.icon className="text-lg" />
            <span className="font-bold text-sm">{item.label}</span>
          </div>
        ))}
      </nav>

      <button className="mt-12 w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-blue-500/20 hover:scale-[1.02] transition-transform">
        Exhibit Thought
      </button>
    </aside>
  );
};