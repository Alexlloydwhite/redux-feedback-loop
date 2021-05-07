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
            type: 'SET_FEEDBACK',
            payload: {comments: comment}
        });
        // on click next => next page
        history.push('/review');
    }

    return (
        <div>
            <h2>Any comments you want to leave?</h2>
            <form onSubmit={submit}>
                <input onChange={(event) => setComment(event.target.value)} type="text" placeholder="comments" value={comment} />
                <button>Next</button>
            </form>
        </div>
    );
}

export default Comments;