import React from "react";
import Header from "../component/Header";
import {
  receiveSearch,
  filtered,
  viewToggler,
  clearLocal
} from "../redux/action-creators/action-creators";
import { connect } from "react-redux";

class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleView = this.handleView.bind(this);
    this.handleSelectionSort = this.handleSelectionSort.bind(this);
  }

  handleSelectionSort(e) {
    this.setState({ value: e.target.value });
  }
  handleView() {
    this.props.viewToggler(!this.props.view);
  }

  handleInputChange(event) {
    const target = event.target.value;
    this.props.receiveSearch(target);
    this.props.filtered(this.props.products, target);
  }

  render() {
    return (
      <Header
        history={this.props.history}
        view={this.props.view}
        handlerView={this.handleView}
        handleInput={this.handleInputChange}
        handleSelect={this.handleSelectionSort}
        clearButton={this.props.clearLocal}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.list,
    search: state.products.input,
    filtered: state.products.filtered,
    view: state.page.view
  };
};
const mapDispatchToProps = dispatch => ({
  receiveSearch: input => dispatch(receiveSearch(input)),
  filtered: (array, input) => dispatch(filtered(array, input)),
  viewToggler: value => dispatch(viewToggler(value)),
  clearLocal: () => dispatch(clearLocal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);
