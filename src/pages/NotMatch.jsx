import React from "react";
import Navigation from "../components/Navigation";
import {Link} from "react-router-dom";

const NotMatch = (props) => {
    
    return (
        <React.Fragment>
            <Navigation {...props} />
                <div id="notfound">
                    <div className="notfound">
                        <div className="notfound-404">
                            <h1>404</h1>
                            <h2>Page not found!</h2>
                        </div>
                        <Link to="/">Homepage</Link>
                    </div>
                </div>
        </React.Fragment>
    );
};

export default NotMatch;