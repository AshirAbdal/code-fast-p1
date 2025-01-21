// app/dashboard/page.tsx

import BackBtn from "@/components/Dashboard/BackBtn";
import Example from "@/components/Dashboard/HooKs";
import Image from "next/image";
import images from '@/app/images.jpeg';
import fs from 'fs';
import path from 'path';

interface Product {
  id: string | number;
  name: string;
  description: string;
}

export default async function Dashboard() {
  // Define the path to products.json
  const filePath = path.join(process.cwd(), 'public', 'products.json');

  // Read the file synchronously
  const jsonData = fs.readFileSync(filePath, 'utf-8');

  // Parse the JSON data
  const products: Product[] = JSON.parse(jsonData);

  return (
    <div className="px-20">
      <div className="p-[100px] text-[100px]">Welcome to Dashboard</div>
      <Image alt="logo" src={images} width={500} height={500} />
      <p>{products.length}</p>
      {products.map((product) => (
        <div className="py-3" key={product.id}>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
        </div>
      ))}
      <BackBtn />
      <div>
        <Example />
      </div>
    </div>
  );
}
