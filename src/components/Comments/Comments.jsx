import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Comments = () => {
    // local state for support
    const [comment, setComment] = useState('');
    // init for dispatch
    const dispatch = useDispatch();

    const history = useHistory();

    const submit = () => {
        // dispatch to reducer
        dispatch({
            type: 'SET_COMMENT',
            payload: comment
        });
        // on click next => next page
        history.push('/comments');
    }

    return (
        <div>
            <h2>How well are you being supported?</h2>
            <form onSubmit={submit}>
                <input onChange={(event) => setSupports(event.target.value)} type="text" placeholder="Support?" value={supports} />
                <button>Next</button>
            </form>
        </div>
    );
}

export default Comments;