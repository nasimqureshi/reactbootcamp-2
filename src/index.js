import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';

// Variables 
const books [
{
  img: 'https://img.thriftbooks.com/api/images/s/fedfc44765ea0090f3f942ce3865c097f6b4f578.jpg',
  title:'The Odyssey',
  author: 'Stieg Larson'
}
,
{
  img: 'https://images-na.ssl-images-amazon.com/images/I/51b-OAdpJqL._AC_SX184_.jpg',
  title:'How Toddlers Thrive',
  author: 'Tovah P Klein'
}
,
]

function BookList(){
  return(
    <section className='Booklist'>
    
      </section>
  )
}

const Book = (props) => {
  const { img, title, author } = props;
  return(
    <article className='book'>
      <img src={img} alt ="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {props.children}
    </article>
  );
  };
ReactDOM.render(<BookList />, document.getElementById('root')
);


