import { Link, createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/products/$productId')({
  component: ProductPage,
})

const bottleProducts = {
  '500': {
    size: '500 ML',
    description: 'Compact hydration built for everyday movement.',
    colors: [
      {
        name: 'Pink',
        className: 'bg-[#f0a9ac]',
        image: '/images/performa-bottle-pink.png',
      },
      {
        name: 'Sage',
        className: 'bg-[#a9d1c5]',
        image: '/images/performa-bottle-sage.png',
      },
      {
        name: 'Black',
        className: 'bg-[#1a1b1f]',
        image: '/images/performa-500ml-bottle-black.png',
      },
      {
        name: 'Blue',
        className: 'bg-[#68afe4]',
        image: '/images/performa-bottle-blue.png',
      },
    ],
  },

  '1200': {
    size: '1200 ML',
    description: 'Maximum hydration for long days and hard sessions.',
    colors: [
      {
        name: 'Pink',
        className: 'bg-[#d98f91]',
        image: '/images/performa-1200ml-bottle-pink.png',
      },
      {
        name: 'Aqua',
        className: 'bg-[#54c7de]',
        image: '/images/performa-bottle-aqua.png',
      },
      {
        name: 'Black',
        className: 'bg-[#1a1b1f]',
        image: '/images/performa-1200ml-bottle-black.png',
      },
      {
        name: 'White',
        className: 'bg-[#f1f1ef]',
        image: '/images/performa-bottle-white.png',
      },
    ],
  },
}

function ProductPage() {
  const { productId } = Route.useParams()

  const product =
  bottleProducts[productId as keyof typeof bottleProducts]

const [selectedColorIndex, setSelectedColorIndex] = useState(0)

if (!product) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
      Product not found
    </div>
  )
}

const selectedColor =
  product.colors[selectedColorIndex] ?? product.colors[0]

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-24 sm:px-8 lg:pt-28">

        <Link
  to="/"
  hash="first-drop"
  className="inline-flex items-center text-sm text-zinc-400 transition hover:text-white"
>
  ← Back to First Drop
</Link>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Bottle image */}
          <div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-black">
              <img
                src={selectedColor.image}
                alt=""
                className="h-full w-full object-contain p-5"
              />
            </div>
          </div>

          {/* Product information */}
          <div className="flex flex-col justify-center">

            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-zinc-500">
              Performa First Drop
            </p>

            <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
              {product.size}
            </h1>

            <p className="mt-4 max-w-md text-base leading-relaxed text-zinc-400">
              {product.description}
            </p>

            {/* Colors */}
            <div className="mt-10">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-semibold text-white">
                  Choose Color
                </p>

                <p className="text-sm text-zinc-500">
                  {selectedColor.name}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {product.colors.map((color, index) => {
                  const selected = selectedColor.name === color.name

                  return (
                    <button
                      key={color.name}
                      type="button"
                      onClick={() => setSelectedColorIndex(index)}
                      className={`flex items-center gap-3 rounded-full border px-4 py-2.5 transition ${
                        selected
                          ? 'border-white bg-white/10'
                          : 'border-white/10 hover:border-white/30'
                      }`}
                    >
                      <span
                        className={`h-6 w-6 rounded-full border border-white/20 ${color.className}`}
                      />

                      <span className="text-sm font-semibold">
                        {color.name}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  )
}
