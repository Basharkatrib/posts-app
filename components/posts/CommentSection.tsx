// src/components/posts/CommentSection.tsx
import { Avatar } from "@/components/ui/Avatar"; 
import { Button } from "@/components/ui/Button";

// 1. تعريف واجهة البيانات (Interface) لاستقبال postId
interface CommentSectionProps {
  postId: number | string;
}

export default function CommentSection({ postId }: CommentSectionProps) {
  return (
    <div className="space-y-8 mt-10">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold tracking-wide">Dialogues</h3>
        {/* اختيار اختياري: عرض معرف البوست للتأكد من الربط */}
        <span className="text-[10px] text-slate-600 font-mono tracking-widest uppercase">
          Exhibit ID: {postId}
        </span>
      </div>

      {/* صندوق كتابة تعليق جديد */}
      <div className="bg-[#0a1224]/50 border border-white/5 backdrop-blur-sm rounded-2xl p-5 flex gap-4">
        <Avatar src="/user-avatar.jpg" className="w-10 h-10 border border-white/10" />
        <div className="flex-1">
          <textarea 
            placeholder="Add your thought to the exhibit..."
            className="w-full bg-transparent border-none outline-none text-sm resize-none text-gray-300 h-20 placeholder:text-gray-600"
          />
          <div className="flex justify-end pt-2">
            <Button className="bg-blue-600 hover:bg-blue-500 text-white rounded-full px-6 py-2 text-xs transition-all">
              Post Thought
            </Button>
          </div>
        </div>
      </div>

      {/* قائمة التعليقات */}
      <div className="space-y-8">
        {/* تعليق تجريبي يوضح استجابة المكون للـ ID */}
        <CommentItem 
          author="Julian Voss" 
          time="45m ago"
          text={`This perspective on exhibit #${postId} is profound. It changes the way we think about user flow—it's not just a path, it's a liturgy.`}
        />
        
        <CommentItem 
          author="Elena Rossi" 
          time="2h ago"
          text="The architectural constraints mentioned here actually foster more creativity than total freedom would."
        />
      </div>
    </div>
  );
}

// 2. مكون عنصر التعليق الفردي
interface CommentItemProps {
  author: string;
  time: string;
  text: string;
}

function CommentItem({ author, time, text }: CommentItemProps) {
  return (
    <div className="flex gap-4 group">
      <Avatar className="w-9 h-9 border border-white/5" />
      <div className="flex-1 space-y-1">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-gray-200">{author}</span>
          <span className="text-[10px] text-gray-500 font-mono italic">{time}</span>
        </div>
        <p className="text-sm text-gray-400 leading-relaxed max-w-2xl">{text}</p>
        <div className="flex gap-5 pt-2">
          <button className="text-[11px] text-gray-500 hover:text-blue-400 transition">Like</button>
          <button className="text-[11px] text-gray-500 hover:text-blue-400 transition">Reply</button>
        </div>
      </div>
    </div>
  );
}