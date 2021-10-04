import logo from './logo.svg';
import './App.css';
import { ButtonGroup ,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Choise from './Components/Choise/Choise';
import About from './Components/About/About';
import Discover from './Components/Discover/Discover';
import Notfound from './Components/Notfound/Notfound';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';
import Services from './Components/Services/Services';
import Mypart from './Components/Mypart/Mypart';
import Large from './Components/Large/Large';
function App() {
  return (
    <div className="App bgm">
     <Header></Header>
     
     <Router>
       <Switch>
         <Route exact path="/">
           <Large></Large>
          <Main></Main>
         
         </Route>
         <Route path="/home">
           <Large></Large>
        <Main></Main>
         </Route>
         <Route path="/services">
         <Services></Services>
         </Route>
         <Route path="/about">
          <About></About>
         </Route>
         <Route path="/discover">
           <Discover></Discover>
         </Route>
         <Route path="*">
          <Notfound></Notfound>
         </Route>
       </Switch>
     </Router>
     <Footer></Footer>
    </div>
  );
}

export default App;
