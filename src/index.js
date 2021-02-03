import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';

// Variables 
const firstBook ={
  img: 'https://img.thriftbooks.com/api/images/s/fedfc44765ea0090f3f942ce3865c097f6b4f578.jpg',
  title:'The Odyssey',
  author: 'Stieg Larson'
}

function BookList(){
  return(
    <section className='list'>
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author} />
      </section>
  )
}

const Book = (props) => {
  return(
    <article className='book'>
      <img src={props.img} alt ="" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
  };
ReactDOM.render(<BookList />, document.getElementById('root')
);


