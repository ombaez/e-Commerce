import React from "react";
import SingleProduct from "../component/SingleProduct";
import { connect } from "react-redux";
import { listItems, addToCart } from "../redux/action-creators/action-creators";

class SingleProductContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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

  render() {
    const checkItem =
      this.props.products &&
      this.props.products.filter(
        item => item._id == this.props.match.params.id
      );
    return (
      <SingleProduct
        history={this.props.history}
        change={this.handleInputChange}
        toClick={this.handleSubmit}
        check={checkItem}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.list
  };
};
const mapDispatchToProps = dispatch => ({
  listItems: () => dispatch(listItems()),
  addToCart: prod => addToCart(prod)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProductContainer);
