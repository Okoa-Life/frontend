import { useContext, useEffect, useState } from "react";
import { listDocs } from "@junobuild/core";
import { AuthContext } from "./Auth";

export const Table = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    window.addEventListener("reload", list);

    return () => {
      window.removeEventListener("reload", list);
    };
  }, []);

  const list = async () => {
    // TODO: STEP_6_LIST_DOCS
    const { items } = await listDocs({
      // collection: "notes",
      collection: "esp32data",

    });

    setItems(items);
  };
  console.log(items);
  useEffect(() => {
    if ([undefined, null].includes(user)) {
      setItems([]);
      return;
    }

    (async () => await list())();
  }, [user]);



  const PayloadCard = ({ item, index, temperature, heartRate, location }) => {
  return (
    <div className="card">
      
      <p>Location: {temperature}</p>
      
      <p>Heart Rate: {heartRate}</p>
      <p>Temperature: {location}</p>
    </div>
  );
};

  return (
    <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200 mt-8">
      <header className="px-5 py-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-800">Entries</h2>
        <div>ESP32 Data Output</div>
      <div id="app">
      {items.map((item, index) => (
      //   <PayloadCard key={index} item={item} index={index} />
      // ))}

  <PayloadCard
    key={index}
    item={item}
    index={index}
    temperature={item.data.esp32Data.temperature.$numberDouble}
    heartRate={item.data.esp32Data.heartrate.$numberInt}
    location={item.data.esp32Data.loc}
  />
))}
    </div>
      </header>

    </div>
  );
};
