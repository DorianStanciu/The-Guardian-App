import React, {Component} from 'react'
import Spinner from '../../Spinner';
import './News.css';
import NewsItem from './NewsItem';
// REDUX
import { connect } from 'react-redux'
import { loadResults } from '../../actions'

class SearchResults extends Component {
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
        const resultsData = this.props.results.resultsData;

        // stackoverflow
        let renderContainer = false;
        if(!this.state.render) {
            return (
                renderContainer = <div className=''><Spinner /></div>
            )
        }else{
        return(
            <div>
                <div className='newsSearchGrid'>
                {resultsData.response.results.map(newsFound => (
                    <NewsItem key={newsFound.id} newsFound={newsFound}/>
                 ))}
             </div>
            </div>
        )
        }
    }
}

const mapStateToProps = state => ({
    results: state.results
})

const mapDispatchToProps = dispatch => {
    return {
        loadResults: (apiUrl) => dispatch(loadResults())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)


