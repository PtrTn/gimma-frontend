import React, { FC, memo } from "react";

interface Props {
  title?: string;
}

export const FormField: FC<Props> = memo(({ title, children }) => (
  <div className="mb-6">
    {!title ? null : (
      <label className="w-fit top-0 text-lg text-gray-700 bg-white">
        {title}
      </label>
    )}

    <div className="flex px-2 border rounded-lg focus-within:border-indigo-500">
      {children}
    </div>
  </div>
));
