import { useLoaderData } from "react-router-dom";
import Food_ings from "../FOOD_INGS/Food_ings";

const Food_ing = () => {

    const deo = useLoaderData() ; 

    const del = deo.meals ;
    
    return (
        <div>
            {
                del.map((del) =>(<Food_ings key={del.idMeal} del ={del}></Food_ings>))
            }
        </div>
    );
};

export default Food_ing;