import './App.css';
import Background from './Components/General/Background';
import 'normalize.css';
import Header from './Components/Layout/Header/Header';
import Navbar from './Components/Layout/Header/Navbar';
import Today from './Components/Layout/Today/Today'
import Content from './Components/News/Content';
function App() {
  return (
    <div className="App">
    <Background/>
<Header/>
<Today/>
<Navbar/>
<Content/>
    </div>
  );
}

export default App;
