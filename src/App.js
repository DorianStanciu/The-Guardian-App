import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './styles/App.css'
import Footer from './footer/Footer'
import Header from './header/Header'
import Search from './search/Search'
import Alert from './alert/Alert'
import axios from 'axios'
// PAGES
import News from './pages/news/News'
import Opinion from './pages/opinion/Opinion'
import Sport from './pages/sport/Sport'
import Culture from './pages/culture/Culture'
import Lifestyle from './pages/lifestyle/Lifestyle'
import SearchResults from './pages/searchResults/SearchResults'
// REDUX
import { Provider } from 'react-redux'
import store from './store'
// TEST
import { loadArticle } from './actions'
import SingleArticle from './pages/SingleArticle/SingleArticle'

function App() {

  const [alert, setAlert] = useState(null)

  return (
      <Router>
      <Header />
      <Alert alert={alert}/>
      <Search setAlert={setAlert}/>
      <Switch>
      <Route exact path='/' component={News}/>
      <Route path='/News' component={News}/>
      <Route path='/Opinion' component={Opinion}/>
      <Route path='/Sport' component={Sport}/>
      <Route path='/Culture' component={Culture}/>                           
      <Route path='/Lifestyle' component={Lifestyle}/>
      <Route path='/SearchResults' component={SearchResults}/>
      <Route path='/SingleArticle' component={SingleArticle}/>
      </Switch>
      <Footer />
      </Router>
  );
}

export default App;
