import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Support = () => {
    // local state for support
    const [supports, setSupports] = useState('');
    // init for dispatch
    const dispatch = useDispatch();

    const history = useHistory();

    const submit = () => {
        // dispatch to reducer
        dispatch({
            type: 'SET_SUPPORT',
            payload: supports
        });
        // on click next => next page
        history.push('/comments');
    }

    return (
        <div>
            <h2>How Well Are You Understanding The Content?</h2>
            <form onSubmit={submit}>
                <input onChange={(event) => setSupports(event.target.value)} type="text" placeholder="Support?" value={supports} />
                <button>Next</button>
            </form>
        </div>
    );
}

export default Support;