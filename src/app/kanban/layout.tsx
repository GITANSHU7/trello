import { SidebarMain } from "@/components/SidebarMain";
import React from "react";

export default function LayoutKanban({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex">
      <SidebarMain />
      <div className="p-4 flex-1">{children}</div>
    </div>
  );
}
