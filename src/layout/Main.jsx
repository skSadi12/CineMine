import { Outlet } from "react-router-dom";
// import Navbar from "../components/navbar";
// import Footer from "../components/Footer";
// import Navbar from "../Components/Navbar";


const Main = () => {
  return (
    <div className="font-sans antialiased  tetx-black  ">
      {/* <Navbar /> */}

      <Outlet></Outlet>

      {/* <Footer/> */}
    </div>
  );
};

export default Main;
