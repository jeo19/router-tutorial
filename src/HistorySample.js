import React, { useEffect } from "react";

function HistorySample({ history }) {
  const goBack = () => {
    history.goBack();
  };
  const goHome = () => {
    history.push("/");
  };
  useEffect(() => {
    console.log(history);
    const unblock = history.block("Do you cofirm leave?");
    return () => {
      unblock();
    };
  }, [history]);
  return (
    <div>
      <button onClick={goBack}>Back</button>
      <button onClick={goHome}>Home</button>
    </div>
  );
}
export default HistorySample;
