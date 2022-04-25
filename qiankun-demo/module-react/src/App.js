import { BrowserRouter, Route, Link } from "react-router-dom";
// react子应用的路由都以/react 开头
const BASE_NAME = window.__POWERED_BY_QIANKUN__ ? "/react" : "/";
function App() {
  console.log("BASE_NAME", BASE_NAME);
  return (
    <BrowserRouter basename={BASE_NAME}>
      <Link to="/">首页 </Link> | 
      <Link to="/about"> 关于</Link>
      <Route path="/" exact render={()=><Home />}></Route>
      <Route path="/about" render={()=><About />}></Route>
    </BrowserRouter>
  );
}

function Home() {
  return <div>Welcome home </div>;
}

function About() {
  return <div>Welcome about </div>;
}

export default App;
