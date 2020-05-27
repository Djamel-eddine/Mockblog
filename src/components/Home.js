import React, { useContext } from "react";
import Navbar from "./HomeComponents/MainNavbar";
import Login from "./HomeComponents/Login";
import Register from "./HomeComponents/Register";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./HomeComponents/resources/userContext";
import Footer from "./HomeComponents/footer";
import About from "./about";
import Error from "./error";
import Contact from "./contact";
import Profile from "./profile";
import Blog from "./blog";
import Article from "./article";
import Confirm from "./HomeComponents/confirm";
import Main from "./HomeComponents/main";
import Reset from "./HomeComponents/reset-pass";
import EditProfile from "./edit-profile";

const Home = (props) => {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/confirm" component={Confirm} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />

          <Route exact path="/blog" component={Blog} />
          <Route exact path="/reset_password" component={Reset} />
          <Route exact path="/edit_profile/:id" component={EditProfile} />
          <Route exact path="/profile/:id" component={Profile} />
          <Route exact path="/article/:id" component={Article} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </Router>
    </UserProvider>
  );
};
export default Home;
