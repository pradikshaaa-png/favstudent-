import { createContext, useState } from "react";
export const StudentContext = createContext();
function StudentProvider({ children }) {

    const [favourites, setFavourites] = useState([]);

    return (
        <StudentContext.Provider value={{ favourites, setFavourites }}>
            {children}
        </StudentContext.Provider>
    );
}

export default StudentProvider
