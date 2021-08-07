import React, { Suspense } from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { TaskProvider } from "./context/TaskContext";
// import Editor from "./components/Editor";
const Editor = React.lazy(() => import("./components/Editor"));

function App() {
  return (
    <div className="w-full h-full scrollbar scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-700">
      <TaskProvider>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <div className="flex justify-center space-x-4 font-medium text-blue-400 ">
              <Link to="/">Home</Link>
              <Link to="/editor">Editor</Link>
            </div>
            <Switch>
              <Route exact path="/editor">
                <Editor />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Suspense>
        </Router>
      </TaskProvider>
    </div>
  );
}

const Home = () => {
  return (
    <>
      <div className="grid h-screen font-sans font-medium place-content-center">
        <div className="text-4xl font-black">🧁 React Starter</div>
      </div>
    </>
  );
};

export default App;
