
import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function FavouriteStudents() {

     const { favourites, setFavourites } = useContext(StudentContext);
     function handleRemove(removeid) {

        const temparr = favourites.filter(function(item) {

            if (item.id === removeid) {
                return false;
            }
            else {
                return true;
            }

        });

        setFavourites(temparr);
    }
return (

        <div className="p-10">

            <h1 className="text-3xl font-bold mb-5">
                Favourite Students 
            </h1>

            {
                favourites.length === 0 ?

                <h2 className="text-gray-500">
                    No Favourite Students Added
                </h2>

                :

                favourites.map(function(item) {

                    return (

                        <div
                            key={item.id}
                            className="flex gap-5 items-center mb-4"
                        >

                            <h2>{item.studname}</h2>

                            <button
                                onClick={() => handleRemove(item.id)}
                                className="bg-red-500 text-white px-4 py-2 rounded"
                            >
                                Remove
                            </button>

                        </div>

                    );

                })
            }

        </div>
    );
}

export default FavouriteStudents;