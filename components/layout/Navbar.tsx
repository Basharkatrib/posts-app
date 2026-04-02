// src/components/layout/Navbar.tsx
import Link from 'next/link';
import { FaSearch, FaBell } from 'react-icons/fa';
import { IoSettingsOutline } from "react-icons/io5"; // أيقونة الإعدادات تشبه الصورة أكثر

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#020817] h-[72px] border-b border-slate-800/40 flex items-center px-8">
      <div className="flex items-center w-full max-w-[1500px] mx-auto justify-between">
        
        {/* الجزء الأيسر: الشعار */}
        <div className="flex items-center gap-12">
            <Link href={'/'}>
          <span className="text-[22px] font-black text-[#4285f4] italic tracking-tighter cursor-pointer">
            Atelier
          </span>
            </Link>

          {/* شريط البحث - مدمج بجانب اللوجو كما في الصورة */}
          <div className="relative w-[340px] hidden md:block">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400">
              <FaSearch size={14} />
            </div>
            <input
              type="text"
              placeholder="Search gallery..."
              className="w-full bg-[#0a101f] border-none text-[13px] text-slate-300 rounded-full py-[10px] pl-11 pr-4 focus:ring-1 focus:ring-blue-500/30 transition-all placeholder:text-slate-600"
            />
          </div>
        </div>

        {/* الجزء الأيمن: التنبيهات، الإعدادات، والبروفايل */}
        <div className="flex items-center gap-7">
          {/* أيقونة التنبيهات */}
          <button className="text-slate-400 hover:text-white transition-all relative p-1">
            <FaBell size={18} />
          </button>
          
          {/* أيقونة الإعدادات */}
          <button className="text-slate-400 hover:text-white transition-all p-1">
            <IoSettingsOutline size={20} />
          </button>

          {/* صورة البروفايل - دائرية وبسيطة */}
          <div className="relative group ml-1 cursor-pointer">
            <div className="w-9 h-9 rounded-full overflow-hidden border border-slate-700/50 group-hover:border-blue-500/50 transition-all">
              <img 
                src="https://ui-avatars.com/api/?name=User&background=1e293b&color=4285f4" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
};