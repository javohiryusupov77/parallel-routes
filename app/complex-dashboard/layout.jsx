import React from "react";

export default function ComplexDashboard({
  children,
  statistic,
  users,
  products,
}) {
  return (
    <div className="flex min-h-screen p-4 gap-4">
      {children}
      <div className="flex flex-col flex-1 gap-4">
      {users}
      {statistic}
      </div>
      {products}
    </div>
  );
}
