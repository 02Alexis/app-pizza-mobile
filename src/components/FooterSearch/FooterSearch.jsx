import React, { useContext } from "react";
import "./FooterSearch.scss";
import { useNavigate } from "react-router-dom";
import { searchParamsContext } from "../../Routes/AppRoutes";

const FooterSearch = () => {
  const { user } = useContext(searchParamsContext);

  let userSearch = {};
  if (user && Object.keys(user).length > 0) {
    userSearch = user;
  } else {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      userSearch = JSON.parse(storedUser);
    }
  }

  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate(`/Home/${userSearch.userName}`);
  };

  const handleSearchClick = () => {
    navigate("/search");
  };

  const handleCartClick = () => {
    navigate("/ShoppingCart");
  };

  return (
    <footer className="footer">
      <div className="footerHome" onClick={handleHomeClick}>
        <span
          className="material-symbols-outlined footerHome__iconHome"
          onClick={handleHomeClick}
        >
          import_contacts
        </span>
        <p onClick={handleHomeClick}>Home</p>
      </div>
      <div className="footerCart" onClick={handleCartClick}>
        <span
          className="material-symbols-outlined footerCart__iconCart"
          onClick={handleCartClick}
        >
          shopping_basket
        </span>
      </div>
      <div className="footerSearch" onClick={handleSearchClick}>
        <span
          className="material-symbols-outlined footerSearch__iconSearch"
          onClick={handleSearchClick}
        >
          search
        </span>
        <p onClick={handleSearchClick}>Buscar</p>
      </div>
    </footer>
  );
};

export default FooterSearch;
