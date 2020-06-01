import React, { useContext, useState } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
//main components
import Navbar from "./MainNavbar";
import Footer from "./footer";
import Error from "./error";

//visitor components
import Login from "./Components/visitorComponents/Login";
import Register from "./Components/visitorComponents/Register";
import Confirm from "./Components/visitorComponents/confirm";
import Main from "./Components/visitorComponents/main";
import Reset1 from "./Components/visitorComponents/reset-password-stp1";
import Reset2 from "./Components/visitorComponents/reset-password-stp2";
import About from "./Components/visitorComponents/about";
import Contact from "./Components/visitorComponents/contact";
import Blog from "./Components/visitorComponents/blog";

//blogger components
import Profile from "./Components/bloggerComponents/profile";
import Article from "./Components/bloggerComponents/article";
import EditProfile from "./Components/bloggerComponents/edit-profile";

//states
import { UserProvider, UserContext } from "./resources/states/userContext";

const Home = (props) => {
  const { user, islogged } = useContext(UserContext);
  const [logged, setlogged] = islogged;

  return (
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
        <Route exact path="/reset-password" component={Reset1} />

        {/* blogger */}
        <Route
          exact
          path="/edit_profile/user=:user"
          component={logged ? EditProfile : Main}
        />
        <Route
          exact
          path="/profile/user=:user"
          component={logged ? Profile : Main}
        />
        <Route path="/article/:id" component={logged ? Article : Main} />
        <Route
          path="/acount/password/token=:token"
          render={(props) => {
            const resettoken = props.location.pathname.replace(
              "/acount/password/token=",
              ""
            );
            return <Reset2 token={resettoken} />;
          }}
        />
        <Route component={Error} />
      </Switch>
      <Footer />
    </Router>
  );
};
export default Home;
