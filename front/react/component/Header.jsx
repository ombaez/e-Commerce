import React from "react";
import {
  TiThMenuOutline /*lista desactivada*/,
  TiThMenu /*lista activada */,
  TiThSmallOutline /*grilla desactivada */,
  TiThSmall /*grilla activada */,
  TiShoppingCart
} from "react-icons/ti";
import { Link, Route } from "react-router-dom";
import PaginatorContainer from "../containers/PaginatorContainer";

const Title = "e-Commerce";

export default ({
  handleInput,
  handleSelect,
  view,
  handlerView,
  history,
  clearButton
}) => {
  return (
    <div className="headerContainer">
      <div className="mainTitleContainer">
        <Link to="/">
          <div className="mainTitle">{Title}</div>
        </Link>
        <div className="cartIcon">
          <Link to="/cart">
            <TiShoppingCart />
          </Link>
        </div>
      </div>
      <div className="dataBar">
        {history.location.pathname == "/cart" ||
        history.location.pathname.length > 25 ? null : (
          <input
            id="searchInput"
            name="search"
            onChange={e => {
              handleInput(e);
            }}
          />
        )}
        <div className="sortTitle">{"Ordenar por"}</div>
        <div style={{ float: "left" }}>
          <select
            className="sort"
            onChange={e => handleSelect(e)}
            name="select"
          >
            <option defaultValue="relevants">Mas relevantes</option>
            <option value="cheap">Menor precio</option>
            <option value="expensive">Mayor precio</option>
          </select>
        </div>
        {view ? (
          <div className="viewIcons">
            <div style={{ float: "right" }} onClick={handlerView}>
              <TiThMenu />
            </div>
            <div style={{ float: "right" }} onClick={handlerView}>
              <TiThSmallOutline />
            </div>
          </div>
        ) : (
          <div className="viewIcons">
            <div style={{ float: "right" }} onClick={handlerView}>
              <TiThMenuOutline />
            </div>

            <div style={{ float: "right" }} onClick={handlerView}>
              <TiThSmall />
            </div>
          </div>
        )}
        {history.location.pathname == "/cart" ||
        history.location.pathname.length > 25 ? (
          <button
            onClick={() => {
              clearButton();
              history.push("/");
            }}
            className="clearCart"
          >
            Clear Cart
          </button>
        ) : (
          <div style={{ float: "right" }}>
            <Route
              render={({ history }) => <PaginatorContainer history={history} />}
            />
          </div>
        )}
      </div>
    </div>
  );
};
