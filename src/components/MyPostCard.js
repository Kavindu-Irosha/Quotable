import React from 'react'
import '../css/PostCard.css'
import { addDoc, collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { DB } from '../components/Config'

function MyPostCard(props) {

  const userName = localStorage.getItem("UserName");
  const MyQuoteDocID = localStorage.getItem("MyQuotesID");
  const DocID = localStorage.getItem("QuotesID");

  const DeleteMyQuote = async => {
    deleteDoc(doc(DB, userName, MyQuoteDocID));
    DeleteMainQuote();
  }

  const DeleteMainQuote = async => {
    deleteDoc(doc(DB, "Quotes", DocID));
  }
  
  return (
    <>
        <p className='Space'></p>
        <div className='Card'>
            <h2 className='quote'>{props.quote}</h2>
            <h3 className='author'>- {props.author} -</h3>
            <div className="delete">
              <button onClick={DeleteMyQuote} className="del_btn">Delete</button>
            </div>
        </div>
    </>
    
  )
}

export default MyPostCard