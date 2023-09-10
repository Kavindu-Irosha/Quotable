import React, { useEffect, useState } from 'react'
import "../css/Home.css"
import Carousel from '../components/Carousel'
import { DB } from '../components/Config'
import { collection, getDocs } from 'firebase/firestore';
import PostCard from '../components/PostCard';

function Home() {

  //let user_name = localStorage.getItem("UserName")
  const [Posts, setPosts] = useState([]);
  const [QuoteAuthors, setQuoteAuthors] = useState([]);
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchPost = async () => {
       
    await getDocs(collection(DB, "Quotes"))
        .then((querySnapshot) => {              
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
            setPosts(newData);
            console.log(Posts, newData);
        })
   
}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchUser = async () => {
       
    await getDocs(collection(DB, "Quotes"))
        .then((querySnapshot) => {              
            const NewAuthor = querySnapshot.docs
                .map((author) => ({...author.data(), id:author.id }));
            setQuoteAuthors(NewAuthor);
            console.log(QuoteAuthors, NewAuthor);
        })
   
}

useEffect(() => {
    fetchPost();
    fetchUser();
}, [fetchPost, fetchUser])

  return (
    <div className="home_">
      <center>
      <Carousel/>
      <div className='db-data'>
        <h3>
          {
            Posts?.map((quote, i) => (
              <>
                <p key={i}>
                  <PostCard quote={quote.quote} author={quote.Author}/>
                </p>
              </>
            ))
          }          
        </h3>
      </div>
      </center>
    </div>
  )
}

export default Home