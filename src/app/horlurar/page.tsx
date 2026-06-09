const products = [
  {
    name: "Sony WH-1000XM5",
    description: "Trådlösa premiumhörlurar med brusreducering.",
    price: "3 990 kr",
    oldPrice: "4 490 kr",
    badge: "Populär",
  },
  {
    name: "AirPods Pro 2",
    description: "Apple hörlurar med aktiv brusreducering.",
    price: "2 990 kr",
    oldPrice: "3 490 kr",
    badge: "Bästsäljare",
  },
  {
    name: "Samsung Galaxy Buds3 Pro",
    description: "Trådlösa in-ear hörlurar med klart ljud.",
    price: "2 490 kr",
    oldPrice: "2 990 kr",
    badge: "Nyhet",
  },
];

export default function HorlurarPage() {
  return (
    <main className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-4">Hörlurar</h1>

      <p className="mb-8 text-gray-600 max-w-2xl">
        Utforska vårt sortiment av hörlurar från Sony, Apple, Samsung, JBL och Bose.
        Jämför populära modeller, priser och funktioner.
      </p>

      <div className="flex gap-3 mb-8 flex-wrap">
        <button className="border rounded px-4 py-2">Alla</button>
        <button className="border rounded px-4 py-2">Sony</button>
        <button className="border rounded px-4 py-2">Apple</button>
        <button className="border rounded px-4 py-2">Samsung</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.name} className="border rounded-lg p-5 bg-white">
            <span className="inline-block mb-4 rounded bg-blue-100 px-3 py-1 text-sm font-semibold">
              {product.badge}
            </span>

            <div className="mb-4 h-40 flex items-center justify-center rounded bg-gray-100">
              Produktbild
            </div>

            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>

            <p className="text-gray-600 mb-4">{product.description}</p>

            <div className="mb-4">
              <span className="text-2xl font-bold">{product.price}</span>
              <span className="ml-3 text-gray-400 line-through">{product.oldPrice}</span>
            </div>

            <p className="mb-4 text-green-600 font-semibold">
              Lager vara för snabb leverans
            </p>

            <button className="w-full rounded bg-black px-4 py-3 font-bold text-white">
              Lägg i varukorg
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

