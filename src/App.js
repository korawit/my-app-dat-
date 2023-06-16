import {BrowserRouter,Route,Routes,Link} from 'react-router-dom';
import Hello from './Hello';
import Bmi from './Bmi';
import ItemList from './ItemList';
import Post from './Post';
function App() {
  return (
    <BrowserRouter>
      <div><ul>
          <li><Link to="/">Hello</Link></li>
          <li><Link to="/bmi">BMI Calculator</Link></li>
          <li><Link to="/itemlist">Item Lists</Link></li>
          <li><Link to="/post/1">see detail item1</Link></li>
          <li><Link to="/post/2">see detail item2</Link></li>
 <li><Link to="/post?fname=korawit&lname=orkphol">Hello korawit</Link></li>
      </ul></div>
      <Routes>
          <Route path="/" element={<Hello name="korawit" />}/>
          <Route path="/bmi" element={<Bmi />}/>
          <Route path="/itemlist" element={<ItemList/>}/>
          <Route path="/post" element={<Post/>}/>
          <Route path="/post/:id" element={<Post/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
