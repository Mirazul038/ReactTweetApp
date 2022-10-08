import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import "./Box.css";
import like from '../Images/like.png';
import comment from '../Images/comment.png';
import { useEffect, useState } from "react";
import { Form, Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import { createapi } from '../Api/Api';
import PostReply from './PostReply';
import { useNavigate, Link } from 'react-router-dom'
import ReplyCard from './ReplyCard';

function ReplyCard1({replies}){

    return (
        <div className="grid">
            <Card style={{ width: '18rem' }} className="boxy">
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Subtitle></Card.Subtitle>
            <Card.Text>
              {replies}

            </Card.Text>
            
          </Card.Body>
        </Card>       
        </div>
        
      );
}

export default ReplyCard1;