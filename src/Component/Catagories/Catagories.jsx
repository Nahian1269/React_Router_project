import { useNavigate } from "react-router-dom";
import "./Catagories.css";
const Catagories = ({ main }) => {


  const { idCategory, strCategory, strCategoryDescription, strCategoryThumb } =
    main;

    const nav = useNavigate() ;

    
    const handleShowDetails = () => {
      nav(`/foods/${strCategory}`)
}

  return (
    <button onClick={handleShowDetails}> 
    <div>
      <div className=" font-bold  text-2xl flex w-80 h-80 border-4 mt-8  items-center p-8 hover:bg-orange-300 hover:text-white">
        <div>
          <img src={strCategoryThumb}></img>
          <h1 className=" mt-6">{strCategory}</h1>
        
        </div>
      </div>
    </div>
    </button>
    
  );
};

export default Catagories;
