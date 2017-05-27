import React from 'react';

import Controls from '../components/Controls';
import Palette from '../components/Palette';

const App = () => {
  const options = [{
    label: 'Complementary',
    value: '2'
  },
  {
    label: 'Analagous',
    value: '3'
  },
  {
    label: 'Triad',
    value: '3'
  },
  {
    label: 'Split Complementary',
    value: '3'
  },
  {
    label: 'Square',
    value: '4'
  },
  {
    label: 'Tetradic / Rectangular',   // Two complementary pairs
    value: '4'
  },
  {
    label: 'Diad',
    value: '2'
  },
  {
    label: 'Random',
    value: '4'
  }];

  return (
    <div>
      <Controls options={options} error="error message!" />
      <Palette swatches={['#0c0', 'rgba(255,255,0,1)', 'hsl(180, 50% 50%)', '#f30']} />
    </div>);
};

export default App;
