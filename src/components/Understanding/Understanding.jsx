import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Understanding = () => {
    // local state for understanding
    const [understand, setUnderstand] = useState('');
    // init for dispatch
    const dispatch = useDispatch();

    const history = useHistory();

    const submit = () => {
        if (understand !== '') {
            // dispatch to reducer
            dispatch({
                type: 'SET_UNDERSTANDING',
                payload: understand
            });
            // on click next => next page
            history.push('/support');
        }
        if (understand === '') {
            alert('this field is required')
        }
    }

    return (
        <div>
            <h2>How Well are you understanding the content?</h2>
            <form onSubmit={submit}>
                <input onChange={(event) => setUnderstand(event.target.value)} type="text" placeholder="Understanding?" value={understand} />
                <button>Next</button>
            </form>
        </div>
    );
}

export default Understanding;