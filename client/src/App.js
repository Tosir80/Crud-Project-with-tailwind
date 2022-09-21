
import "./App.css";

import Home from "./components/Home";
import Adduser from "./components/Adduser";

function App() {
  return (
    <div className="container  mx-auto px-6">
      <h1 className="text-3xl text-purple-500 py-5 font-mono font-semibold border-b-4 border-purple-500">Crud Mern Project with Tailwind css</h1>
    <div className="flex ">
    <div className="w-2/3">
    <Home/>
    </div>
    <div className="w-1/3">
    <Adduser />
    </div>
    </div>
    </div>
  );
}

export default App;
