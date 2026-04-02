export const Badge = ({ children, variant = "ghost" }: { children: React.ReactNode, variant?: "success" | "ghost" }) => {
  const styles = {
    success: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    ghost: "bg-white/5 text-gray-500 border-white/10"
  };

  return (
    <span className={`px-3 py-1 rounded-full text-[9px] font-black tracking-tighter border ${styles[variant]}`}>
      {children}
    </span>
  );
};