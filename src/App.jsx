import Navbar from "./components/Navbar";
import StudentDisplay from "./components/StudentDisplay";
import StudentForm from "./components/StudentForm";

function App() {
  return (
  <>
    <Navbar />
    <h1 className="text-center text-success mt-3">Kekambas 102 Students</h1>
    <StudentDisplay />
  </>
  );
}


export default App;