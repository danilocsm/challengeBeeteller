import React, { useEffect, useState } from 'react';
import api from '../lib/api';

export const DataContext = React.createContext<{
  isLoadingData: boolean;
  appData: {
    dashboard: Record<string, any>;
    movement: Record<string, any>;
    offers: Record<string, any>;
  };
}>({
  isLoadingData: false,
  appData: {
    dashboard: {},
    movement: {},
    offers: {},
  },
});

type AppContextProps = {
  children: React.ReactElement[];
};

export default function DataProvider({ children }: AppContextProps) {
  const [isLoadingData, setIsLoadingData] = useState<boolean>(true);
  const [appData, setAppData] = useState<any>({});

  const parseData = (appData: any[]) => {
    const parsedData: any = {};

    for (let data of appData) {
      parsedData[data.config.url.replace('/', '')] = data.data;
    }
    setAppData({ ...parsedData });
  };
  const fetchData = async () => {
    setIsLoadingData(true);
    const apiData = await Promise.all([
      api.get('/dashboard'),
      api.get('/movement'),
      api.get('/offers'),
    ]);
    parseData(apiData);
    setIsLoadingData(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ isLoadingData, appData }}>
      {children}
    </DataContext.Provider>
  );
}
