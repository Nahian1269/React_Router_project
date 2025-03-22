
const Food_ings = ({del}) => {
    console.log(del);
    const{idMeal ,strMeal , strCategory , strArea , strInstructions, strMealThumb, strTags } = del ;
    return (
        <div className="mt-10 ">
  <div className=" lg:w-full h-auto bg-green-600 flex justify-around p-14 rounded-2xl ">
  <div className="w-1/3 text-left">
  <img className="w-96 h-96 rounded-2xl" src={strMealThumb}></img>
            <h1 className=" text-3xl  mt-5 text-wrap font-bold font-sans text-white">{strMeal}</h1>
            <p className=" font-semibold text-white mt-5">Food Area : {strArea}</p>
            <p className="font-semibold  text-yellow-300">Catagory: {strCategory}</p>
            <div className="w-full h-3/6  rounded-2xl mt-3">
            <h1 className="text-lg font-bold text-white">Other Informations:</h1>
            </div>
  </div>

           
            <div className=" w-1/2 bg-green text-left ml-10">
            <h1 className=" text-xl font-bold  text-white">Ingridents:</h1>
            <p className=" font-medium text-lg flex flex-wrap text-wrap text-justify mt-4  ">{strInstructions}</p>
            <div className="flex justify-end">
            <button className="px-10 py-3 rounded-xl bg-white font-bold text-green-800 mt-10 hover:text-white hover:bg-orange-500">Order</button>
            </div>
          
            </div>
           
        </div>
        </div>
      
    );
};

export default Food_ings;