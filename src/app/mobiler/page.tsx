export default function MobilerPage() {
  return (
    <main className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-4">
        Mobiler
      </h1>

      <p className="mb-8">
        Utforska vårt sortiment av smartphones från Apple,
        Samsung, Google och Xiaomi.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border p-4 rounded">
          iPhone 16 Pro
        </div>

        <div className="border p-4 rounded">
          Samsung Galaxy S25
        </div>

        <div className="border p-4 rounded">
          Google Pixel 10
        </div>
      </div>
    </main>
  );
}
