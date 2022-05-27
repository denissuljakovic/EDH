import { useState, useEffect } from 'react';
import PostList from '../components/ediary/PostList';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import "./EDiary.css";
import bck from './bck.jpg';

function EDiary() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
        'https://seproject-48a28-default-rtdb.firebaseio.com//post.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const all = [];

        for (const key in data) {
          const single = {
            id: key,
            ...data[key]
          };

          all.push(single);
        }

        setIsLoading(false);
        setIsLoaded(all);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
  <div className="sve"> 
    <img src={bck} style={{position:"absolute", width:"100%", height:"750px", opacity:"0.8", display:"flex", top:"0cm", objectFit:"cover", autoPlay:"true"}}>
      
      </img> 
  <div className="sekcija" style={{zIndex:"10", position:"relative", display:"flex"}}> 
   <div>  <div style={{marginLeft:"6cm", marginTop:"0cm"}}>
   <label htmlFor='text' ><h4 style={{padding:"30px"}}><i>eDiary </i></h4></label>
   <Link to='/post' style={{marginLeft:"220px"}}> <Button className="dugme">
   Add New Entry
  </Button></Link>
      </div>
      
      
      <PostList all={isLoaded} />
    </div></div> </div> 
  );
}


export default EDiary;
