
import './App.css';
import ReactTomatoes from './components/ReactTomatoes';
import { useState } from 'react';

function App() {
  const [likeCount, setLikeCount] = useState(0)
  const [review, setReview] = useState('write a review here')
  const [post, setPosts] = useState([])


  const increaseLikes = () => {
    setLikeCount(prevState => prevState + 1)
    console.log(likeCount + 1)
  }
  const decreaseLikes = () => {
    if(likeCount > 0){
      setLikeCount(prevState => prevState  - 1)
      console.log(likeCount - 1)
    }
  }

  const reviewHandler = (e) =>{
    setReview(e.target.value)
  }

  const postHandler = (e) =>{
    e.preventDefault()
    setPosts(review)
  }
  return (
    <div className="App">
      <form onSubmit={postHandler}>
      <div className='container'>
        <div className='intro'>
          <h1 className="headline">React Tomatoes</h1>
          <h3 className="headline">Rate films:</h3>
        </div>

        <div>

          <h4 id="title">Harry Potter</h4>

          <div id='count'>
            <p> Harry Potter has {likeCount} like(s)</p>
            <button onClick={increaseLikes}>Like</button>
            <button onClick={decreaseLikes}>Dislike</button>
          </div>

          <div id='review' className="headline">
            <textarea
            cols={30}
            rows={10}
            onChange= {reviewHandler}></textarea>
            <p>{review}</p>
            <input type="submit" value="Post"></input>
          </div>

          <div className='dashboard headline'>
            <h3>Dashboard:</h3>
            <p>{post}</p>
          </div>
        </div>
        <ReactTomatoes />
      </div>
      </form>
    </div>
  );
}

export default App;
