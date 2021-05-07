import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux';

const Understanding = () => {
    // local state for understanding
    const [understand, setUnderstand] = useState('');
    // init for dispatch
    const dispatch = useDispatch();

    const history = useHistory();

    const submit = () => {
        // dispatch to reducer
        dispatch({
            type: 'SET_UNDERSTANDING',
            payload: understand
        });
        // on click next => next page
        history.push('/support');
    }

    return (  
        <form onSubmit={submit}>
            <input onChange={(event) => setUnderstand(event.target.value)} type="text" placeholder="Understanding?" value={understand} />
            <button>Next</button>
        </form>
    );
}
 
export default Understanding;