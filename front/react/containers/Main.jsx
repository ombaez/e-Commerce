import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SingleProductContainer from "./SingleProductContainer";
import HeaderContainer from "./HeaderContainer";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="mainView">
        <Route
          render={({ history }) => <HeaderContainer history={history} />}
        />
        <Switch>
          <Route exact path={"/"} component={ProductsContainer} />
          <Route
            exact
            path={"/product/:id"}
            render={({ match, history }) => (
              <SingleProductContainer history={history} match={match} />
            )}
          />
          <Route
            exact
            path={"/cart"}
            render={({ match }) => <CartContainer match={match} />}
          />
          ;
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
