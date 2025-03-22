import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom';

const Food_Detail = ({ maper }) => {
    
    
  const { strMealThumb, strMeal,idMeal } = maper;
  console.log(strMeal);
  const fooder = useNavigate() ;
  const tap = () => {
    fooder(`/food_ing/${idMeal}`) 
  }

  return (
    <div className="font-bold  text-sm text-left w-70 h-96 border-4 rounded-xl mt-8   p-8 hover:bg-orange-300">
      <div className=" h-32">
        <img className=" rounded-xl" src={strMealThumb}></img>
        <h1 className="mt-5 text-green-800"><button on onClick={tap}>{strMeal}</button></h1>
        
      </div>
      <div className="flex items-baseline gap-20  lg:mt-36">
          <div>
            <button className=" mt-6 border-2 px-4 rounded-lg bg-green-700 text-white hover:bg-orange-500 ">
             Cart
            </button>
          </div>
          <div>
            <div><p>{idMeal}.$</p></div>
            <div>

            </div>
          </div>
        </div>
    </div>
  );
};

export default Food_Detail;
