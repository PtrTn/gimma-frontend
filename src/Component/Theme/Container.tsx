import React, { FC, memo } from "react";

export const Container: FC = memo(({ children }) => {
  return (
    <div className="container mx-auto align-middle h-full flex">{children}</div>
  );
});
