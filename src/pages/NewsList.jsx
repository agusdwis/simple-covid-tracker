import React, { Fragment } from "react";
import { connect } from "react-redux";
import NewsDetailComp from "../components/NewsDetailComp";


class NewsDetail extends React.Component {

    render() {
        const listNews = this.props.data;
        let filteredNews = listNews.filter((item) => {
            if (item.author !== null && item.title !== null && item.image !== null && item.image !== 'None' && item.description !== null) {
                return item;
            } else {
                return false
            }
        });
        return (
            <Fragment>
                <div className="container mt-5">
                    <div className="row">
                        {filteredNews.slice(0, 10).map((el, index) => (
                            <NewsDetailComp key={index} title={el.title} description={el.description}
                                        author={el.author} publish={el.published} url={el.url}/>
                        ))}
                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.news.listNews
    };
};

export default connect(mapStateToProps)(NewsDetail);