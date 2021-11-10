import * as React from 'react';

interface Props {
  title: string;
  onClick?: () => void;
}

function Button({ title, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-20 h-20 rounded-full drop-shadow-md m-1 shadow-md"
    >
      {title}
    </button>
  );
}

export default Button;
