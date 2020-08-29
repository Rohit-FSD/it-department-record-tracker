import React, { useState, useEffect } from "react";
import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLogs();
  }, []);

  const getLogs = async () => {
    setLoading(true);
    // because of proxy in package.json we just request to /logs
    const res = await fetch("/logs");
    const data = await res.json();

    setLogs(data);
    setLoading(false);
  };

  if (loading) {
    return <Preloader />;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center"> SYSTEM RECORDS</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No Logs To Show... </p>
      ) : (
        logs.map((log) => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

export default Logs;
