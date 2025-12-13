export default function CategoryFilter({
  categories,
  value,
  onChange,
}) {
  return (
    <div className="mb-6">
      <h2 className="font-semibold mb-2">Category</h2>

      {categories.map((cat) => (
        <label key={cat} className="flex items-center gap-2 mb-2">
          <input
            type="checkbox"
            checked={value.includes(cat)}
            onChange={() => onChange(cat)}
            className="accent-black"
          />
          <span className="capitalize">{cat}</span>
        </label>
      ))}
      <div className="line mt-5"></div>
    </div>
  );
}
