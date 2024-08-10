import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../features/auth/authSlice';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h2 className="text-xl mb-4">Login</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="block mb-2 p-2 border border-gray-300"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="block mb-4 p-2 border border-gray-300"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
