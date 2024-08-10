import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../features/auth/authSlice';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log({name,email,password,profileImage});
    
    const formData = new FormData();
    console.log(formData,"Before append");
    
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    if (profileImage) {
      formData.append('profileImage', profileImage);
    }
    console.log(formData,"After append");
    

    // Log FormData contents
    for (let [key, value] of formData.entries()) {
      if (value instanceof File) {
        console.log(`${key}: ${value.name}, ${value.size} bytes, ${value.type}`);
      } else {
        console.log(`${key}: ${value}`);
      }
    }

    // Dispatch the FormData to the API
    dispatch(registerUser(formData));
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h2 className="text-xl mb-4">Register</h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="block mb-2 p-2 border border-gray-300"
      />
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
        className="block mb-2 p-2 border border-gray-300"
      />
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm Password"
        className="block mb-4 p-2 border border-gray-300"
      />
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          console.log(file); // Check the file object
          setProfileImage(file);
        }}
        className="block mb-4 p-2 border border-gray-300"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
