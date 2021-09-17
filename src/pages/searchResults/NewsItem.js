// import './NewsItem.css'
// import {Link} from 'react-router-dom'

// const NewsItem = ({newsFound: {webUrl,fields,sectionName,webTitle,id,apiUrl,getArticle,article}}) => {
//         return (
            // <div className='articleFound'>
            //     <img src={fields.thumbnail} alt=''/>
            //     <h4>{sectionName}</h4>
            //     <h3>{webTitle}</h3>
            // </div>
//         )
// }

// export default NewsItem;

import React from 'react'
import '../../ResultsGrid.scss'
import './NewsItem.css'
// REDUX
import { connect } from 'react-redux'
import { loadArticle } from '../../actions'
// LINK
import {Link} from 'react-router-dom'

    const NewsItem = (props) => {

    const {newsFound: {fields,sectionName,sectionId,webTitle,id,apiUrl}, currentItem} = props;

    const selector = apiUrl

    const sendArticleData = (selector) => {
        selector = apiUrl;
        props.loadArticle(selector)
    }

    return (
        <figure onClick={() => sendArticleData(apiUrl)} className='resultsFix'>
            <Link style={{ textDecoration: 'none' }} to='/SingleArticle'>
            <div className='articleFound'>
                <img src={fields.thumbnail} alt=''/>
                <h4>{sectionName}</h4>
                <h3>{webTitle}</h3>
            </div>
            </Link>
        </figure>
    )
}

const mapStateToProps = state => {
    return {
        article: state.article
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadArticle: (apiUrl) => dispatch(loadArticle(apiUrl))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewsItem)

