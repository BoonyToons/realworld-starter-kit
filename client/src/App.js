import './App.css';
import Header from './components/Layout/Header';
import Home from './components/Pages/Home';
import Login from './components/Pages/Login';
import Profile from './components/Pages/Profile';
import Settings from './components/Pages/Settings';
import ArticleCreation from './components/Pages/ArticleCreation';
import Article from './components/Pages/Article';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
