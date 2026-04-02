import Link from 'next/link';
import { FaApple, FaGoogle } from 'react-icons/fa';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#020817] flex flex-col items-center justify-center p-6 text-white font-sans antialiased relative overflow-hidden">
      
      {/* خلفية gradient علوية ناعمة جداً */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{background: 'radial-gradient(ellipse 70% 30% at 50% 0%, #1a2a5515 0%, transparent 60%)'}} />

      {/* 1. الشعار العلوي */}
      <div className="flex items-center gap-2 mb-10 relative z-10 transition-all">
        <span className="text-blue-300 text-lg leading-none" style={{letterSpacing: '-2px'}}>✦</span>
        <h1 className="text-xl font-extrabold tracking-tight italic text-white uppercase">Atelier</h1>
      </div>

      {/* --- محتوى البطاقة --- */}
      <main className="w-full max-w-[400px] bg-[#080f1e] border border-white/[0.08] rounded-[1.25rem] p-8 shadow-2xl relative z-10">
        
        {/* العناوين */}
        <div className="text-center mb-8 space-y-1.5">
          <h2 className="text-[22px] font-black tracking-tight leading-tight text-white">Welcome Back</h2>
          <p className="text-slate-400 text-[11px] tracking-wide leading-relaxed px-4">
            Enter your credentials to access your curation.
          </p>
        </div>

        <form className="space-y-4">
          {/* حقل الإيميل */}
          <div className="space-y-1.5">
            <label className="text-[8px] uppercase tracking-[0.22em] font-bold text-slate-200 ml-0.5 block">
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@atelier.com"
              className="w-full bg-[#040910] border border-white/[0.06] rounded-lg px-4 py-2.5 text-[12px] text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500/50 transition-all font-sans"
            />
          </div>

          {/* حقل كلمة المرور ورابط النسيان */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between px-0.5">
              <label className="text-[8px] uppercase tracking-[0.22em] font-bold text-slate-200 block">
                Password
              </label>
              <Link href="/forgot-password" data-ignore="true" className="text-[8px] uppercase tracking-[0.1em] text-slate-500 hover:text-slate-300 transition-colors font-semibold">
                Forgot Password?
              </Link>
            </div>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full bg-[#040910] border border-white/[0.06] rounded-lg px-4 py-2.5 text-[12px] text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500/50 transition-all font-sans"
            />
          </div>

          {/* زر تسجيل الدخول */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg transition-all mt-3 text-[12px] tracking-wide"
          >
            Sign In
          </button>
        </form>

        {/* فاصل */}
        <div className="relative my-7">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/[0.05]"></div>
          </div>
          <div className="relative flex justify-center text-[8px] uppercase tracking-[0.3em] font-bold">
            <span className="bg-[#080f1e] px-4 text-slate-500">Or continue with</span>
          </div>
        </div>

        {/* أزرار التواصل الاجتماعي */}
        <div className="grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center gap-2.5 bg-[#040910] border border-white/[0.06] py-2.5 rounded-lg hover:bg-white/[0.04] transition-all group">
            <FaGoogle className="text-slate-500 text-xs group-hover:text-white transition-colors" />
            <span className="text-white text-[11px] font-semibold tracking-wide">Google</span>
          </button>
          <button className="flex items-center justify-center gap-2.5 bg-[#040910] border border-white/[0.06] py-2.5 rounded-lg hover:bg-white/[0.04] transition-all group">
            <FaApple className="text-white text-sm" />
            <span className="text-white text-[11px] font-semibold tracking-wide">Apple</span>
          </button>
        </div>

        {/* رابط إنشاء حساب جديد */}
        <div className="text-center mt-7">
          <p className="text-slate-500 text-[10px] tracking-wide">
            New to the atelier?{' '}
            <Link href="/auth/register" className="text-[#b0bcd6] font-bold hover:text-white transition-colors underline-offset-2 hover:underline">
              Join the collection
            </Link>
          </p>
        </div>
      </main>

    </div>
  );
}