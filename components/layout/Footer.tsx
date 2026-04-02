import Link from 'next/link';
import { FaGithub, FaTwitter, FaLinkedin, FaAt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-[#020817] border-t border-white/[0.05] py-12 mt-auto relative z-10">
      <div className="max-w-[1600px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* 1. العلامة التجارية والوصف */}
        <div className="col-span-1 md:col-span-1 space-y-4">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-blue-400 text-xl group-hover:rotate-12 transition-transform duration-300">✦</span>
            <h1 className="text-lg font-extrabold tracking-tighter italic text-white uppercase">Atelier</h1>
          </Link>
          <p className="text-slate-500 text-xs leading-relaxed max-w-[240px]">
            The Digital Curator for excellence. Discover, track, and curate the finest digital assets in the world.
          </p>
          <div className="flex items-center gap-4 text-slate-600">
            <a href="#" className="hover:text-blue-400 transition-colors"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><FaGithub /></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><FaLinkedin /></a>
          </div>
        </div>

        {/* 2. روابط سريعة */}
        <div className="space-y-4">
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white">Platform</h4>
          <ul className="space-y-2">
            <li><Link href="/explore" className="text-[11px] text-slate-500 hover:text-white transition-colors">Explore Gallery</Link></li>
            <li><Link href="/trending" className="text-[11px] text-slate-500 hover:text-white transition-colors">Trending Now</Link></li>
            <li><Link href="/curators" className="text-[11px] text-slate-500 hover:text-white transition-colors">Featured Curators</Link></li>
          </ul>
        </div>

        {/* 3. الدعم */}
        <div className="space-y-4">
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white">Support</h4>
          <ul className="space-y-2">
            <li><Link href="/help" className="text-[11px] text-slate-500 hover:text-white transition-colors">Help Center</Link></li>
            <li><Link href="/terms" className="text-[11px] text-slate-500 hover:text-white transition-colors">Terms of Service</Link></li>
            <li><Link href="/privacy" className="text-[11px] text-slate-500 hover:text-white transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* 4. تواصل معنا */}
        <div className="space-y-4">
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white">Contact</h4>
          <p className="text-[11px] text-slate-500">Stay updated with our latest news.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-[#050b18] border border-white/[0.05] rounded-l-lg px-3 py-2 text-[10px] text-white focus:outline-none focus:border-blue-500/30 w-full"
            />
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-r-lg text-[10px] font-bold transition-all">
              Join
            </button>
          </div>
        </div>

      </div>

      {/* حقوق الملكية */}
      <div className="max-w-[1600px] mx-auto px-6  pt-8 border-t border-white/[0.03] flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-[9px] uppercase tracking-[0.2em] text-slate-700">© 2024 Atelier Interactive. All assets reserved.</span>
        <div className="flex gap-6">
          <span className="text-[9px] uppercase tracking-[0.2em] text-slate-800">Status: Operational</span>
          <span className="text-[9px] uppercase tracking-[0.2em] text-slate-800">Version 1.0.4</span>
        </div>
      </div>
    </footer>
  );
}