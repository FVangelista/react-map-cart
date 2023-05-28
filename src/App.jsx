import Header from "./components/Header";
import DisplayCart from "./components/DisplayCart";
import Spinner from "./components/spinner";
import { useGlobalContext } from "./store/context";

function App() {
  const { loading } = useGlobalContext();

  return (
    <main>
      <Header />
      {loading ? <Spinner /> : <DisplayCart />}
    </main>
  );
}

export default App;
