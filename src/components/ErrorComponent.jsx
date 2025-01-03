import React from 'react'

export default function ErrorComponent() {
  return (
    <section class="bg-slate-200 ">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
            <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-[#B98230] ">404</h1>
            <p class="mb-4 text-3xl tracking-tight font-bold text-[#B98230] md:text-4xl ">Something's missing.</p>
            <p class="mb-4 text-lg font-light text-gray-500 ">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
            <a href="#" class="inline-flex text-black bg-[#F4EAD1] border border-[#B98230] hover:shadow-lg hover:-translate-y-1 duration-200 transition   font-medium rounded-lg text-sm px-5 py-2.5 text-center -primary-900 my-4">Back to Homepage</a>
        </div>   
    </div>
</section>
  )
}
