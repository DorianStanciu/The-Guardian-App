import React, { Component } from 'react'
import './SingleArticle.css'
// REDUX
import { connect } from 'react-redux'
import { loadArticle } from '../../actions'
import Spinner from '../../Spinner'

class SingleArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            render: false
        }
    }
    componentDidMount() {
        setTimeout(function() { //Start the timer
            this.setState({render: true}) //After 1 second, set render to true
        }.bind(this), 500)
    }
    render() {
        // this.props.article.singleArticleData.reponse.content.sectionName
        const articleData = this.props.article.singleArticleData;

        // stackoverflow
        let renderContainer = false;
        if(!this.state.render) {
            return (
                renderContainer = <div className='singleArticle'><Spinner /></div>
            )
        }else{
        return(
            <div className='singleArticle'>
            <div className='articleHeader'>
            <div className='articleHeaderLeft'>
            <img src={articleData.response.content.fields.thumbnail} alt=''/>
            </div>
            <div className='articleHeaderRight'>
                <h4>{articleData.response.content.sectionName}</h4>
                <h2>{articleData.response.content.webTitle}</h2>
            </div>
            </div>
            <div className='articleContent'>
                <p>{articleData.response.content.blocks.body[0].bodyTextSummary}</p>
            </div>
        </div>
        )
        }
    }
}

const mapStateToProps = state => ({
    article: state.article
})

const mapDispatchToProps = dispatch => {
    return {
        loadArticle: (apiUrl) => dispatch(loadArticle(apiUrl))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SingleArticle)
