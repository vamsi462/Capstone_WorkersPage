import React, { Component } from "react";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import ActiveWorks from "./components/ActiveWorks";
import OngoingWorks from "./components/OngoingWorks";
import data from "./Data";
import Context from "./Context";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: {},
      tasks: []
    };

    this.routerRef = React.createRef();
  }

  addWork = cartItem => {
    let cart = this.state.cart;
    if (cart[cartItem.id]) {
      cart[cartItem.id].amount += cartItem.amount;
    } else {
      cart[cartItem.id] = cartItem;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    this.setState({ cart });
  };

  removeWork = cartItemId => {
    let cart = this.state.cart;
    delete cart[cartItemId];
    localStorage.setItem("cart", JSON.stringify(cart));
    this.setState({ cart });
  };

  clearWorks = () => {
    let cart = {};
    localStorage.setItem("cart", JSON.stringify(cart));
    this.setState({ cart });
  };

  componentDidMount() {
    let tasks = localStorage.getItem("tasks");
    let cart = localStorage.getItem("cart");
    tasks = tasks ? JSON.parse(tasks) : data.Works;
    cart = cart ? JSON.parse(cart) : {};
    this.setState({ tasks,  cart });
  }

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          removeWork: this.removeWork,
          addWork: this.addWork,
          clearWorks: this.clearWorks,
        }}
      >
        <Router ref={this.routerRef}>
          <div className="App ">
            <nav
              className="navbar is-link "
              role="navigation"
              aria-label="main navigation"
            >
              <div className="navbar-brand ">
                <b className="navbar-item is-size-4  ">Work Finder</b>

                <a
                  href="/"
                  role="button"
                  className="navbar-burger burger"
                  aria-label="menu"
                  aria-expanded="false"
                  data-target="navbarBasicExample"
                  onClick={e => {
                    e.preventDefault();
                    this.setState({ showMenu: !this.state.showMenu });
                  }}
                >
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
              </div>
              <div
                className={`navbar-menu  ${
                  this.state.showMenu ? "is-active" : ""
                }`}
              >
                <Link to="/active-works" className="navbar-item navbar-end has-text-weight-bold">
                 Active Works
                </Link>
                <Link to="/ongoing-works" className="navbar-item has-text-weight-bold  ">
                  Ongoing Works
                  <span
                    className="tag is-link"
                    style={{ marginLeft: "5px" }}
                  >
                    {Object.keys(this.state.cart).length}
                  </span>
                </Link>
                <span className="navbar-item">
                <i class="far fa-user-circle fas fa-2x"></i>
                </span>
              </div>
            </nav>

            <Switch>
              <Route exact path="/" component={ActiveWorks} />
              <Route exact path="/ongoing-works" component={OngoingWorks} />
              <Route exact path="/active-works" component={ActiveWorks} />
            </Switch>
          </div>
        </Router>
      </Context.Provider>
    );
  }
}
