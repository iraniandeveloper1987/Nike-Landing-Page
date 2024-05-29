import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";
function PopularProducts() {
  return (
    <section id="products" className="max-container max-sm" mt-12>
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-montserrat font-bold">
          Our <span className="text-coral-red ">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after
          selection.Discover a word of comfort,design value.
        </p>
        <div
          className="mt-16 grid  lg:grid-cols-4 
        md:gird-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14"
        >
          {products.map((product, index) => (
            <PopularProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularProducts;