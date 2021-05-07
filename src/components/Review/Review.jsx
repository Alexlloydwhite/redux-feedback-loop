import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Review = () => {

    const feedback = useSelector(store => store.feedbackReducer);
    const [toggled, setToggled] = useState(true);

    const history = useHistory();
    const submit = () => {
        setToggled(false);
    }

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
                <button onClick={() => history.push('/')}>Submit New Feedback</button>
            </div>
        )
    }

}

export default Review;