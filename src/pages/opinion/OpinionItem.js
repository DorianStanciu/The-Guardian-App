import React from 'react'
import '../../ResultsGrid.scss'
// REDUX
import { connect } from 'react-redux'
import { loadArticle } from '../../actions'
import {useSelector, useDispatch} from 'react-redux'
// LINK
import {Link} from 'react-router-dom'

    const OpinionItem = (props) => {

    const {itemFound: {webUrl,fields,sectionName,sectionId,webTitle,id,apiUrl}, currentItem} = props;

    const selector = apiUrl

    const sendArticleData = (selector) => {
        selector = apiUrl;
        console.log(selector)
        props.loadArticle(selector)
    }

    return (
        <figure onClick={() => sendArticleData(apiUrl)} className={`gallery__item gallery__item--${currentItem}`}>
            <Link to='/SingleArticle'>
                <img src={fields.thumbnail} className='gallery__img' alt=''/>
                <h3><h2>{sectionName} / </h2>{webTitle}</h3>
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

export default connect(mapStateToProps,mapDispatchToProps)(OpinionItem)

