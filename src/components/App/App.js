import Features from '../Features/Features';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Info from '../Info/Info';
import Main from '../Main/Main';
import Partners from '../Partners/Partners';
import Stocks from '../Stocks/Stocks';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className='App__background'>
        <Header />
        <Main />
      </div>
      <Features />
      <Info />
      <Stocks />
      <Partners />
      <Footer/>
    </div>
  );
}

export default App;
