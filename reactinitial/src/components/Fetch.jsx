import { useEffect, useState } from "react";
import LoadingMask from "./LoadingMask";
import Laptops from "./Laptops";

const Fetch = () => {
  const [laptopData, setLaptopData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetcLaptop = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setLaptopData(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetcLaptop("https://demoapi.com/api/laptop");
  }, []);

  console.log(laptopData);

  //if (loading) return <LoadingMask />;
  return (
    <div>
      {loading ? (
        <LoadingMask />
      ) : (
        laptopData &&
        laptopData?.map((note, index) => <Laptops key={index} note={note} />)
      )}
    </div>
  );
};

export default Fetch;
