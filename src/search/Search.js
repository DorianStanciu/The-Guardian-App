import React, { useState } from 'react'
import './Search.css'
// LINK
import {Link} from 'react-router-dom'
// REDUX
import { connect } from 'react-redux'
import { loadResults } from '../actions'

const Search = (props) => {
    const [text, setText] = useState('');

const onChange = e => setText(e.target.value);

const {setAlert} = props;

const selector = text

const loadResultsData = e => {
    if(text === '') {
        setAlert('Please enter text', 'light');
    }else{
        props.loadResults(selector);
        setText('');
    }
}

const failSearch = e => {
    setAlert('please enter text')
    console.log('failSearch')
}

        if(text === '') {
            return (
                <div>
                <form className='form'>
                    <input 
                    className='searchBar' 
                    type='text' name='text' 
                    placeholder='Search the Guardian...' 
                    value={text} 
                    onChange={onChange}
                    />
                    <figure onClick={() => failSearch()}>
                        <input className='searchSubmit' type='submit' value='Search'></input>
                    </figure>
                </form>
            </div>
            )
        }
        else if(text !== '') {
        return (
            <div>
                <form className='form'>
                    <input 
                    className='searchBar' 
                    type='text' name='text' 
                    placeholder='Search the Guardian...' 
                    value={text} 
                    onChange={onChange}
                    />
                    <figure onClick={() => loadResultsData(text)}>
                        <Link to='/SearchResults'><input className='searchSubmit' type='submit' value='Search'></input></Link>
                    </figure>
                </form>
            </div>
        )
        }
}

const mapStateToProps = state => {
    return {
        results: state.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadResults: (text) => dispatch(loadResults(text))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Search)

