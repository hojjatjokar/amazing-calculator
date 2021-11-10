import React from 'react';

interface Props {
  value: number;
}

export default function Display(props: Props) {
  return (
    <div className="display">
      <p data-testid="display">{props.value}</p>
    </div>
  );
}
