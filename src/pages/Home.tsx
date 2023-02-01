import { Outlet } from "react-router";
// import App from "../App";
import { Footer, Header } from "../components/layout";

const Home = () => {
  console.log("Home is here");
  return(
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Home;