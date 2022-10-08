import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import "./Box.css";
import like from '../Images/like.png';

function TweetCard(props){
    return (
        <div className="grid">
            <Card style={{ width: '18rem' }} className="boxy">
          <Card.Body>
            <Card.Title>{props.tweet.name}</Card.Title>
            <Card.Subtitle>{props.tweet.createdAt}</Card.Subtitle>
            <Card.Text>
              {props.tweet.tweetText}

            </Card.Text>
            {props.tweet.likes}
            <img src={like} height="30px" width="30px"  />
            
          </Card.Body>
        </Card>       
        </div>
        
      );
}

export default TweetCard;