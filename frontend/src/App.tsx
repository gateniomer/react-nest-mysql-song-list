import "./App.css";
import { Filters } from "./components/Filters.component";
import { SongsTable } from "./components/songsTable.component";
import { GlobalProvider } from "./context/GlobalContext";
import { NewSongForm } from "./components/NewSongForm.component";

function App() {
  return (
    <GlobalProvider>
      <div id="page">
        <aside id="sidebar">
          <h1>Song List Assignment</h1>
          <p>Thanks for the opportunity 🤓 💻</p>
          <NewSongForm></NewSongForm>
          <Filters></Filters>
        </aside>
        <SongsTable></SongsTable>
      </div>
    </GlobalProvider>
  );
}

export default App;
