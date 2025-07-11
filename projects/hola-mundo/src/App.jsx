import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard
        initialIsFollowing={true}
        userName="midudev"
        name="Miguel Ángel Durán"
      />
      <TwitterFollowCard userName="Diegooo_CASS" name="diego" />
      <TwitterFollowCard userName="leomessisite" name="Leo Messi HQ" />
      <TwitterFollowCard userName="ibaiLlanos" name="Ibai" />
    </section>
  );
}
