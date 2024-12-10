import "../home/Home.scss";

const Home = ({ employees }) => {
  const cardItem = [
    { nameCard: "Общая сумма ЗП", num: 50000 },
    { nameCard: "Заявки", num: 3 },
  ];
  return (
    <section className="home">
      <div className="container">
        <div className="home-content">
          <div className="home-cards">
            {cardItem.map((card, i) => (
              <div key={i} className="card">
                <p>{card.nameCard}</p>
                <span>{card.num}</span>
              </div>
            ))}
          </div>

          <div className="home-charts">
            <h3>График выплат</h3>
            <div className="charts">
              <div className="charts_heading">
                <span className="chart_fio">ФИО сотрудника</span>
                <span className="chart_sum">Сумма</span>
                <span className="chart_data">Дата</span>
              </div>
              <div className="charts-items">
                {employees.map((employee) => (
                  <div className="charts-item">
                    <span>{employee.name}</span>
                    <span>{employee.amount}</span>
                    <span>{employee.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
