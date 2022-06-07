import { useState, useEffect } from 'react';
import Item from './components/Item';

export default function App() {
  // state shopping cart
  const [cart, setCart] = useState({ products: [] });

  // fetch data from API
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5001/api/v1/cart/629ef306f759b25198870225');
      const data = await response.json();
      setCart(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const itemsTotal = cart.products.reduce((acc, item) => acc + item.quantity, 0);

  return (
    // <!-- component -->
    <>
      <div className="flex items-center justify-center py-8">
        {/* <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ ---> */}
        <button className="py-2 px-10 rounded bg-indigo-600 hover:bg-indigo-700 text-white">Open Modal</button>
      </div>
      <div className="w-full h-full bg-black dark:bg-gray-900 bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0" id="chec-div">
        {/* <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ ---> */}
        <div className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="checkout">
          <div className="flex lg:flex-row flex-col justify-center" id="cart">
            <div className="lg:w-2/3 md:w-8/12 w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4 bg-white dark:bg-gray-800 overflow-y-hidden overflow-x-hidden lg:h-screen h-auto" id="scroll">
              <div className="flex items-center text-gray-500 hover:text-gray-600 dark:text-white cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="15 6 9 12 15 18" />
                </svg>
                <p className="text-sm pl-2 leading-none dark:hover:text-gray-200">Continue Shopping</p>
              </div>
              <p className="lg:text-4xl mb-4 text-3xl font-black leading-10 text-gray-800 dark:text-white pt-3">Shopping Cart <span className="float-right text-lg">{itemsTotal} Items</span></p>
              {cart.products.map(item => <Item data={item} key={item.id}/>)}
            </div>
            {/* Order Summary */}
            <div className="lg:w-1/3 md:w-8/12 w-full bg-gray-100 dark:bg-gray-900 h-full">
              <div className="flex flex-col lg:h-screen h-auto lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-6 justify-between overflow-y-auto">
                <div>
                  <p className="lg:text-4xl text-3xl font-black leading-9 text-gray-800 dark:text-white">Order Summary</p>
                  <div className="flex items-center justify-between pt-16">
                    <p className="text-base leading-none text-gray-800 dark:text-white">Items {itemsTotal}</p>
                    <p className="text-base leading-none text-gray-800 dark:text-white">$1,000.00</p>
                  </div>
                  <div className="flex flex-col pt-5">
                    <p className="mb-3 text-base leading-none text-gray-800 dark:text-white">Shipping</p>
                    {/* <p className="text-base leading-none text-gray-800 dark:text-white">$5.00</p> */}
                    <div className="">
                      <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" defaultValue="Choose a shipping option">
                        {/* <option>Choose a shipping option</option> */}
                        <option value="US">Standard Delivery - $5.00</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col pt-5">
                    <p className="mb-3 text-base leading-none text-gray-800 dark:text-white">Promo Code</p>
                    <div className="mb-3 relative text-gray-600">
                      <input type="search" name="search" placeholder="Enter your code" className="bg-white h-10 px-5 pr-10 text-sm focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
                    </div>
                    <button className="text-base w-1/3 leading-none py-5 bg-red-400 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white dark:hover:bg-gray-700">Apply</button>
                  </div>
                </div>
                <div>
                  <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                    <p className="text-2xl leading-normal text-gray-800 dark:text-white">Total Cost</p>
                    <p className="text-2xl font-bold leading-normal text-right text-gray-800 dark:text-white">$1,240</p>
                  </div>
                  <button className="text-base leading-none w-full py-5 bg-purple-700 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white dark:hover:bg-gray-700">Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}