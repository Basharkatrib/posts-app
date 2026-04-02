// components/dashboard/QuickExhibit.tsx

import { FaTimes } from "react-icons/fa";

interface QuickExhibitProps {
  onClose: () => void;
}

export const QuickExhibit = ({ onClose }: QuickExhibitProps) => (
  <div className="w-[380px] bg-[#1a233a] border border-white/10 rounded-[2.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] p-8 backdrop-blur-xl">
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-lg font-bold">Quick Exhibit</h3>
      {/* تفعيل زر الإغلاق هنا */}
      <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors">
        <FaTimes />
      </button>
    </div>

    {/* باقي كود المكون كما هو... */}
    <div className="space-y-4">
       {/* ... */}
       <div className="flex justify-between items-center pt-6 border-t border-white/5">
         <div className="flex gap-5 text-gray-500">
           {/* ... */}
         </div>
         <div className="flex items-center gap-6">
           <button onClick={onClose} className="text-xs font-bold text-gray-400 hover:text-white">Cancel</button>
           <button className="bg-blue-500 text-white px-8 py-2.5 rounded-full text-xs font-black shadow-lg shadow-blue-500/20 hover:scale-105 transition-transform">
             Exhibit
           </button>
         </div>
       </div>
    </div>
  </div>
);