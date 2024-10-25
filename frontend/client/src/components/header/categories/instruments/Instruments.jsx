import React from "react";
import { getAllInstruments } from "../../../../api/api";
import { useEffect, useState } from "react";
import InstrumentsCard from "../../categories/instruments/InstrumentsCard";

function Instruments() {
  const [instruments, setInstruments] = useState([]);
  useEffect(() => {
    async function loadAllInstruments() {
      const instrumentsData = await getAllInstruments();
      setInstruments(instrumentsData);
    }
    loadAllInstruments();
  }, []);
  return (
    <>
      <div className="relative isolate px-15 pt-20 lg:px-15">
        <div className="text-left">
          <h1 className="text-1xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            All instruments
          </h1>

          
        </div>
      </div>
      <div className="gap-2 grid grid-cols-4 sm:grid-cols-4">
        {instruments.map((instrument) => {
          return (
            <>
              <InstrumentsCard instrument={instrument} />
            </>
          );
        })}
      </div>
    </>
  );
}

export default Instruments;
