import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function Kereta() {
  const [data, setData] = useState("");
  const fetchData = () => {
    axios
      .get("https://cobanest-production.up.railway.app")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    fetchData(); // Call fetchData() initially to fetch the data
    const interval = setInterval(() => {
      fetchData(); // Call fetchData() every 10 seconds
    }, 1000);
    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  console.log(data);

  if (data.length === 0) {
    // Render a loading message if the data is still being fetched
    return (
      <div className="text-6xl text-teal-500 grid grid-cols-1 justify-items-center "></div>
    );
  }
  return (
    <div className="grid grid-cols-1 justify-items-center">
      <h1 className="text-6xl p-12 text-teal-700 font-semibold">Kereta</h1>
      {/* <a
        className="bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500 bg-gradient-to-tl from-teal-700 to-blue-700 px-2  rounded-md mb-8"
        href="/"
        rel="noreferrer"
      >
        Back
      </a> */}
      <a
        className="bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500 bg-gradient-to-tl from-teal-700 to-blue-700 px-4 py-2 rounded-md mb-8"
        onClick={() => alert("yeah")}
      >
        Yeah
      </a>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        animate={{ opacity: 1 }}
      >
        <div>
          <table className="table-auto bg-black outline-dashed outline-2 outline-offset-2 rounded-3xl">
            <thead>
              <tr className="text-teal-400">
                <th className="p-4">#</th>
                <th className="p-4">Name</th>
                <th className="p-4">Phone Number</th>
                <th className="p-4"> QRID</th>
                <th className="p-4">Total Meals Collected</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item.id}>
                  <td className="px-4 text-center py-2">{index + 1}</td>
                  <td className="px-4 text-center">{item.Name}</td>
                  <td className="px-4 text-center">{item.Phone}</td>
                  <td className="px-4 text-center">{item.QRID}</td>
                  <td className="px-4 text-center">{item.TotalCollected}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
