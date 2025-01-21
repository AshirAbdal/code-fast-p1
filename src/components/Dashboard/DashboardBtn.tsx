"use client";

import Link from "next/link";

const DashboardBtn = ({ extrastyle }: { extrastyle?: string }) => {
  return (
    <Link
      href="/dashboard"
      className={`btn btn-primary ${extrastyle ? extrastyle : ""}`}
    >
      Go To Dashboard
    </Link>
  );
};

export default DashboardBtn;
