import * as React from 'react';

const pinStyle = {
  fill: '#d00',
  stroke: 'none'
};

function Pin(props : any ) {
  const {size = 20} = props;

  return (
    <svg height={size} viewBox="0 0 24 24" style={pinStyle}>
        <image href="https://app.atlas.co/static/analysis/location-marker.png" width={size} height={size} />
    </svg>
  );
}

export default React.memo(Pin);