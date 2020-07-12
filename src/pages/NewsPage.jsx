import React, {Component, Fragment} from "react";
import {getListNews, getAllNews} from "../store/actions/newsActions";
import {connect} from "react-redux";
import NewsList from "./NewsList";
import Navigation from "../components/Navigation";

class News extends Component {
    componentDidMount = async () => {
        this.props.getAllNews();
        this.props.getListNews();
    };

    render() {
        return (
            <Fragment>
                <Navigation {...this.props}/>
                <NewsList {...this.props}/>
            </Fragment>
        );
    }

}

const mapDispatchToProps = {getListNews, getAllNews};


export default connect(() => ({}), mapDispatchToProps)(News);