import React from "react";
import { Link } from "react-router-dom";

export default ({ listItems, view }) => {
  return (
    <div className={!view ? "prodContainer" : "prodContainerList"}>
      {listItems ? (
        listItems.map(item => (
          <div
            key={item.index}
            id={`products${item.index + 1}`}
            className="product"
          >
            <Link to={`/product/${item._id}`}>
              <img className="prodImg" src={item.picture} />
            </Link>
            <div className="price">{`${item.qtyBuyed} UN $${(
              item.qtyBuyed * item.priceNumbered
            ).toFixed(2)} `}</div>
            <button className="prodBut" onClick={e => toClick(e, item._id)}>
              Finish your buy!
            </button>
          </div>
        ))
      ) : (
        <div className="emptyCart">
          {"Se ha vaciado el carrito de compras!"}
        </div>
      )}
    </div>
  );
};
