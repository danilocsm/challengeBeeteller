import React, { useState } from "react";
import Header from "./components/Header";

export const AppContext = React.createContext({ isLoadingData: false });

function App() {
  const [isLoadingData, setIsLoadingData] = useState<boolean>(true);

  return (
    <>
      <AppContext.Provider value={{ isLoadingData }}>
        <Header />
      </AppContext.Provider>
      <button
        onClick={() => setIsLoadingData(!isLoadingData)}
        className="rounded-xl w-fit h-fit bg-black text-white m-3 p-4"
      >
        Simulate loading state
      </button>
    </>
  );
}

export default App;
