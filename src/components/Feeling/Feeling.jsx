import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux';

const Feeling = () => {
    // local state for feelings
    const [feelings, setFeelings] = useState('');
    // init for dispatch
    const dispatch = useDispatch();

    const history = useHistory();

    const submitFeeling = () => {
        // dispatch to reducer
        dispatch({
            type: 'SET_FEELING',
            payload: feelings
        });
        // on click next => next page
        history.push('/understanding');
    }

    return (  
        <form onSubmit={submitFeeling}>
            <input onChange={(event) => setFeelings(event.target.value)} type="text" placeholder="Feeling" value={feelings} />
            <button>Next</button>
        </form>
    );
}
 
export default Feeling;