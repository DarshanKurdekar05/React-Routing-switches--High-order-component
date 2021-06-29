import React, { Fragment } from "react";
import Abouts from "./Components/Abouts";
import Education from "./Components/Education";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import PageNotFound from "./Components/PageNotFound";
import HOC from "./Components/HOC";

const App = () => {
  return (
    <Fragment>
      <HOC />
    </Fragment>
    // <section>
    //   <article>
    //     <Router>
    //       <header>
    //         <NavBar />
    //       </header>
    //       <main>
    //         <Switch>
    //           <Route path="/" exact component={Home} />
    //           <Route path="/about" exact component={Abouts} />
    //           <Route path="/contact" exact component={Contact} />
    //           <Route path="/education" exact component={Education} />
    //           <Route path="*" component={PageNotFound} />
    //         </Switch>
    //       </main>
    //     </Router>
    //   </article>
    // </section>
  );
};

export default App;
