import Login from "./screens/login";
import { useEffect } from "react";
import { LoginData } from "./data/LoginData";
import "semantic-ui-css/semantic.min.css";

export default function App() {
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(LoginData));
  }, []);

  return (
    <div className="App">
      <div style={{ maxWidth: "300px", margin: "0 auto", padding: "30px 0" }}>
        <Login />
      </div>
    </div>
  );
}
