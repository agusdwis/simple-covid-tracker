import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const ListCountry = (props, changeRouter) => {
  changeRouter = async (category) => {
    if (props.handleRouter) {
      props.handleRouter(category);
    } else {
      props.history.replace("/covid-news/" + category);
    }
  };
  return (
    <Fragment>
      <div className="list-country my-2">
        <div className="container">
          <div className="row row-cols-3">
            <div className="col-lg-1">
              <Link
                onClick={() => changeRouter("laos")}
                className="nav-link nav-country"
                to="#"
              >
                Laos
              </Link>
            </div>
            <div className="col-lg-1">
              <Link
                onClick={() => changeRouter("brunei")}
                className="nav-link nav-country"
                to="#"
              >
                Brunei
              </Link>
            </div>
            <div className="col-lg-1">
              <Link
                onClick={() => changeRouter("cambodia")}
                className="nav-link nav-country"
                to="#"
              >
                Kamboja
              </Link>
            </div>
            <div className="col-lg-1">
              <Link
                onClick={() => changeRouter("indonesia")}
                className="nav-link nav-country"
                to="#"
              >
                Indonesia
              </Link>
            </div>
            <div className="col-lg-1">
              <Link
                onClick={() => changeRouter("malaysia")}
                className="nav-link nav-country"
                to="#"
              >
                Malaysia
              </Link>
            </div>
            <div className="col-lg-1">
              <Link
                onClick={() => changeRouter("myanmar")}
                className="nav-link nav-country"
                to="#"
              >
                Myanmar
              </Link>
            </div>
            <div className="col-lg-1">
              <Link
                onClick={() => changeRouter("philippines")}
                className="nav-link nav-country"
                to="#"
              >
                Filipina
              </Link>
            </div>
            <div className="col-lg-1">
              <Link
                onClick={() => changeRouter("thailand")}
                className="nav-link nav-country"
                to="#"
              >
                Thailand
              </Link>
            </div>
            <div className="col-lg-1">
              <Link
                onClick={() => changeRouter("vietnam")}
                className="nav-link nav-country"
                to="#"
              >
                Vietnam
              </Link>
            </div>
            <div className="col-lg-1">
              <Link
                onClick={() => changeRouter("singapore")}
                className="nav-link nav-country"
                to="#"
              >
                Singapore
              </Link>
            </div>

            <div className="col-lg-2">
              <Link
                onClick={() => changeRouter("timor-leste")}
                className="nav-link nav-country"
                to="#"
              >
                Timor Leste
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ListCountry;
