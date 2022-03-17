import { useState } from "react";

const Laptops = ({ index, note }) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div>
      <h3 key={index}>{note.name}</h3>
      {show && (
        <p>
          {note.brand} {note.weigth}
        </p>
      )}
      <button onClick={handleClick}>{show ? "Show less" : "Show more"}</button>
    </div>
  );
};

export default Laptops;
