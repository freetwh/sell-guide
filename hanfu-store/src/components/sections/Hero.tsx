import { product } from "@/config/product";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-red-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-6">
              {product.hero.eyebrow}
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              {product.hero.headline}
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              {product.hero.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={product.checkoutUrl}
                className="inline-flex items-center justify-center px-8 py-4 bg-red-800 text-white font-semibold rounded-lg hover:bg-red-900 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Shop Now - {product.price}
              </a>
              <a
                href="#benefits"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-red-800 text-red-800 font-semibold rounded-lg hover:bg-red-50 transition-colors duration-200"
              >
                Learn More
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 justify-center lg:justify-start text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Free Shipping
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                30-Day Returns
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Secure Checkout
              </div>
            </div>
          </div>

          {/* Product image */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[3/4] bg-gradient-to-br from-red-100 to-amber-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-8xl mb-4">👘</div>
                  <p className="text-gray-600 text-lg">Product Image Placeholder</p>
                  <p className="text-gray-400 text-sm mt-2">Replace with actual hanfu photo</p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 z-20 bg-red-800 text-white px-6 py-3 rounded-full shadow-lg transform rotate-12">
              <span className="font-bold text-lg">{product.price}</span>
              <span className="text-red-200 line-through ml-2 text-sm">{product.compareAtPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
