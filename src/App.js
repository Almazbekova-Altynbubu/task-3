import './App.css';
import {  AuthProvider } from './store/AuthContext';
import Wrapper from './components/Wrapper';

function App() {

  
  return (
    <div className="App">
      <AuthProvider >
        <Wrapper/>
      </AuthProvider>
    </div>
  );
}

export default App;


