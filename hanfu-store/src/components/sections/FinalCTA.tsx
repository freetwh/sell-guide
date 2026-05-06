import { product } from "@/config/product";

export function FinalCTA() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Ready to Embrace Timeless Elegance?
        </h2>

        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied customers who have discovered the beauty of hanfu.
          Your journey into cultural elegance starts here.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href={product.checkoutUrl}
            className="inline-flex items-center justify-center px-10 py-5 bg-red-700 text-white text-lg font-semibold rounded-xl hover:bg-red-800 transition-colors duration-200 shadow-lg"
          >
            Shop Now - {product.price}
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-10 py-5 border-2 border-white text-white text-lg font-semibold rounded-xl hover:bg-white hover:text-gray-900 transition-colors duration-200"
          >
            View Full Collection
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Secure Payment
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
            Fast Shipping
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Satisfaction Guarantee
          </div>
        </div>
      </div>
    </section>
  );
}
