import React from 'react'
import "../css/Carousel.css"

function Carousel() {
  return (
    <div class="content-slider">
    <div class="slider">
      <div class="mask">
        <ul>
          <li class="anim1">
            <div class="quote">That best portion of a man's life, his little, nameless, unremembered acts of kindness and love.</div>
            <div class="source">- William Wordsworth</div>
          </li>
          <li class="anim2">
            <div class="quote">Delete the negative; accentuate the positive!</div>
            <div class="source">- Donna Karan</div>
          </li>
          <li class="anim3">
            <div class="quote">“Figuring out what the next big trend is tells us what we should focus on.”</div>
            <div class="source">- Mark Zuckerburg</div>
          </li>
          <li class="anim4">
            <div class="quote">Life is a work in progress.</div>
            <div class="source">- Jeff Rich</div>
          </li>
          <li class="anim5">
            <div class="quote">One today is worth two tomorrows.</div>
            <div class="source">- Benjamin Franklin</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Carousel