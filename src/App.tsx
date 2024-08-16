import { Header, PhoneBookApp } from "./components/index";

function App() {
  return (
    <div className="flex flex-col p-10 h-screen bg-[#F6F6F6]">
      <Header />
      <PhoneBookApp />
    </div>
  );
}

export default App;
