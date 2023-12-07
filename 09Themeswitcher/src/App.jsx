import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./Context/Theme";
import Card from "./Components/Card";
import Button from "./Components/Button";

function App() {
  const [themeMode, setThemeMode] = useState('light'); //This is for the changing of colors in ui.

  const lightmode = () => {
    //this is the function that we use to settheme as a dark variable.
    setThemeMode("light");
  };

  const darkmode = () => {
    //this is the function that we use to settheme as a dark variable.
    setThemeMode("dark");
  };

  //actual change in the theme:-
  useEffect(() => {
    var changeTheme = document.getElementsByTagName("html")[0];
    changeTheme.classList.remove("dark", "light");
    changeTheme.classList.add(themeMode);
  }, [themeMode]); //dependency is the when some changes the useEffect() calls.

  return (
    <>
      <ThemeProvider value={{ themeMode, lightmode, darkmode }}>
        {/*Now here we are wrapping (providing all the properties of theme context.) */}
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex mb-4">
              <Button />
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
