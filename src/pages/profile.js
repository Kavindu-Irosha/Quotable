import React, { useState, useEffect } from 'react'
import { storage } from '../components/Config'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import "../css/Profile.css"
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { DB } from '../components/Config'
import MyPostCard from '../components/MyPostCard';


function Profile() {

  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [Posts, setPosts] = useState([]);

  const handleImageChange = (e) => {
    if(e.target.files[0]) {
      setImage(e.target.files[0])
    }
  };

  const handleImageSubmit = (e) => {
    if(!image) {
      alert("Upload a image")
    }
    const Avatar = ref(storage, 'Avatars');
    uploadBytes(Avatar, image).then(() => {
      getDownloadURL(Avatar).then((imageUrl) => {
        setImageUrl(imageUrl)
        localStorage.setItem("avatarUrl", imageUrl)
      }).catch((error) => {
        console.log(error.message, "error getting the image url")
      })
      setImage(null)
    }).catch((error) => {
      console.log(error.message)
    })
  }

  const GetAvatar = localStorage.getItem("avatarUrl");
  const user = localStorage.getItem("UserName");

  const fetchPost = async () => {
       
  await getDocs(collection(DB, user))
        .then((querySnapshot) => {              
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
            setPosts(newData);
            console.log(Posts, newData);
        })
   
  }

  useEffect(() => {
    fetchPost()
  }, [fetchPost])

  return (
    <div className='profile'>
      <center>
        <img src={GetAvatar} alt="avatar" className='avatar' />
      </center>
      <div className="upload">
        <input type="file" onChange={handleImageChange}/>
        <button type="submit" onClick={handleImageSubmit}>Upload avatar</button>
      </div>
      <center>
        <h1 className="username">Username: {user}</h1>
      </center>
      <hr className="The_Line"/>
      <center>
        <div className="my_quotes">
          <h1 className="quote_head">
            My Quotes
          </h1>
        </div>
        <div className='db-data'>
        <h3>
          {
            Posts?.map((quote, i) => (
              <>
                <p key={i}>
                  <MyPostCard quote={quote.myQuote} author={quote.quoteAuthor}/>
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

export default Profile