export const Bottom = () => {
  const expense = "₱" + (3500).toFixed(2);
  const split = "₱" + (640).toFixed(2);
  return (
    <div className="bottom">
      <div className="bottom-container">
        <div className="expense-container">
          <h4>Expenses</h4>
          <h1>{expense}</h1>
        </div>
        <div className="vertical-line"></div>
        <div className="split-container">
          <h4>Split</h4>
          <h1>{split}</h1>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
