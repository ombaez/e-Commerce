import React from "react";

export default ({ check, change, toClick, history }) => {
  return (
    <div className="singleProductContainer">
      {check.length > 0 ? (
        <div className="singleProduct">
          <div className="singleProdImg">
            <img src={check[0].picture} alt="" />
          </div>
          <div className="singleProdData">
            <h1 className="singleProdPrice">{check[0].price}</h1>
            <p className="singleProdText1">{check[0].description}</p>
            <p className="singleProdText2">{check[0].description}</p>
            <p className="singleProdAdress">{check[0].address}</p>
            <p className="singleProdId">{`Product Id : ${check[0]._id}`}</p>
            <div className="singleProdControl">
              <input
                className="singleProdQty"
                type="number"
                name={check[0]._id}
                min="1"
                max={check[0].stock}
                defaultValue="1"
                onChange={e => {
                  e.persist();
                  change(e);
                }}
              />
              <button
                className="singleProdButton"
                onClick={e => toClick(e, check[0]._id)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
