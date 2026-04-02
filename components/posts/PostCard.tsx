// src/components/posts/PostCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { FaHeart, FaComment, FaShareAlt } from 'react-icons/fa';

interface PostProps {
  id: number;  
  author: { name: string; role: string; avatar: string };
  content: string;
  image?: string;
  timestamp: string;
  likes: number;
  comments: number;
}

export const PostCard = ({id, author, content, image, timestamp, likes, comments }: PostProps) => {
  return (
    <Link href={`/posts/${id}`}>
    <div className="bg-[#0f172a]/50 border border-slate-800 rounded-[2rem] p-6 mb-6 backdrop-blur-sm hover:border-slate-700 transition-all">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-700">
            <img src={author.avatar} alt={author.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">{author.name}</h4>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{author.role}</p>
          </div>
        </div>
        <span className="text-xs text-slate-500">{timestamp}</span>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4 text-sm font-medium">
        {content}
      </p>

      {image && (
        <div className="rounded-3xl overflow-hidden mb-4 border border-slate-800">
          <img src={image} alt="Post visual" className="w-full h-auto object-cover" />
        </div>
      )}

      <div className="flex items-center justify-between pt-2 border-t border-slate-800/50">
        <div className="flex gap-4">
          <button className="flex items-center gap-1.5 text-slate-500 hover:text-red-500 text-xs transition-colors">
            <FaHeart /> {likes}
          </button>
          <button className="flex items-center gap-1.5 text-slate-500 hover:text-blue-500 text-xs transition-colors">
            <FaComment /> {comments}
          </button>
        </div>
        <button className="text-slate-500 hover:text-white transition-colors">
          <FaShareAlt className="text-sm" />
        </button>
      </div>
    </div>
    </Link>
  );
};