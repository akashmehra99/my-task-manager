import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

const Todos = React.lazy(() => import('todos/Module'));

const Login = React.lazy(() => import('login/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/todos">Todos 121212</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="shell" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
