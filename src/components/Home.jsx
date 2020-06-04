import React, { useContext } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
//main components
import Navbar from "./MainNavbar.jsx";
import Footer from "./footer.jsx";
import Error from "./error.jsx";

//visitor components
import Login from "./renderedComponents/visitorComponents/Login.jsx";
import Register from "./renderedComponents/visitorComponents/Register.jsx";
import Confirm from "./renderedComponents/visitorComponents/confirm.jsx";
import Main from "./renderedComponents/visitorComponents/main.jsx";
import Reset1 from "./renderedComponents/visitorComponents/reset-password-stp1.jsx";
import Reset2 from "./renderedComponents/visitorComponents/reset-password-stp2.jsx";
import About from "./renderedComponents/visitorComponents/about.jsx";
import Contact from "./renderedComponents/visitorComponents/contact.jsx";
import Blog from "./renderedComponents/visitorComponents/blog.jsx";

//blogger components
import Profile from "./renderedComponents/bloggerComponents/profile.jsx";
import Article from "./renderedComponents/bloggerComponents/article.jsx";
import EditProfile from "./renderedComponents/bloggerComponents/edit-profile.jsx";
/* import Editor from "./renderedComponents/bloggerComponents/postEditor/editor.jsx"; */

//states
import { UserContext } from "./resources/states/userContext";

const Home = (props) => {
  const { islogged } = useContext(UserContext);
  const [logged] = islogged;

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
        {/* <Route path="/post_editor" component={Editor} /> */}
        <Route component={Error} />
      </Switch>
      <Footer />
    </Router>
  );
};
export default Home;
