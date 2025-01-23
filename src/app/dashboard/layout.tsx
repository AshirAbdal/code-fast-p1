// "use client";

import {auth}  from "@/auth"
import { redirect } from "next/navigation";

export default async function LayoutPrivate({children}:any){

    const season = await auth ();

    if(!season){

        redirect("/");
    }

return children;

}   


