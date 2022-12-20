import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [isHalf, setIsHalf] = useState(false);
  const [halfNumber, setHalfNumber] = useState(null);
  const buttons = ["Adicionar", "Subtrair", "Zerar", "Metade"];

  function increment() {
    if (count <= 9) {
      setCount(count + 1);
    }
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function reset() {
    setCount(0);
  }

  function half() {
    setHalfNumber(count / 2);
  }

  function onHandleClickIncrementOrDecrement(name) {
    if (name === "Adicionar") {
      increment();
      setIsHalf(false);
    } else if (name === "Zerar") {
      reset();
      setIsHalf(false);
    } else if (name === "Metade") {
      setIsHalf(!isHalf);
      half();
    } else {
      decrement();
      setIsHalf(false);
    }
  }

  return (
    <div style={styleContainer}>
      <div style={styleBox}>
        <div>
          {count} {isHalf ? `A metade é:${halfNumber}` : ""}
        </div>
        <div style={styleContainerButton}>
          {buttons.map((name) => (
            <button style={styleButton} onClick={() => onHandleClickIncrementOrDecrement(name)}>
              {name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

const styleContainer = {
  display: "flex",
  justifyContent: "center",
  height: "100vh",
  alignItems: "center",
};

const styleBox = {
  width: "350px",
  textAlign: "center",
  border: "1px solid #eee",
  borderRadius: "6px",
  backgroundColor: "#704F4F",
  fontSize: "18px",
  height: "fit-content",
  padding: "10px",
};

const styleContainerButton = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

const styleButton = {
  backgroundColor:'#E38B29',
  border:'none'

}