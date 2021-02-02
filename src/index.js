import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';

function BookList(){
  return(
    <section className='list'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}
const Book = () => {
  return(
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  );
};


const Image = () => (
  <img src="https://img.thriftbooks.com/api/images/s/fedfc44765ea0090f3f942ce3865c097f6b4f578.jpg" alt=""></img>
);
const Title = () =><h1>The Odyssey</h1>;
const Author = () => <h4 style={{color:'#617d98',fontSize:'0.75rem',
marginTop: '0.25rem'}}>Stieg Larson</h4>

ReactDOM.render(<BookList />, document.getElementById('root')
);


