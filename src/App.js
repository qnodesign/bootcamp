import Login from "./screens/login";
import "semantic-ui-css/semantic.min.css";

export default function App() {
  return (
    <div className="App">
      <div style={{ maxWidth: "300px", margin: "0 auto", padding: "30px 0" }}>
        <Login />
      </div>
    </div>
  );
}
