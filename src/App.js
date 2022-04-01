import React, { useState } from "react";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { RouteList } from "./components/RouteList";

const App = () => {
    const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="flex flex-col bg-gray-50 dark:bg-gray-900 dark:text-gray-100 min-h-screen custom-animation">
          <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
          <div className="flex-1 py-4">
              <RouteList />
          </div>
          <Footer />
      </div>
    </div>
  );
};

export default App;
