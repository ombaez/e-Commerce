import React from "react";
import Paginator from "../component/Paginator";
import { connect } from "react-redux";
import { slicer } from "../redux/action-creators/action-creators";

class PaginatorContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { products, filteredArray, slicer, search } = this.props;
    this.setState({
      currentPage: Number(event.target.id)
    });
    !search
      ? slicer(products, Number(6), Number(event.target.id))
      : slicer(filteredArray, Number(6), Number(event.target.id));
  }

  render() {
    return (
      <Paginator
        handleClick={this.handleClick}
        result={
          !this.props.searchLength
            ? this.props.products.length
            : this.props.searchLength
        }
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.list,
    search: state.products.input,
    filteredArray: state.products.filtered,
    searchLength: state.page.length,
    cart: state.cart.cart
  };
};
const mapDispatchToProps = dispatch => ({
  receiveSearch: input => dispatch(receiveSearch(input)),
  filtered: (array, input) => dispatch(filtered(array, input)),
  slicer: (array, itemsPerPage, currentPage) =>
    dispatch(slicer(array, itemsPerPage, currentPage))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginatorContainer);
