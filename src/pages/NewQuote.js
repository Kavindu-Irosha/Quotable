import React, { useState } from 'react'
import "../css/NewQuote.css"
import { DB } from '../components/Config'
import { addDoc, collection } from 'firebase/firestore';

function NewQuote() {

  const [quote, setQuote] = useState('');
  const [Author, setAuthor] = useState('');


  const User_Name = localStorage.getItem("UserName");

  const AddQuote = async(e) => {
    e.preventDefault();  
       
        try {
            const QuoteRef = await addDoc(collection(DB, "Quotes"), {
              quote: quote,    
              Author: Author
            });

            const MyQuotes = await addDoc(collection(DB, User_Name), {
              myQuote: quote,
              quoteAuthor: Author
            })
            localStorage.setItem("MyQuotesID", MyQuotes.id);
            localStorage.setItem("QuotesID", QuoteRef.id);
            alert("Your quote has been added successfully");
            console.log("Quote add with ID: ", QuoteRef.id);
          } catch (e) {
            alert("Error adding quote: ", e)
            console.error("Error adding quote: ", e);
          }
  }



  return (
    <div className='NewQuoteMain'>
      <center>
        <h1 className='quoteHead'>New Quote</h1>
        <input 
          className='input_' 
          type='text' 
          placeholder="Write a quote..." 
          value={quote} 
          onChange={(e) => setQuote(e.target.value)}
        /><br/><br/>
        <input 
          className='input_' 
          type='text' 
          placeholder="By whom..." 
          value={Author} 
          onChange={(e) => setAuthor(e.target.value)}
        /><br/>
        <button type="submit" id='up-btn' onClick={AddQuote}>Upload</button>
        </center>
    </div>
  )
}

export default NewQuote
