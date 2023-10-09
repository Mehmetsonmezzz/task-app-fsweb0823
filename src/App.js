import "./App.css";
import Header from "./layouts/Header";
import Main from "./layouts/Main";
import Footer from "./layouts/Footer";
import { useState } from "react";

function App() {
  const [loggedInUser, setloggedInUser] = useState({
    name: "Emre",
    password: "1234",
  });
  const [allUsers, setAllUsers] = useState([]);
  const [tasks, setTasks] = useState([]);
  // handleLogin = (credentials) => {
  //   //login chechk
  //   // eğer kullanıcı doğru ise setLoggedInUser
  // };
  return (
    <div className="App">
      <Header user={loggedInUser} />
      <Main handleLogin={handleLogin} tasks={tasks} allUsers={allUsers} />
      <Footer />
    </div>
  );
}

export default App;
