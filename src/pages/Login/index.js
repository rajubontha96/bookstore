import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [name, setName] = useState("");
  const { login } = useContext(AuthContext);

  return (
    <div>
      <h2>Login</h2>

      <input
        placeholder="Enter username"
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={() => login(name)}>
        Login
      </button>
    </div>
  );
};

export default Login;