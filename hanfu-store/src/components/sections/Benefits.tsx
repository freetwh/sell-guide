import { product } from "@/config/product";

export function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Hanfu?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the perfect blend of tradition and modernity with our carefully crafted collection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {product.benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative p-8 bg-gradient-to-br from-amber-50 to-red-50 rounded-2xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-red-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
