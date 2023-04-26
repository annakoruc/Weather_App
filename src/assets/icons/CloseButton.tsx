import React from "react";

type Props = {
  onClick: () => void;
};

export const CloseButton = ({ onClick }: Props) => {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      height="40"
      viewBox="0 96 960 960"
      width="40"
    >
      <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
    </svg>
  );
};
