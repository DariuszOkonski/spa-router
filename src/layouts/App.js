import { BrowserRouter as Router } from 'react-router-dom';
import '../styles/App.css';
import Footer from './Footer';
import Header from './Header';
import Navigation from './Navigation';
import Page from './Page';

function App() {
  return (
    <Router>      
      <div className="app">
        <header>
          <Header/>
        </header>
        
        <main>
          <aside>
            <Navigation />
          </aside>
          <section className="page">
            <Page/>
          </section>
        </main>

        <footer>
          <Footer/>
        </footer>
      </div>
    </Router>
  );
}

export default App;
