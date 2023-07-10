export default function Page() {

  const faqs = [
    {
      q: 'What sites can I import products from?',
      a: 'You can import products from Amazon, Walmart, AliExpress, and Costco. We are adding more sites soon!',
    },
    {
      q: 'How many products can I import?',
      a: 'You can import as many products as you want. There is no limit.',
    },
    {
      q: 'How many stores can I connect?',
      a: 'You can connect as many stores as you want. There is no limit.',
    },
    {
      q: 'Do you offer a free trial?',
      a: 'Yes, we offer a 7 day free trial. No credit card required.',
    },
    {
      q: 'Can I cancel my subscription at any time?',
      a: 'Yes, you can cancel your subscription at any time.',
    },
    {
      q: 'Do you offer support?',
      a: 'Yes, we offer 24/7 support. You can contact us at support@importlio.com.',
    },
  ];
  return (
    <section classname="bg-white dark:bg-gray-900">
      <div classname="container px-6 py-12 mx-auto">
        <h1 classname="text-2xl font-semibold text-center text-gray-800 lg:text-3xl dark:text-white">
          Have any Questions?
        </h1>

        <div classname="mt-8 xl:mt-16 lg:flex lg:-mx-12">
          <div classname="lg:mx-12">
            <h1 classname="text-xl font-semibold text-gray-800 dark:text-white">
              Table of Content
            </h1>

            <div classname="mt-4 space-y-4 lg:mt-8">
              <a
                href="#"
                classname="block text-blue-500 dark:text-blue-400 hover:underline"
              >
                General
              </a>
              <a
                href="#"
                classname="block text-gray-500 dark:text-gray-300 hover:underline"
              >
                Trust & Safety
              </a>
              <a
                href="#"
                classname="block text-gray-500 dark:text-gray-300 hover:underline"
              >
                Services
              </a>
              <a
                href="#"
                classname="block text-gray-500 dark:text-gray-300 hover:underline"
              >
                Billing
              </a>
              <a
                href="#"
                classname="block text-gray-500 dark:text-gray-300 hover:underline"
              >
                Office Cleaning
              </a>
            </div>
          </div>

          <div classname="flex-1 mt-8 lg:mx-12 lg:mt-0">
            <div>
              <button classname="flex items-center focus:outline-none">
                <svg
                  classname="flex-shrink-0 w-6 h-6 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 12H4"
                  ></path>
                </svg>

                <h1 classname="mx-4 text-xl text-gray-700 dark:text-white">
                  How i can play for my appoinment ?
                </h1>
              </button>

              <div classname="flex mt-8 md:mx-10">
                <span classname="border border-blue-500"></span>

                <p classname="max-w-3xl px-4 text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magni, eum quae. Harum officiis reprehenderit ex quia ducimus
                  minima id provident molestias optio nam vel, quidem iure
                  voluptatem, repellat et ipsa.
                </p>
              </div>
            </div>

            <hr classname="my-8 border-gray-200 dark:border-gray-700" />

            <div>
              <button classname="flex items-center focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  classname="flex-shrink-0 w-6 h-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>

                <h1 classname="mx-4 text-xl text-gray-700 dark:text-white">
                  What can i expect at my first consultation ?
                </h1>
              </button>
            </div>

            <hr classname="my-8 border-gray-200 dark:border-gray-700" />

            <div>
              <button classname="flex items-center focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  classname="flex-shrink-0 w-6 h-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>

                <h1 classname="mx-4 text-xl text-gray-700 dark:text-white">
                  What are your opening house ?
                </h1>
              </button>
            </div>

            <hr classname="my-8 border-gray-200 dark:border-gray-700" />

            <div>
              <button classname="flex items-center focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  classname="flex-shrink-0 w-6 h-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>

                <h1 classname="mx-4 text-xl text-gray-700 dark:text-white">
                  Do i need a referral ?
                </h1>
              </button>
            </div>

            <hr classname="my-8 border-gray-200 dark:border-gray-700" />

            <div>
              <button classname="flex items-center focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  classname="flex-shrink-0 w-6 h-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>

                <h1 classname="mx-4 text-xl text-gray-700 dark:text-white">
                  Is the cost of the appoinment covered by private health
                  insurance ?
                </h1>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
