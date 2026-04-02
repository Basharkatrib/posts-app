import { Navbar } from "@/components/layout/Navbar";
import { RightSidebar } from "@/components/layout/RightSidebar";
import PostStats from "@/components/posts/PostStats";
import CommentSection from "@/components/posts/CommentSection";

// دالة جلب البيانات من الـ API
async function getPostData(id: string) {
  const res = await fetch(`https://dummyjson.com/posts/${id}`);
  if (!res.ok) return null;
  return res.json();
}


export default async function PostDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const post = await getPostData(resolvedParams.id);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#050b18] text-white flex items-center justify-center">
        <h1 className="text-2xl font-bold">Post not found</h1>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#050b18] text-white">
      <Navbar />
      
      <div className="container mx-auto flex gap-10 px-6 pt-14 pb-14">
        <div className="flex-1 max-w-4xl mx-auto">
          <article className="space-y-6">
            {/* صورة عشوائية للبوست */}
            <div className="h-[450px] w-full rounded-3xl overflow-hidden border border-white/5">
               <img 
                src={`https://picsum.photos/seed/${post.id}/1200/800`} 
                alt={post.title}
                className="w-full h-full object-cover opacity-80"
               />
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight leading-tight mt-8">
              {post.title}
            </h1>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              {post.body}
            </p>
          </article>

          {/* تمرير البيانات الحقيقية للـ Stats */}
          <PostStats likes={post.reactions.likes} views={post.views} />

          <CommentSection postId={post.id} />
        </div>

        <aside className="hidden xl:block w-80 sticky top-28">
           <RightSidebar />
        </aside>
      </div>
    </div>
  );
}