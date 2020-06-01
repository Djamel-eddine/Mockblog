import React, { useContext } from "react";
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
import { UserProvider } from "./resources/states/userContext";

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
          <Route exact path="/reset-password" component={Reset1} />
          <Route
            exact
            path="/edit_profile/user=:user"
            component={EditProfile}
          />
          <Route exact path="/profile/user=:user" component={Profile} />
          <Route path="/article/:id" component={Article} />
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
    </UserProvider>
  );
};
export default Home;
