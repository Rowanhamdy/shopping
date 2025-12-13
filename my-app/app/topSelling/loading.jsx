export default function Loading() {
  return (
    <div className="mt-10 px-5 md:px-20">
      <h1 className="text-[48px] font-bold mb-6 text-center">Top Selling</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="animate-pulse bg-gray-200 h-60 rounded-lg" />
        ))}
      </div>
    </div>
  );
}
