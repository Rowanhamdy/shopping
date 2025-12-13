

export default function Sidebar({ title = "Filters", children }) {
  return (
    <aside className="w-64 border border-gray-200 p-5 rounded-lg mt-20 m-5 ">
      <h1 className="font-bold text-xl mb-4">{title}</h1>
      <div className="line mb-5"></div>
      {children}
    </aside>
  );
}
