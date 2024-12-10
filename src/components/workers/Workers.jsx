// Workers.js
import { useState } from "react";
import "../workers/Worker.scss";

const Workers = ({ workers, setWorkers }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newWorker, setNewWorker] = useState({
    name: "",
    position: "",
    salary: "",
    telNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewWorker({ ...newWorker, [name]: value });
  };

  const handleAddWorker = () => {
    setWorkers([...workers, { ...newWorker, id: workers.length + 1 }]);
    setIsModalOpen(false); // Закрыть модальное окно
    setNewWorker({ name: "", position: "", salary: "", telNumber: "" }); // Очистить форму
  };

  return (
    <section className="workers">
      <div className="workers__content">
        <div className="workers-charts">
          <h3>Список сотрудников</h3>
          <h4 className="add_btn" onClick={() => setIsModalOpen(true)}>
            Добавить сотрудника
          </h4>
          <div className="charts">
            <div className="charts_heading">
              <span className="chart_id">No.</span>
              <span className="chart_fio">ФИО</span>
              <span className="chart_position">Должность</span>
              <span className="chart_salary">Зарплата</span>
              <span className="chart_telNum">Телефон</span>
            </div>
            <div className="charts-items">
              {workers.map((worker) => (
                <div className="charts-item" key={worker.id}>
                  <span>{worker.id}</span>
                  <span>{worker.name}</span>
                  <span>{worker.position}</span>
                  <span>{worker.salary}</span>
                  <span>{worker.telNumber}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Модальное окно */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Добавить сотрудника</h2>
            <input
              type="text"
              name="name"
              placeholder="ФИО сотрудника"
              value={newWorker.name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="position"
              placeholder="Должность"
              value={newWorker.position}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="salary"
              placeholder="Зарплата"
              value={newWorker.salary}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="telNumber"
              placeholder="Телефон"
              value={newWorker.telNumber}
              onChange={handleInputChange}
            />
            <div className="modal-actions">
              <button onClick={handleAddWorker}>Добавить</button>
              <button onClick={() => setIsModalOpen(false)}>Отмена</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Workers;
