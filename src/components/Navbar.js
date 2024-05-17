import { useHistory  } from "react-router-dom";

export default function Navbar(){
    const history = useHistory();
    const gotToPage=(page)=>{
        history.push(page);
      }
    return(
        <>
        <div className="navdiv">
        <nav>
      
        <button name="button" className="nav-button" onClick={() => gotToPage("/Overview")}>Dashboard</button>
        <br/>
        <br/>
        <button name="button" className="nav-button" onClick={() => gotToPage("/Asset/Asset")}>SAS-HOTO</button>
        <br/>
        <br/>
        <button name="button" className="nav-button" onClick={() => gotToPage("/products/search")}>Maximo</button>
        <br/>
        <br/>

        <button name="button" className="nav-button" onClick={() => gotToPage("/products/search")}>SAS-KPI</button>
        <br/>
        <br/>

        <button name="button" className="nav-button" onClick={() => gotToPage("/products/search")}>TBT-Topics</button>
        <br/>
        <br/>
        <button name="button" className="nav-button" onClick={() => gotToPage("/products/search")}>SAS-Master Roll</button>
        <br/>
        <br/>
        <button name="button" className="nav-button" onClick={() => gotToPage("/products/search")}>Leave Management</button>
        <br/>
        <br/>
        <button name="button" className="nav-button" onClick={() => gotToPage("/products/search")}>TBT-Attendance</button>
        <br/>
        <br/>
        <button name="button" className="nav-button" onClick={() => gotToPage("/products/search")}>TBT-Topics</button>
        <br/>
        <br/>
        <button name="button" className="nav-button" onClick={() => gotToPage("/products/search")}>Vehicle Checklist</button>
        <br/>
        <br/>
        <button name="button" className="nav-button" onClick={() => gotToPage("/products/search")}>Tableau Dasboard</button>
        <br/>
        <br/>
        <button name="button" className="nav-button" onClick={() => gotToPage("/products/search")}>Tableau Material</button>
        <br/>
        
    </nav>
    </div>
    </>
    );
}