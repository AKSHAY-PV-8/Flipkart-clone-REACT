
const CartItems = () => {
    return (

        <div className="block w-full">
            <div className="border-t-[1px] border-solid border-[#f0f0f0] p-6 
                                    relative bg-white max-w-[950px] shadow-[0_1px_1px_0_rgba(0,0,0,0.2)]">

                <div className="flex text-[14px] font-medium leading-[1.4]">
                    <a href="">
                        <div className="h-[112px] w-[112px] relative m-[0, auto] ">
                            <img loading="lazy" class="DByuf4" alt="" src="https://rukminim2.flixcart.com/image/224/224/xif0q/mobile/n/q/h/-original-imahgfmzjj8gtqbc.jpeg?q=90"></img>
                        </div>
                    </a>

                    <div className="px-6 pb-3 align-top min-h-[112px] flex-[1, 1] overflow-hidden max-w-[460px]">
                        <div className="block overflow-hidden text-ellipsis whitespace-nowrap h-[20px]">
                            <a href="" className="text-[16px] text-black leading-1 inline">
                                Name
                            </a>
                        </div>

                        <div className="mt-2 block text-[#878787] text-[14px] h-5 ">
                            Seller:Vision Star
                            <img class="h-[15px] align-middle m-[0, 6px] pl-1 inline" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png"></img>
                        </div>

                        <div className="text-[14px] mr-2.5 text-[#878787] line-through inline-block mt-[18px]">
                            ₹69,900
                        </div>
                        <div className="text-[18px] font-medium mr-2.5 inline-block mt-[18px]">
                            ₹68,900
                        </div>

                        <span className="font-medium text-[#388e3c] text-[14px] mr-2.5">1% Off</span>

                        <div className="inline-block text-[#388e3c] font-medium">
                            <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" class="V7YGsc"><g fill="none"><path d="M-1-1h16v16H-1"></path><path d="M7 0C3.136 0 0 3.136 0 7s3.136 7 7 7 7-3.136 7-7-3.136-7-7-7zm.7 10.5H6.3V6.3h1.4v4.2zm0-5.6H6.3V3.5h1.4v1.4z" fill="#388e3c" class=""></path></g></svg>
                        </div>

                        <div className="flex mt-1">
                            <span className="text-black text-[14px] font-normal">+ ₹149 Protect Promise Fee</span>
                            <div className="flex items-center my-[1px] ml-2 h-[18px] w-[18px]">
                                <img class="_4qMbau CwNMnK" alt="" src="https://rukminim2.flixcart.com/www/400/400/promos/12/06/2023/d08c56e9-603b-4316-88cd-2184e1a4abcd.png?q=50"></img>
                            </div>
                        </div>

                    </div>

                    <div className="align-top flex-none basis-[242px] ml-auto">
                        <ul className="mb-[5px]">
                            <li className="mb-2.5 list-none">
                                <div className="">Delivery by Sun Oct 26</div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-2.5 flex">
                    <div className="[font-family: Inter, -apple-system, Helvetica, Arial, sans-serif]
                                                        text-[14px] font-normal text-black leading-[1.4]">
                        <div className="flex">
                            <button className="text-[#c2c2c2] border-[#e0e0e0] cursor-auto w-7 h-7
                                                                                inline-block border-[1px] border-solid text-[16px] rounded-[50%] pt-[1px] leading-[1]">
                            </button>

                            <div className="inline-block py-[3px] px-[6px] w-[46px] rounded-[2px] bg-white border-[1px] border-solid border-[#c2c2c2] mx-[5px]">
                                <input type="text" className="border-none w-full text-[14px] font-medium text-center" value={1} />
                            </div>

                            <button className="text-black border-[#e0e0e0] cursor-auto w-7 h-7
                                                                                inline-block border-[1px] border-solid text-[16px] rounded-[50%] pt-[1px] leading-[1]" def>
                                +
                            </button>

                        </div>
                    </div>
                    <div className="pl-6 inline-block ">
                        <div className="inline-block uppercase text-[16px] font-medium cursor-pointer mr-[25px]">Save for later</div>
                        <div className="inline-block uppercase text-[16px] font-medium cursor-pointer mr-[25px]">Remove</div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default CartItems
