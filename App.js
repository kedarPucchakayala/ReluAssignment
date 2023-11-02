
import './App.css';
import Header from './components/Header'
import LeftSidebar from './components/LeftSidebar';
import Content from './components/Content';
import RightSidebar from './components/RightSidebar';

function App() {
  return (
    <div className="App">
      <Header/>
      <LeftSidebar/>
      <Content/>
      <RightSidebar/>
    </div>
  );
}

export default App;
