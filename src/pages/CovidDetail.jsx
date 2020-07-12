import React, { Fragment } from "react";
import { connect } from "react-redux";
import { generateCovid } from "../store/actions/covidActions";
import CovidDetailComp from "../components/CovidDetailComp";


class CovidDetail extends React.Component {
    render() {
        return (
            <Fragment>
                <div>
                    <CovidDetailComp
                        country={this.props.data.country}
                        newCase={this.props.new}
                        activeCase={this.props.active}
                        criticalCase={this.props.critical}
                        recoveredCase={this.props.recovered}
                        totalCase={this.props.total}
                        newDeath={this.props.newdeath}
                        totalDeath={this.props.totaldeath}
                        totalTest={this.props.totalcase}

                    />
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.covid.listCovid,
        new: state.covid.new,
        active:state.covid.active,
        critical:state.covid.critical,
        recovered:state.covid.recovered,
        total:state.covid.total,
        newdeath:state.covid.newdeath,
        totaldeath:state.covid.totaldeath,
        totalcase:state.covid.totalcase

    };
};

const mapDispatchToProps = { generateCovid };

export default connect(mapStateToProps, mapDispatchToProps)(CovidDetail);