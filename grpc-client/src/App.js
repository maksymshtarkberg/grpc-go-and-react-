import logo from "./logo.svg";
import "./App.css";
import { SessionServiceClient } from "./proto/SessionServiceClientPb.ts";
import {
  AddSessionRequest,
  DelSessionRequest,
  GetSessionRequest,
} from "./proto/session_pb.js";

const client = new SessionServiceClient("http://localhost:8083", null, null);

function App() {
  function testAddSession() {
    const request = new AddSessionRequest();
    request.setId(1);
    request.setSession("test-session");

    client.addSession(request, {}, (err, response) => {
      if (err) {
        console.error("Error calling AddSession:", err);
      } else {
        console.log("AddSession response:", response.getSuccess());
      }
    });
  }
  function testGetSession() {
    const request = new GetSessionRequest();
    request.setId(1);

    client.getSession(request, {}, (err, response) => {
      if (err) {
        console.error("Error calling GetSession:", err);
      } else {
        console.log("GetSession response:", response.getSession());
      }
    });
  }

  function testDelSession() {
    const request = new DelSessionRequest();
    request.setId(1);

    client.delSession(request, {}, (err, response) => {
      if (err) {
        console.error("Error calling DelSession:", err);
      } else {
        console.log("DelSession response:", response.getSuccess());
      }
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <button onClick={testAddSession}>AddSession</button>
          <button onClick={testGetSession}>GetSession</button>
          <button onClick={testDelSession}>DelSession</button>
        </div>
      </header>
    </div>
  );
}

export default App;
