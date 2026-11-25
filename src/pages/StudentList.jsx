
import { useState, useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function StudentList() {

    // Step 1: Access Context
    const { favourites, setFavourites } = useContext(StudentContext);

    // Step 2: Create student list
    const [students, setstudents] = useState([
        { id: 1, studname: "Harshini" },
        { id: 2, studname: "Lakshmi" },
        { id: 3, studname: "Komali" },
        { id: 4, studname: "Archana" },
        { id: 5, studname: "Kavya" }
    ]);

    // Step 3: Add student to favourites
    function handleFavourite(student) {

        const alreadyAdded = favourites.some(function(item) {
            return item.id === student.id;
        });

        if (!alreadyAdded) {
            setFavourites([...favourites, student]);
        }

    }

    // Step 4: Display students
    return (
        <div className="p-10">

            <h1 className="text-3xl font-bold mb-5">
                Student List
            </h1>

            {
                students.map(function(item) {

                    return (
                        <div key={item.id} className="flex gap-5 mb-4">

                            <h2>{item.studname}</h2>

                            <button
                                onClick={() => handleFavourite(item)}
                               className="bg-green-600 text-white rounded-lg px-5 py-2"
                            >
                                {
                                    favourites.some(function(student) {
                                        return student.id === item.id;
                                    })
                                    ? "Added"
                                    : "Add Favourite"
                                }
                            </button>

                        </div>
                    );

                })
            }

        </div>
    );
}

export default StudentList;
