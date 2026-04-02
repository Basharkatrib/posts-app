import Link from 'next/link';
import { FaApple } from 'react-icons/fa';

export default function RegisterPage() {

  return (
    <div className="min-h-screen bg-[#020817] flex flex-col items-center p-6 text-white font-sans antialiased border border-[#5b6aff44] rounded-xl relative overflow-hidden">

      {/* خلفية gradient علوية */}
      <div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(ellipse 80% 40% at 50% 0%, #1a2a5525 0%, transparent 70%)'}} />

      {/* 1. الشعار العلوي */}
      <div className="flex items-center gap-2 mt-6 mb-10 relative z-10">
        <span className="text-blue-300 text-lg leading-none" style={{letterSpacing: '-2px'}}>✦</span>
        <h1 className="text-xl font-extrabold tracking-tight italic text-white">Atelier</h1>
      </div>

      {/* 2. بطاقة التسجيل */}
      <div className="w-full max-w-[400px] bg-[#080f1e] border border-white/[0.08] rounded-[1.25rem] p-8 shadow-2xl relative z-10">

        {/* العناوين */}
        <div className="text-center mb-8 space-y-2">
          <h2 className="text-[22px] font-black tracking-tight leading-tight text-white">Join The Atelier</h2>
          <p className="text-slate-400 text-[11px] tracking-wide leading-relaxed">
            Begin your journey into the world of digital curation.
          </p>
        </div>

        <form className="space-y-4">

          {/* حقل الاسم الكامل */}
          <div className="space-y-1.5">
            {/* تحديث: اللون أصبح أبيض باهت قليلاً للوضوح text-slate-200 */}
            <label className="text-[8px] uppercase tracking-[0.22em] font-bold text-slate-200 ml-0.5 block">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full bg-[#040910] border border-white/[0.06] rounded-lg px-4 py-2.5 text-[12px] text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500/50 transition-all font-sans"
            />
          </div>

          {/* حقل الإيميل */}
          <div className="space-y-1.5">
            <label className="text-[8px] uppercase tracking-[0.22em] font-bold text-slate-200 ml-0.5 block">
              Email Address
            </label>
            <input
              type="email"
              placeholder="curator@atelier.digital"
              className="w-full bg-[#040910] border border-white/[0.06] rounded-lg px-4 py-2.5 text-[12px] text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500/50 transition-all font-sans"
            />
          </div>

          {/* حقول كلمة المرور المزدوجة */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-[8px] uppercase tracking-[0.22em] font-bold text-slate-200 ml-0.5 block">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-[#040910] border border-white/[0.06] rounded-lg px-4 py-2.5 text-[12px] text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500/50 transition-all font-sans"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[8px] uppercase tracking-[0.22em] font-bold text-slate-200 ml-0.5 block">
                Confirm
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-[#040910] border border-white/[0.06] rounded-lg px-4 py-2.5 text-[12px] text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500/50 transition-all font-sans"
              />
            </div>
          </div>

          {/* زر الإنشاء */}
          <button
            type="submit"
            className="w-full bg-[#3b82f6] hover:bg-[#2d74e7] text-white font-bold py-3 rounded-lg transition-all mt-3 text-[12px] tracking-wide"
          >
            Create Account
          </button>
        </form>

        {/* فاصل */}
        <div className="relative my-7">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/[0.05]"></div>
          </div>
          <div className="relative flex justify-center text-[8px] uppercase tracking-[0.3em] font-bold">
            <span className="bg-[#080f1e] px-4 text-slate-500">Or connect with</span>
          </div>
        </div>

        {/* أزرار التواصل الاجتماعي */}
        <div className="grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center gap-2.5 bg-[#040910] border border-white/[0.06] py-2.5 rounded-lg hover:bg-white/[0.04] transition-all">
            <svg width="14" height="14" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="text-white text-[11px] font-semibold tracking-wide">Google</span>
          </button>

          <button className="flex items-center justify-center gap-2.5 bg-[#040910] border border-white/[0.06] py-2.5 rounded-lg hover:bg-white/[0.04] transition-all">
            <FaApple className="text-white text-sm" />
            <span className="text-white text-[11px] font-semibold tracking-wide">Apple</span>
          </button>
        </div>

        {/* رابط تسجيل الدخول */}
        <div className="text-center mt-7">
          <p className="text-slate-500 text-[10px] tracking-wide">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-[#b0bcd6] font-bold hover:text-white transition-colors">
              Log in
            </Link>

          </p>
        </div>
      </div>

    </div>
  );
}