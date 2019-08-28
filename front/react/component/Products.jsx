import React from "react";
import { Link } from "react-router-dom";

export default ({ listItems, view, change, toClick, length }) => {
  console.log(length, "iiiiiiiiiiiiiii");
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
            <form className="cartControl">
              <div className="price">{item.name}</div>
              <input
                className="prodQty"
                type="number"
                name={item._id}
                min="1"
                max={item.stock}
                defaultValue="1"
                onChange={e => {
                  e.persist();
                  change(e);
                }}
              />
              <button className="prodSub" onClick={e => toClick(e, item._id)}>
                Add
              </button>
            </form>
          </div>
        ))
      ) : (
        <div> {console.log(listItems, "No se encontraron coincidencias")}</div>
      )}
    </div>
  );
};
