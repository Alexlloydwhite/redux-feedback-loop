import {useSelector, useDispatch} from 'react-redux';

const Review = () => {
    
    const feedback = useSelector(store => feedbackReducer)
    
    return (  
        <div>
            <h2>Review Your Feedback</h2>
            <ul>
        
            </ul>
        </div>
    );
}
 
export default Review;