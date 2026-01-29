const ProductCard = () => 
  <div className="w-full flex flex-row justify-center dark:bg-gray-900">
    <div className="w-[80%] lg:w-[65%] m-4 flex flex-col md:flex-row gap-2 bg-gray-50 dark:bg-gray-950 dark:shadow-black/60 border-t-1 shadow-gray-600 shadow-md hover:shadow-lg rounded rounded-t-none">
      <div className="flex flex-col h-full align-middle p-4">
        <h1 className="text-shadow-xs font-bold text-base">Automatic: Holden Astra-LS 2017 Model</h1>
        <hr /> <br />
        <div className="text-sm align-middle text-justify">
          Automatic Holden Astra LS (2017) offers a smooth, responsive drive with modern safety features, excellent visibility, and comfortable handling — perfect for building confidence behind the wheel during your driving lessons. 
          
          <div className="my-2 bg-gray-200 dark:bg-gray-700 rounded-xl p-2">You're also welcome to use your own vehicle if you prefer.</div>
        </div>
      </div>
      <img className="w-full border-1 border-gray-600 rounded rounded-t-none md:w-[50%] lg:w-[60%]" src="exitl.png" alt="Car" />
    </div>
  </div>;

export default ProductCard;