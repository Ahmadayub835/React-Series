import { createContext , useContext } from "react";

//This is our official provider which provides values to others consumers.
const ThemeContext = createContext({
    ThemeMode : '', //Inthis example we had discussed all the variables with their fucntions insteead of defining them in contexts.
    lightmode : () => {},
    darkmode  : () => {},
});

//This is the provider like as a tag which we used before. This is the second method to provide childrens.
export const ThemeProvider = ThemeContext.Provider

//This is our custom made hook:-
export default function useTheme(){
    return useContext(ThemeContext)
} //we made this hook for a single import rather than import usecontext in all files which we need to use. We used useContext in a single file which can be accessed by all the children.
