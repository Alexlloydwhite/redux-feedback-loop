import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const Review = () => {

    const feedback = useSelector(store => store.feedbackReducer);
    const [toggled, setToggled] = useState(true);

    const history = useHistory();
    // submit toggles review screen / sends data to postgres
    const submit = () => {
        setToggled(false);
        // axios http request
        axios.post('/feedback', feedback)
            .then(response => {
                console.log('response from server, feedback post', response);
            })
            .catch(error => {
                console.log('error on post request (FEEDBACK', error);
            })
    }

    const dispatch = useDispatch();

    // dispatch to reset state of feedback
    const restart = () => {
        dispatch({
            type: 'CLEAR_FEEDBACK',
        })
        // takes user to the home page
        history.push('/')
    }

    // conditional rending for feedback / restart screen.
    if (toggled) {
        return (
            <div>
                <h2>Review Your Feedback</h2>
                <p>Feelings: {feedback.feeling}</p>
                <p>Understanding: {feedback.understanding}</p>
                <p>Support: {feedback.support}</p>
                <p>Comments: {feedback.comments}</p>
                <button onClick={submit}>Submit</button>
            </div>
        );
    } else {
        return (
            <div>
                <h2>Thank You!</h2>
                <button onClick={restart}>Submit New Feedback</button>
            </div>
        )
    }

}

export default Review;