import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './components/layout/Navigation';
import Header from './components/layout/Header';
import Content from './components/layout/Content';
import Footer from './components/layout/Footer';
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Header/>
      <Content />
      <Footer/>
    </div>
  );
}

export default App;
