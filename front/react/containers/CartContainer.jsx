import React from "react";
import Cart from "../component/Cart";
import { connect } from "react-redux";
import {
  getCartLocalBuyed,
  getCartLocal,
  listItems
} from "../redux/action-creators/action-creators";
import { runInThisContext } from "vm";

class CartContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.listItems();
    const dataCart = this.props.getCartLocal();
    if (!dataCart) {
      this.setState({ emptyCart: true });
    } else {
      this.setState({ dataCart });
    }
  }

  componentDidUpdate(prevProps) {
    const { dataCart } = this.state;
    const localCart = [];
    if (this.props.products != prevProps.products && dataCart) {
      Object.keys(dataCart).forEach(key => {
        let qtyBuyed = dataCart[key];
        this.props.products.forEach(item => {
          if (item._id == key) {
            const priceNumber = item.price.split("$");
            const priceNumbered = Number(priceNumber[1].replace(",", ""));
            const cartObject = { ...item, qtyBuyed, priceNumbered };
            localCart.push(cartObject);
          }
        });
      });
      this.props.getCartLocalBuyed(localCart);
    }
  }

  render() {
    return (
      <div className="fullCart">
        {!this.state.emptyCart ? (
          <Cart
            match={this.props.match.url}
            listItems={this.props.cart.length > 0 ? this.props.cart : []}
            view={this.props.view}
          />
        ) : (
          <div className="emptyCart">
            {"Aun no tiene elementos en su carro de compras"}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.list,
    view: state.page.view,
    cart: state.cart.cart
  };
};
const mapDispatchToProps = dispatch => ({
  listItems: () => dispatch(listItems()),
  getCartLocal: () => getCartLocal(),
  getCartLocalBuyed: cart => dispatch(getCartLocalBuyed(cart))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer);
