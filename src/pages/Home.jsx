import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MovieList from "../cine/MovieList";
import Footer from "../components/Footer";
import { movieContext, themeContext } from "../context";

function Home() {
  const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  return (
    <>
      <themeContext.Provider value={{darkMode, setDarkMode}}>
        <movieContext.Provider value={{ cartData, setCartData }}>
          <div className={darkMode ? "dark" : ""}>
            <div className="dark:bg-black dark:text-white">
              <Header />
              <main>
                <div className="container mx-auto grid gap-14 lg:grid-cols-[218px_1fr]">
                  {/* Sidebar */}
                  <Sidebar />

                  {/* Content */}
                  <MovieList />
                </div>
              </main>
              <Footer />
            </div>
          </div>
        </movieContext.Provider>
      </themeContext.Provider>
    </>
  );
}

export default Home;
