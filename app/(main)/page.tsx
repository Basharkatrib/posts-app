import { Sidebar } from '@/components/layout/Sidebar';
import { RightSidebar } from '@/components/layout/RightSidebar';
import { PostCard } from '@/components/posts/PostCard';

// تعريف واجهة البيانات القادمة من الـ API
interface DummyPost {
  id: number;
  title: string;
  body: string;
  reactions: {
    likes: number;
    dislikes: number;
  };
  userId: number;
}

async function getPosts() {
  const res = await fetch('https://dummyjson.com/posts?limit=10'); // جلب أول 10 بوستات
  if (!res.ok) throw new Error('Failed to fetch posts');
  const data = await res.json();
  return data.posts;
}

export default async function Home() {
  const posts: DummyPost[] = await getPosts();

  return (
    <div className="min-h-screen bg-[#020817]">      
      <div className="flex max-w-[1600px] mx-auto">
        <Sidebar />

        <main className="flex-1 lg:ml-64 lg:mr-[320px] p-8 pt-10">
          <div className="max-w-[680px] mx-auto">
            <div className="flex justify-between items-end mb-10">
              <h1 className="text-4xl font-black text-white tracking-tighter">Latest Exhibits</h1>
              <span className="text-[10px] font-black text-slate-600 uppercase tracking-[0.4em] mb-1">
                Curated Stream
              </span>
            </div>

            {/* عرض قائمة البوستات ديناميكياً */}
            {posts.map((post) => (
              <PostCard 
                key={post.id}
                id={post.id}
                author={{ 
                  name: `User ${post.userId}`, // الـ API لا يعطي اسم المستخدم مباشرة هنا، سنستخدم المعرف
                  role: "Digital Creator", 
                  avatar: `https://i.pravatar.cc/150?u=${post.userId}` // صورة عشوائية بناءً على الـ ID
                }}
                content={post.body}
                timestamp="Recently"
                likes={post.reactions.likes}
                comments={Math.floor(Math.random() * 50)} // DummyJSON لا يوفر عدد الكومنتات في نفس طلب البوستات، لذا وضعنا رقماً عشوائياً
              />
            ))}
          </div>
        </main>

        <RightSidebar />
      </div>
    </div>
  );
}