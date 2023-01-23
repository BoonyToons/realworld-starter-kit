import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import Settings from './components/Settings';
import ArticleCreation from './components/ArticleCreation';
import Article from './components/Article';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Article />
      <Footer />
    </div>
  );
}

export default App;
