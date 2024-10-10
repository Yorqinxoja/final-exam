
const MakeUp = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-gray-50">
      <div className="flex flex-col items-center text-center bg-white p-6 ">
        <img
          src="https://i.gifer.com/IhcN.gif"
          alt="Lip Product"
          className="w-full h-full object-cover rounded-t-lg"
        />
        <h1 className="text-2xl font-bold mt-4">The viral lip you've been waiting for</h1>
        <p className="text-gray-600 mt-2">Say hello to the all-day staying power of a lip stain with Wonderskin.</p>
        <button className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition">
          Shop Now
        </button>
      </div>

      <div className="flex flex-col items-center text-center bg-white p-6 ">
        <img
          src="https://i.gifer.com/P7UF.gif"
          alt="Body Care Product"
          className="w-full h-full object-cover rounded-t-lg"
        />
        <h1 className="text-2xl font-bold mt-4">Head to toe glow</h1>
        <p className="text-gray-600 mt-2">
          Make way for clearer, calmer skin with body care newbies from Acnemey, The Ordinary, and more.
        </p>
        <button className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default MakeUp;
