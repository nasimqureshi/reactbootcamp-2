import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';

// Variables 
const title ='The Odyssey';
const author ='Stieg Larson';
const img =
'https://img.thriftbooks.com/api/images/s/fedfc44765ea0090f3f942ce3865c097f6b4f578.jpg';

function BookList(){
  
  return(
    <section className='list'>
      <Book />
      </section>
  )
}

const Book = (props) => {
  return(
    <article className='book'>
      <img src={img} alt ="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
  };





ReactDOM.render(<BookList />, document.getElementById('root')
);


