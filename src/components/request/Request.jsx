import React, { useState } from "react";
import "./Request.scss";

const Request = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [requests, setRequests] = useState([
    {
      id: 1,
      name: "Иванов Иван Иванович",
      fromDate: "2024-12-10",
      dayCount: 10,
      type: "Отпуск",
    },
    {
      id: 2,
      name: "Петров Петр Петрович",
      fromDate: "2024-12-05",
      dayCount: 7,
      type: "Больничный",
    },
  ]);
  const [newRequest, setNewRequest] = useState({
    name: "",
    fromDate: "",
    dayCount: "",
    type: "",
  });

  const handleApprove = (id) => {
    setRequests(requests.filter((request) => request.id !== id));
  };

  const handleReject = (id) => {
    setRequests(requests.filter((request) => request.id !== id));
  };

  const handleAddRequest = () => {
    if (
      newRequest.name.trim() &&
      newRequest.fromDate.trim() &&
      newRequest.dayCount.trim() &&
      newRequest.type.trim()
    ) {
      setRequests([
        ...requests,
        { id: Date.now(), ...newRequest },
      ]);
      setNewRequest({ name: "", fromDate: "", dayCount: "", type: "" });
      setIsModalOpen(false);
    } else {
      alert("Все поля обязательны для заполнения!");
    }
  };

  return (
    <section className="request">
      <div className="request_content">
        <div className="request-charts">
          <h3>Заявки на отпуск/больничный</h3>
          <h4 className="add_btn" onClick={() => setIsModalOpen(true)}>
            Добавить заявку
          </h4>
          <div className="charts">
            <div className="charts_heading">
              <span className="chart_id">No.</span>
              <span className="chart_fio">ФИО</span>
              <span className="chart_from">С какого</span>
              <span className="chart_day_count">Кол-во дней</span>
              <span className="chart_type">Тип</span>
              <span className="chart_actions">Действия</span>
            </div>
            <div className="charts-items">
              {requests.map((request) => (
                <div className="charts-item" key={request.id}>
                  <span>{request.id}</span>
                  <span>{request.name}</span>
                  <span>{request.fromDate}</span>
                  <span>{request.dayCount}</span>
                  <span>{request.type}</span>
                  <span className="actions">
                    <button onClick={() => handleApprove(request.id)}>OK</button>
                    <button onClick={() => handleReject(request.id)}>X</button>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Добавить заявку</h3>
            <input
              type="text"
              placeholder="ФИО"
              value={newRequest.name}
              onChange={(e) => setNewRequest({ ...newRequest, name: e.target.value })}
            />
            <input
              type="date"
              placeholder="Дата начала"
              value={newRequest.fromDate}
              onChange={(e) => setNewRequest({ ...newRequest, fromDate: e.target.value })}
            />
            <input
              type="number"
              placeholder="Количество дней"
              value={newRequest.dayCount}
              onChange={(e) =>
                setNewRequest({ ...newRequest, dayCount: e.target.value })
              }
            />
            <select
              value={newRequest.type}
              onChange={(e) => setNewRequest({ ...newRequest, type: e.target.value })}
            >
              <option value="">Выберите тип</option>
              <option value="Отпуск">Отпуск</option>
              <option value="Больничный">Больничный</option>
            </select>
            <div className="modal-actions">
              <button onClick={handleAddRequest}>Добавить</button>
              <button onClick={() => setIsModalOpen(false)}>Отмена</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Request;
