import React from "react";
import "./FooterSearch.scss";

const FooterSearch = () => {
  return (
    <footer className="footer">
      <div className="footerHome">
        <span className="material-symbols-outlined footerHome__iconHome">
          import_contacts
        </span>
        <p>Home</p>
      </div>
      <div className="footerCart">
        <span className="material-symbols-outlined footerCart__iconCart">
          shopping_basket
        </span>
      </div>
      <div className="footerSearch">
        <span className="material-symbols-outlined footerSearch__iconSearch">
          search
        </span>
        <p>Buscar</p>
      </div>
    </footer>
  );
};

export default FooterSearch;
