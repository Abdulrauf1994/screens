import Form from './component/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from "./component/Nav"
import Footer from './component/Footer';
import Account from './component/Account';
import Login from './component/Login';
import Navbar2 from './component/navbars/Navbar2';
import Screen2 from './component/screens/Screen2';
import Navbar3 from "./component/navbars/Navbar3";
import Screen3 from './component/screens/Screen3';
import Footer3 from './component/Footer/Footer3';
import Screen4 from './component/screens/Screen4';
import Screen5 from './component/screens/Screen5';
import Footer4 from './component/Footer/Footer4';

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Navbar2 /> */}
      {/* <Navbar3 /> */}
      {/* <Form /> */}
      {/* <Account /> */}
      {/* <Login /> */}
      {/* <Screen2 /> */}
      {/* <Screen3 /> */}
      {/* <Screen4 /> */}
      <Screen5 />  
      <Footer />
      {/* <Footer3 /> */}
      {/* <Footer4 /> */}

    </div>
  );
}

export default App;
