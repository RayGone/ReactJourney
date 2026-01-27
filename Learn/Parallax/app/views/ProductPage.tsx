import ProductCard from "~/components/ProductCard";

export default ({id=""}: {id?: string}) => <div id={id} className="flex flex-col dark:bg-gray-900">
  <h1 className="mt-4 mb-4 text-3xl font-bold text-shadow-sm flex justify-center">Vehicle</h1>
  <ProductCard />
</div>