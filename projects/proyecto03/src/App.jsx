import "./App.css";
import { UserCard } from "./assets/UserCard";

function App() {
  return (
    <section className="App">
      <UserCard name="Diego" firstName="López" age="23" pais="Argentina" />
      <UserCard name="Matias" firstName="López" age="45" pais="Argentina" />
      <UserCard name="Claudio" firstName="López" age="58" pais="Argentina" />
      <UserCard name="Karina" firstName="López" age="52" pais="Argentina" />
      <UserCard name="Maria José" firstName="Oruza" age="38" pais="Argentina" />
    </section>
  );
}

export default App;
