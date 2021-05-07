import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { bindActionCreators } from 'redux';

const Feeling = () => {
    // local state for feelings
    const [feelings, setFeelings] = useState('');
    // init for dispatch
    const dispatch = useDispatch();

    const submitFeeling = () => {
        // dispatch to reducer
        dispatch({
            type: 'ADD_FEELING',
            payload: feelings
        });
        // on click next => next page
        history.push('/understanding');
    }

    return (  
        <form onSubmit={submitFeeling}>

        </form>
    );
}
 
export default Feeling;