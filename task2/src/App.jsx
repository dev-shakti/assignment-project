import Header from "./components/Header";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="bg-gray-200 flex flex-col min-h-screen">
      <Header />
      <Homepage />
    </div>
  );
}

export default App;
