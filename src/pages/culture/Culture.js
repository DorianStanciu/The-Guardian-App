import React, { Fragment, useState, useEffect } from 'react'
import Spinner from '../../Spinner'
import CultureItem from './CultureItem'
import '../../ResultsGrid.scss'
import axios from 'axios'

const Culture = () => {

    // api key
    let guardianApiKey;

    if(process.env.NODE_ENV !== 'production') {
        guardianApiKey = process.env.REACT_APP_API_KEY;
    }else{
        guardianApiKey = '9fbba8b7-5ca0-45a7-90de-68af76812ba5';
    }

    const [loading, setLoading] = useState(true)
    const [pageData, setData] = useState([])

        const getData = async () => {
            const apiBaseURL = 'https://content.guardianapis.com';
            const res = await axios.get(`${apiBaseURL}/culture?&show-fields=thumbnail&api-key=${guardianApiKey}`);
            setData(res.data.response.results)
        }

        const switchLoading = () => {
            setLoading(false)
        }
        
        useEffect(() => {
            switchLoading()
            getData()
        }, [])

    return (
    <div>
        {loading ? <Spinner /> :
                <Fragment>
                <div className='gallery'>
                {pageData.map((itemFound, i) => (
                    <CultureItem 
                    key={i} 
                    itemFound={itemFound} 
                    currentItem={i+1} 
                    />
                    ))}
                </div>
            </Fragment>}
    </div>
    )
}

export default Culture

