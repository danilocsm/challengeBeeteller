import React, { useState } from "react";
import Body from "./components/Body";
import Header from "./components/Header";

export const AppContext = React.createContext({ isLoadingData: false });

function App() {
  const [isLoadingData, setIsLoadingData] = useState<boolean>(true);

  return (
    <>
      <AppContext.Provider value={{ isLoadingData }}>
        <Header />
        <Body />
      </AppContext.Provider>
      <button
        onClick={() => setIsLoadingData(!isLoadingData)}
        className="rounded-xl w-fit h-fit bg-zinc-900 text-white m-3 p-4 bg-gradient-to-br hover:from-zinc-800 hover:to-zinc-500"
      >
        Simulate loading state
      </button>
    </>
  );
}

export default App;
