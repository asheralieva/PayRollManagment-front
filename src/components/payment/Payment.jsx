import React, { useState } from "react";
import "../payment/Payment.scss";

const Payment = ({ employees, setEmployees }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    amount: "",
    date: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee({ ...newEmployee, [name]: value });
  };

  const handleAddEmployee = () => {
    setEmployees([...employees, { ...newEmployee, id: employees.length + 1 }]);
    setIsModalOpen(false); 
    setNewEmployee({ name: "", amount: "", date: "" }); 
  };

  return (
    <section className="payment">
      <div className="home-charts">
        <h3>График выплат</h3>
        <h4 className="add_btn" onClick={() => setIsModalOpen(true)}>Добавить</h4>
        <div className="charts">
          <div className="charts_heading">
            <span className="chart_fio">ФИО сотрудника</span>
            <span className="chart_sum">Сумма</span>
            <span className="chart_data">Дата</span>
          </div>
          <div className="charts-items">
            {employees.map((employee) => (
              <div className="charts-item" key={employee.id}>
                <span>{employee.name}</span>
                <span>{employee.amount} сом</span>
                <span>{employee.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Добавить сотрудника</h2>
            <input
              type="text"
              name="name"
              placeholder="ФИО сотрудника"
              value={newEmployee.name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="amount"
              placeholder="Сумма"
              value={newEmployee.amount}
              onChange={handleInputChange}
            />
            <input
              type="date"
              name="date"
              value={newEmployee.date}
              onChange={handleInputChange}
            />
            <div className="modal-actions">
              <button onClick={handleAddEmployee}>Готово</button>
              <button onClick={() => setIsModalOpen(false)}>Отмена</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Payment;
