import React, { useState, useCallback } from 'react';
import { ListTable } from '@visactor/react-vtable';

const App = () => {
  const option = {
    columns: [
      {
        field: '0',
        caption: 'name',
      },
      {
        field: '1',
        caption: 'age',
      },
      {
        field: '2',
        caption: 'gender',
      },
      {
        field: '3',
        caption: 'hobby',
      },
    ],
    records: new Array(1000).fill(['John', 18, 'male', '🏀']),
    widthMode: 'autoWidth',
  };
  const [cell, setCell] = useState({});
  const handleCell = useCallback((args) => setCell(args), []);

  // console.log('cell:', cell);
  return (
    <div>
      <ListTable
        option={option}
        height={'500px'}
        onClickCell={handleCell}
        onReady={(inst, isInitial) => {
          console.log(1);
          // console.log(inst, isInitial);
        }}
      />
    </div>
  );
};

export default App;
