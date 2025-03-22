import { useLoaderData, useNavigate } from "react-router-dom";
import Catagories from "../Catagories/Catagories";

const Catagory = () => {
  const Catagory = useLoaderData();
  const main = Catagory.categories;
           

  return (
    <div className="mt-10">
      <h1 className=" text-2xl font-bold text-green-800">Select Category</h1>
      <p className="mt-10 text-orange-600 font-bold">Indulge in a delightful dining experience with our curated selection of gourmet dishes. From exquisite local flavors to international favorites, every bite is crafted to perfection.</p>
      <div className=" flex justify-around mt-4">
        <div className=" lg:grid lg:grid-cols-3 sm:grid sm:grid-cols-1 gap-10">
          {main.map((main) => (
          <Catagories main={main}></Catagories> 
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catagory;
