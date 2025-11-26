export function ScheduleBadge({ hour }: { hour: string }) {
  return (
    <div className="max-w-[55px] px-3 py-1.5 border border-gray-100 rounded-full text-xs font-bold text-gray-400">
      {hour}
    </div>
  );
}
