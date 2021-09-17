import React, {Fragment} from 'react'
import spinner from './spinner.gif';

const Spinner = () => {
    return (
        <Fragment>
            <div style={{height: '70vh'}}>
            <img src={spinner} alt='Loading...' style={{ width: '200px', margin: 'auto', display: 'block' }} />
            </div>
        </Fragment>
    )
}

export default Spinner;