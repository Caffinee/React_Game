 import './App.css';
import Intro from './component/intro.js'
import NavigationBar from './component/NavigationBar.js'
import Best from './component/BestGame.js'
import Trending from './component/TrendingGame.js'

import "../src/style/landingPage.css"

function App() {
  return (
    <div>
      <div className = "myBG">
        <NavigationBar/>
        <Intro/>
      </div>

      <div className = "trending">
        <Trending/>
      </div>
      
      <div className = "best">
        <Best/>
      </div>

    </div>
  );
}

export default App;
