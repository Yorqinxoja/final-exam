import beautys from "../../assets/beautys.png";
import { useProductQuery } from "../../redux/api/usersApi";
import { Product } from "../../redux/type";
import { useNavigate } from "react-router-dom";

const Beauty = () => {
  const navigate = useNavigate();
  const { data, isLoading, error } = useProductQuery();

  const handleViewDetails = (productId: number) => {
    navigate(`/details/${productId}`);
  };

  if (isLoading) return <p className="text-center py-4">LOADING...</p>;
  if (error) return <p className="text-center py-4 text-red-500">ERROR!</p>;
  return (
    <>
      <div className="flex flex-col gap-[100px] lg:flex-row items-center p-8 max-w-[1200px] mx-auto bg-white mt-[100px] ">
        <div className="flex-1">
          <img
            src={beautys}
            alt="Beauty Products"
            className="w-full h-auto "
          />
        </div>
        <div className="flex-1 p-6 text-center">
          <p className="text-gray-600 mb-6 text-[14px] leading-relaxed">
            Looking for five-star formulas, minus the price tag? From skincare essentials to makeup must-haves and results-driven haircare, BY BEAUTY BAY has everything you need to discover your next best obsession.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
            Shop Now
          </button>
        </div>
      </div>

      <div className="p-8 max-w-[1500px] mx-auto">

        <div className="flex space-x-6 overflow-x-auto py-4 text-center align-center justfiy-center ml-[50px] ">
          {data?.slice(60, 64).map((product: Product) => (
            <div
              key={product.id}
              className="flex-shrink-0 bg-white shadow-lg rounded-lg p-6 w-[300px] transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
            >
              <div className="relative h-[200px] bg-gray-200 mb-4 overflow-hidden rounded-lg">
                <img
                  src={product.image_link}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-sm text-gray-700 mb-4 line-clamp-2">{product.description}</p>

              <button onClick={() => handleViewDetails(product.id)} className="text-blue-500 underline text-sm mb-4 inline-block hover:text-blue-600 cursor-pointer transition duration-200">
                Buy now
              </button>

              <div className="flex justify-between items-center mt-4">
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  );
};

export default Beauty;
