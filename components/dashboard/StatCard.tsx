export const StatCard = ({ label, value, trend, isPositive }: any) => (
  <div className="bg-[#0c1427] border border-white/[0.03] rounded-[2.2rem] p-9 flex flex-col justify-between h-[200px] hover:border-white/10 transition-colors cursor-default">
    <div>
      <p className="text-[10px] tracking-[0.25em] text-gray-500 uppercase font-black mb-3">{label}</p>
      <h3 className="text-[38px] font-black text-white tracking-tighter leading-none">{value}</h3>
    </div>
    {trend && (
      <div className={`flex items-center gap-2 text-[12px] font-bold ${isPositive ? 'text-[#36d399]' : 'text-gray-500'}`}>
        {isPositive && <span className="text-sm">↗</span>}
        <span className={isPositive ? 'opacity-100' : 'opacity-60'}>{trend}</span>
      </div>
    )}
  </div>
);