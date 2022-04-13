import React, { useState } from 'react';
// import logo from './logo.svg';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery'
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photo of grocery stores, food trucks, and other commercial projects'
  },
  {
      name: 'portrait',
      description: 'Portraits of people in my life'
  },
  {
      name: 'food',
      description: 'Delicious delicacies'
  },
  {
      name: 'landscape',
      description: 'Fields, farmhouses, waterfalls, and the beauty of nature'
  },
]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <Nav
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      ></Nav>
      <main>
        <Gallery></Gallery>
        <About></About>
      </main>
    </div>
  );
}

export default App;
