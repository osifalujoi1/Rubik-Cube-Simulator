import logo from './logo.svg';
import './App.css';
import RubikCube from './components/RubicCube';
import Instructions from './components/Instructions';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold my-4">3D Rubik’s Cube Simulator</h1>
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-2/3 h-screen">
          <RubikCube />
        </div>
        <div className="w-full md:w-1/3 p-6">
          <Instructions />
        </div>
      </div>
    </div>
  );
}

export default App;
