import React from "react";
import Products from "../component/Products";
import { connect } from "react-redux";
import {
  listItems,
  slicer,
  addToCart,
  getCartLocal
} from "../redux/action-creators/action-creators";

class ProductsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsPerPage: 6
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e, data) {
    e.preventDefault();
    var id = data;
    const prod = { [id]: Number(this.state[data]) };
    if (prod[id]) {
      this.props.addToCart(prod);
    } else {
      prod[id] = 1;
      this.props.addToCart(prod);
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  componentDidMount() {
    this.props.listItems();
  }

  componentDidUpdate(prevProps) {
    const { products, filtered, slicer, currentPage } = this.props;

    products != prevProps.products &&
      slicer(products, this.state.itemsPerPage, currentPage);

    filtered != prevProps.filtered &&
      slicer(filtered, this.state.itemsPerPage, currentPage);
  }

  render() {
    return (
      <Products
        view={this.props.view}
        change={this.handleInputChange}
        listItems={this.props.paginated}
        toClick={this.handleSubmit}
        length={this.props.filtered.length}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.list,
    search: state.products.search,
    filtered: state.products.filtered,
    paginated: state.page.paginated,
    currentPage: state.page.currentPage,
    view: state.page.view
  };
};
const mapDispatchToProps = dispatch => ({
  listItems: () => dispatch(listItems()),
  slicer: (array, itemsPerPage, currentPage) =>
    dispatch(slicer(array, itemsPerPage, currentPage)),
  addToCart: prod => addToCart(prod),
  getCartLocal: () => dispatch(getCartLocal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsContainer);
