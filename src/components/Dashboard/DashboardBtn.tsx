"use client";

import Link from "next/link";

const Button = ({extrastyle} : any) => {


  return (
    <Link href="/dashboard" className={`btn btn-primary ${extrastyle?extrastyle: ""}`} >
      Go To Dashboard
    </Link>
  );
};


export default Button;
