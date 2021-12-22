import "./css/app.css";
import Stars from "./components/Stars";

export default function App() {
  return (
    <div className="App">
      <Stars count={3} />
    </div>
  );
}
