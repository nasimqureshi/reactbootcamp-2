import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';

function BookList(){
  return(
    <section>
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
    <article>
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
const Author = () => <h4>Stieg Larson</h4>

ReactDOM.render(<BookList />, document.getElementById('root')
);


