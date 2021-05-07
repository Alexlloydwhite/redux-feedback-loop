import { useHistory } from 'react-router-dom';

const Home = () => {
    // history allows us to browse pages
    const history = useHistory();
    // click handle to go to next page
    const nextPage = () => {
        history.push('/feeling');
    }
    
    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={nextPage}>Begin Feedback</button>
        </div>
    );
}

export default Home;