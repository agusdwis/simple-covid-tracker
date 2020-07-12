import React, { Fragment } from "react";

import ListCountry from "../components/ListCountry";
import { generateCovid } from "../store/actions/covidActions";
import {getListNews} from "../store/actions/newsActions";

import { connect } from "react-redux";
import Navigation from "../components/Navigation";
import CovidDetail from "./CovidDetail";
import Footer from "../components/Footer";
import NewsList from "./NewsList";

class CovidPage extends React.Component {
    componentDidMount = async () => {
        const paramCategory = await this.props.match.params.category;
        this.props.generateCovid(paramCategory);
        this.props.getListNews()
    };

    handleRequestCategory = async (categoryName) => {
        await this.props.history.replace("/covid-news/" + categoryName);
        const paramCategory = this.props.match.params.category;
        this.props.generateCovid(paramCategory);

  };


    render() {
        return (
        <Fragment>
            <Navigation {...this.props} />
            <ListCountry
                handleRouter={(e) => this.handleRequestCategory(e)}
                {...this.props}
            />
            <CovidDetail />
            <NewsList />
            <Footer />
        </Fragment>
    );
  }
}

const mapDispatchToProps = { generateCovid, getListNews };

export default connect(() => ({}), mapDispatchToProps)(CovidPage);
