import './App.css';
import UserForm from './components/UserForm';
import UserDataTable from './components/UserDataTable';

function App() {
  return (
    <div className="App my-4">
      <div className="container">

        <div className="row mb-4">
          <div className="col">
            <h1>User Data Form</h1>
          </div>
        </div>

        <UserForm />

        <UserDataTable />

      </div>
    </div>
  );
}

export default App;
