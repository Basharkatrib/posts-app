"use client";

import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { StatCard } from "@/components/dashboard/StatCard";
import { RecentExhibits } from "@/components/dashboard/RecentExhibits";
import { QuickExhibit } from "@/components/dashboard/QuickExhibit";
import { Avatar } from "@/components/ui/Avatar";
import { FaSearch, FaBell, FaCog } from "react-icons/fa";

export default function DashboardPage() {
  const [showQuickExhibit, setShowQuickExhibit] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#050b18] text-white font-sans">
      <Sidebar />
      
      <main className="flex-1 lg:ml-64 p-8 xl:p-12 relative">
        {/* Header */}
        <header className="flex justify-between items-center mb-16">
          <div className="relative w-full max-w-md">
            <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600 text-sm" />
            <input 
              type="text" 
              placeholder="Search gallery artifacts..." 
              className="w-full bg-[#0a1224] border border-white/5 rounded-full py-3.5 px-14 text-[13px] outline-none focus:border-blue-500/20 transition-all placeholder:text-gray-600"
            />
          </div>
          
          <div className="flex items-center gap-8">
            <div className="flex gap-5 text-gray-500">
              <FaBell className="cursor-pointer hover:text-white transition-colors" />
              <FaCog className="cursor-pointer hover:text-white transition-colors" />
            </div>
            <Avatar className="w-9 h-9 border-2 border-white/10 p-[2px]" />
          </div>
        </header>

        <section className="mb-12">
          <h1 className="text-[42px] font-black tracking-tight mb-3">Curator Dashboard</h1>
          <p className="text-gray-400 text-[15px] font-medium opacity-80">Manage your intellectual exhibits and digital presence.</p>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <StatCard label="Total Impressions" value="244.8K" trend="12% from last week" isPositive />
          <StatCard label="Active Exhibits" value="1,402" trend="Curating 4 drafts" />
          <StatCard label="Follower Base" value="89.2K" trend="2.4k new" isPositive />
          <StatCard label="Avg. Sentiment" value="94%" trend="Exceptional engagement" />
        </div>

        <div className="relative mt-8">
          <RecentExhibits />
          
          {showQuickExhibit && (
            <div className="absolute top-0 right-0 z-50 animate-in fade-in zoom-in duration-300">
              <QuickExhibit onClose={() => setShowQuickExhibit(false)} />
            </div>
          )}
        </div>

        <button 
          onClick={() => setShowQuickExhibit(!showQuickExhibit)}
          className={`fixed bottom-10 right-10 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all z-[60] ${
            showQuickExhibit ? 'bg-red-500 rotate-45' : 'bg-blue-500 shadow-blue-500/40 hover:scale-110'
          }`}
        >
          <span className="text-2xl font-bold">+</span>
        </button>
      </main>
    </div>
  );
}