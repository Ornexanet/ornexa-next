import shopData from "@/components/Shop/shopData";
import SingleGridItem from "@/components/Shop/SingleGridItem";

export default function MobilerPage() {
  const mobileProducts = shopData.filter(
    (product) => product.category === "mobiler"
  );

  return (
    <main className="overflow-hidden">
      <section className="pt-10 pb-20 bg-gray-2">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold text-dark mb-3">
              Mobiler
            </h1>
            <p className="text-custom-sm text-gray-6">
              Utforska smartphones från Apple, Samsung, Google och fler varumärken.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7.5 gap-y-9">
            {mobileProducts.map((item) => (
              <SingleGridItem item={item} key={item.id} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
