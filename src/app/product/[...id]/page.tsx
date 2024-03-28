import React from 'react'
export type ParamProps = {
  params: {
    id: number
  }
}
async function fetData(id: number) {
  const rec = await fetch(`https://dummyjson.com/products/${id}`);
  return rec.json();
}

export async function generateMetadata({ params }: any) {
  const data = await params.id;
  const product = await fetData(data);
  return {
    title: product?.title,
    describe: product.describe,
    openGraph: {
      images: product.thumbnail,
    }
  }
};

async function page({params}: ParamProps) {
  const id = params.id;
  const rec = await fetData(id);
  return (
    <div>
      <h1>Details pages</h1>
      {
        <div className='flex flex-col'>
          {rec.title}
          {rec.description}
          {rec.thumbnail}
        </div>
      }
    </div>
  )
}

export default page