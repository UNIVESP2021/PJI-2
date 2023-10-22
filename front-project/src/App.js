import { BrowserRouter } from 'react-router-dom';
import MyRoutes from './routes';
import NavBar from './components/NavBar/NavBar';
import PiContextProvider from './context/PiContext';

function App() {
  return (
    <div className="App">
      <PiContextProvider>
        <BrowserRouter>
          <NavBar />
          <MyRoutes />
        </BrowserRouter>
      </PiContextProvider>
    </div>
  );
}

export default App;
