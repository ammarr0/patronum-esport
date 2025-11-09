import React from 'react';
import Hyperspeed from './Hyperspeed';
import { hyperspeedPresets } from './hyperspeedPresets';

const GlobalHyperspeedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {/* Pick whatever preset you want as the global default */}
      <Hyperspeed effectOptions={hyperspeedPresets.one} />
    </div>
  );
};

export default GlobalHyperspeedBackground;
