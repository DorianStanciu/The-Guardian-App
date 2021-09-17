import React from 'react'
import './Alert.css'

const Alert = ({ alert }) => {
    return (
        alert !== null && (
            <div className={`alert alert-light`}>
                <i className='fas fa-info-circle' /> Please Enter Text
            </div>
        )
    )
}

export default Alert
