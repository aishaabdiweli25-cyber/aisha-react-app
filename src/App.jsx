import "./App.css";
import Counter from "./components/counter";
import Greeting from "./components/Greetings";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Header />
      <Greeting name="Aisha" surname="Abdiweli" />
      <Counter />
    </>
  );
}

export default App;
     