import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from './allRoutes';

const RouteIndex = () => {
  return (
    <React.Fragment>
      <Routes>
        {publicRoutes.map((route: any, idx: number) => (
          <Route
            key={idx}
            path={route.path}
            element={
                <route.component />
            }
          />
        ))}        
      </Routes>
    </React.Fragment>
  );
};

export default RouteIndex;
