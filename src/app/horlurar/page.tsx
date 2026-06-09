export default function HorlurarPage() {
  return (
    <main className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-4">
        Hörlurar
      </h1>

      <p className="mb-8 text-gray-600">
        Utforska vårt sortiment av hörlurar från Sony, Apple,
        Samsung, JBL och Bose.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border rounded p-4">
          <h3 className="font-semibold">Sony WH-1000XM5</h3>
          <p>Trådlösa premiumhörlurar</p>
          <p className="font-bold mt-2">3 990 kr</p>
        </div>

        <div className="border rounded p-4">
          <h3 className="font-semibold">AirPods Pro 2</h3>
          <p>Apple brusreducerande hörlurar</p>
          <p className="font-bold mt-2">2 990 kr</p>
        </div>

        <div className="border rounded p-4">
          <h3 className="font-semibold">Samsung Galaxy Buds3 Pro</h3>
          <p>Trådlösa in-ear hörlurar</p>
          <p className="font-bold mt-2">2 490 kr</p>
        </div>
      </div>
    </main>
  );
}
