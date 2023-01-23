import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import Settings from './components/Settings';
import ArticleCreation from './components/ArticleCreation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <ArticleCreation />
      <Footer />
    </div>
  );
}

export default App;
