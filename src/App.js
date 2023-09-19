import './App.css';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import AddItem from './component/AddItem';
// import Inventory from './component/Inventory';
 import LandingPage from './component/LandingPage';

function App() {
  return (
    <>
        <LandingPage/>  
      {/* <Inventory/>  */}
      
      {/* <Router>
      
        <Route exact path="/" component={Inventory} />
        <Route path="/add-item" component={AddItem} /> {/* New route for adding items */}
      
    {/* </Router> */} 
    </>
  );
}

export default App;
