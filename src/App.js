import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { AddUser, Home } from './pages';
import EditUser from './pages/EditUser';
import UserDetails from './pages/UserDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Redux Thunk Curd Operation</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/edit-user/:id" element={<EditUser />} />
          <Route path="/user-details/:id" element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
