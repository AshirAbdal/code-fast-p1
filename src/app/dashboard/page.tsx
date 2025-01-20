import BackBtn from "@/components/Dashboard/BackBtn";
import Example from "@/components/Dashboard/HooKs";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

import Image from "next/image";
import { useRouter } from "next/router";

import images from  '@/app/images.jpeg'


export default async function Dashboard() {
  const res = await fetch("http://localhost:3000/products.json", {
    cache: "no-store",
  });
  const products = await res.json();

  return (
    <div className="px-20">
      <div className="p-[100px] text-[100px] ">Welcome to Dashboard</div>

    <Image alt="logo" src={images}/>

      <p>{products.length}</p>
      {products.map((product: { id: Key | null | undefined; name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; description: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => (
        <div className="py-3" key={product.id}>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
        </div>
      ))}

      <BackBtn/>

      <div>
       <Example/>
      </div>
    </div>
  );
}
