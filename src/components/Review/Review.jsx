import { useSelector } from 'react-redux';
import axios from 'axios';

const Review = () => {

    const feedback = useSelector(store => store.feedbackReducer);

    const submit = () => {
        axios({
            method: 'POST',
            url: ''
        })
    }

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
}
 
export default Review;