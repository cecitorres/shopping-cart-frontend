const Item = ({ data }) => {
  return (<div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
    {/* Image */}
    <div className="md:w-2/12 2xl:w-1/4 w-full">
      <img src={data.image} alt="Black Leather Bag" className="h-full object-center object-cover md:block hidden" />
      {/* <img src="https://i.ibb.co/g9xsdCM/Rectangle-37.pngg" alt="Black Leather Bag" className="md:hidden w-full h-full object-center object-cover" /> */}
    </div>
    <div className="md:pl-3 md:w-10/12 2xl:w-3/4 flex flex-col justify-center">
      {/* <p className="text-xs leading-3 text-gray-800 dark:text-white md:pt-0 pt-4">RF293</p> */}
      <div className="flex items-center justify-between w-full pt-1">
        <p className="text-base font-black leading-none text-gray-800 dark:text-white">{data.name}</p>
        <select aria-label="Select quantity" className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
          <option>01</option>
          <option>02</option>
          <option>03</option>
        </select>
        <p className="text-base font-black leading-none text-gray-800 dark:text-white">${data.price}</p>
        <p className="text-base font-black leading-none text-gray-800 dark:text-white">${data.quantity * data.price}</p>
      </div>
      <p className="w-96 text-xs leading-3 text-gray-600 dark:text-white">{data.description}</p>
      <div className="flex items-center justify-between pt-5">
        <div className="flex items-center">
          <p className="text-xs leading-3 underline text-red-500 cursor-pointer">Remove</p>
        </div>
      </div>
    </div>
  </div>);
}

export default Item;