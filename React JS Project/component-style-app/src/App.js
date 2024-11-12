import EmployeeClassStyle from "./EmployeeClassStyle";
import EmployeeFunctionStyle from "./EmployeeFunctionStyle";

function App() {
  return (
    <div>
      <h2>React Component creation in different style</h2>
      <EmployeeFunctionStyle designation="Tester"></EmployeeFunctionStyle>
      <EmployeeClassStyle designation="Developer"></EmployeeClassStyle>
    </div>
  );
}

export default App;
