import "./App.css";
// import Sidebar from './components/Sidebar';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Overview from "./pages/Overview";
import Dashboard from "./pages/Dashboard/Dashboard";

import { Asset } from "./pages/Asset/Asset";

function App() {
  return (
    <Router>
      <div>
        {/* <Sidebar /> */}
        <table>
          <tr>
            <td>
              <div className="navbardiv">
                <Navbar />
              </div>
            </td>
            <td>
              <table>
                <tr>
                  <div className="header">Security Access System(SAS)</div>
                </tr>
                <tr>
                  <div className="router">
                    <Switch>
                      <Route path="/Asset/Asset" exact component={Asset} />
                      <Route path="/overview" exact component={Overview} />
                      <Route
                        path="/Dashboard/Dashboard"
                        exact
                        component={Dashboard}
                      />
                    </Switch>
                  </div>
                </tr>
                <tr>
                  <div className="footer"></div>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    </Router>
  );
}

export default App;
