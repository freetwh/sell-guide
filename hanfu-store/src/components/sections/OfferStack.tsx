import { product } from "@/config/product";

export function OfferStack() {
  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-amber-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12">
          <span className="inline-block px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-6">
            Special Offer
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {product.offer.headline}
          </h2>

          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {product.offer.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-red-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">{product.offer.urgency}</span>
            </div>
            <div className="flex items-center gap-2 text-green-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">{product.offer.guarantee}</span>
            </div>
          </div>

          <a
            href={product.checkoutUrl}
            className="inline-flex items-center justify-center px-10 py-5 bg-red-800 text-white text-lg font-semibold rounded-xl hover:bg-red-900 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Claim Your Discount Now
          </a>

          <p className="mt-4 text-sm text-gray-500">
            Use code <span className="font-mono bg-gray-100 px-2 py-1 rounded">HANFU30</span> at checkout
          </p>
        </div>
      </div>
    </section>
  );
}
