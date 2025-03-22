import { useLoaderData } from "react-router-dom";
import Food_Detail from "../Food_Detail/Food_Detail";

const Food_Details = () => {
  const fooder = useLoaderData();


  const maper = fooder.meals;

  return (
    <div className="flex justify-center">
      <div className="lg:grid lg:grid-cols-4 sm:grid sm:grid-cols-1 gap-10  mt-8 ">
        {maper.map((maper) => (
          <Food_Detail maper={maper}></Food_Detail>
        ))}
      </div>
    </div>
  );
};

export default Food_Details;
