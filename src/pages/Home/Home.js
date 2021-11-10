import React, { useState, useEffect } from "react";
import { Stats, EmployeeStats, Table } from "./components";

const Home = () => {
  return (
    <div className="p-3 space-y-4 bg-white">
      <Stats />
      <EmployeeStats />
    </div>
  );
};

export default Home;
