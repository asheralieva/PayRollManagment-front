import "./App.css";
import Header from "./components/header/Header";
// import Login from "./components/login/Login";
import logo1 from "./assets/logo1.svg";
import logo2 from "./assets/logo2.svg";
import logo3 from "./assets/logo3.svg";
import logo4 from "./assets/logo4.svg";
import { useState } from "react";
import Home from "./components/home/Home";
import Workers from "./components/workers/Workers";
import Payment from "./components/payment/Payment";
import Request from "./components/request/Request";
function App() {
  const [activePage, setActivePage] = useState("Home");

  const logoItems = [
    { id: 1, src: logo1, name: "Главная" },
    { id: 2, src: logo2, name: "Сотрудники" },
    { id: 3, src: logo3, name: "Выплаты" },
    { id: 4, src: logo4, name: "Заявки" },
  ];

  const [workers, setWorkers] = useState([
    {
      id:1,
      name: "",
      position: "",
      salary: "",
      telNumber: ""
    },
  ])
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Иванов Иван Иванович",
      amount: "50,000 ",
      date: "2024-12-01",
    },
    {
      id: 2,
      name: "Петров Петр Петрович",
      amount: "45,000 ",
      date: "2024-11-30",
    },
    {
      id: 3,
      name: "Сидорова Анна Ивановна",
      amount: "55,000 ",
      date: "2024-12-05",
    },
    {
      id: 4,
      name: "Кузнецов Александр Сергеевич",
      amount: "60,000 ",
      date: "2024-12-03",
    },
  ]);
  const renderPage = () => {
    switch (activePage) {
      case 1:
        return <Home employees={employees} />;
      case 2:
        return <Workers workers={workers} setWorkers={setWorkers}/>;
      case 3:
        return <Payment employees={employees}  setEmployees={setEmployees} />;
      case 4:
        return <Request />;
      default:
        return <Home employees={employees} />;
    }
  };
  return (
    <>
      {/* <Login/> */}
      <div className="app_content">
        <Header
          logoItems={logoItems}
          activePage={activePage}
          setActivePage={setActivePage}
        />
        <div>{renderPage()}</div>
      </div>
    </>
  );
}

export default App;
