import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';

// Variables 
const firstBook ={
  img: 'https://img.thriftbooks.com/api/images/s/fedfc44765ea0090f3f942ce3865c097f6b4f578.jpg',
  title:'The Odyssey',
  author: 'Stieg Larson'
}
const secondBook ={
  img: 'https://images-na.ssl-images-amazon.com/images/I/51b-OAdpJqL._AC_SX184_.jpg',
  title:'How Toddlers Thrive',
  author: 'Tovah P Klein'
}


function BookList(){
  return(
    <section className='booklist'>
    <Book
      img={firstBook.img} 
      title={firstBook.title}
      author={firstBook.author} 
      >
      <p>Excellent course for beginners. The course material is neat & crisp with adequate examples to support the concepts.
       The final exercises are designed in such a way to put every concept learnt across the course to put in practice.
       Instructor explains the concepts at a constant pace along with quite good amount of additional information.
       Overall, very much satisfied with this learning experience.</p>

      </Book>
    <Book 
      img={secondBook.img}
      title={secondBook.title} 
      author={secondBook.author} />
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


