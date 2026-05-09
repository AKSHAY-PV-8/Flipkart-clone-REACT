import { useParams } from "react-router-dom"
import CartItems from "../components/molecules/CartItems"
import NavBar from "../components/organisums/NavBar"
import { useEffect} from "react"
import { productData } from "../data/ProductData"

const AddtoCartPage = () => {
    const {id} = useParams()

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        if(!storedCart.includes(id)){
            storedCart.push(id)
        localStorage.setItem("cart",JSON.stringify(storedCart))
        }
        const cart = JSON.parse(localStorage.getItem("cart"))
        console.log("cart", cart)
    },[id])

    const cart = JSON.parse(localStorage.getItem("cart"))

    const productsInCart = productData.filter(p => cart.includes(p.id.toString()))

    console.log("product in cart",productsInCart)
                                                                                                                                  
    return (
        <div>
            <NavBar />

            <div className="max-w-[1260px] m-[0,auto] mt-4">
                <div className="w-full relative m-[0, auto] min-w-[978px] max-w-[1680px] p-2">

                    <div className="flex flex-row">

                        <div className="felx flex-col">
                            <div className="pb-[10px] block w-full">
                                <div className="flex justify-center flex-row py-3 px-4 bg-white rounded-[4px] shadow-[0_0_2px_rgba(0,0,0,0.12)]">

                                    <div className="flex flex-3 font-[14px] justify-center">
                                        <div className="text-black leading-[20px] mr-[5px]">
                                            From Saved Addresses
                                        </div>
                                    </div>

                                    <div className="flex felx-1 justify-center items-end">
                                        <button className="border-[1px] border-solid border-[#e0e0e0] bg-white 
                                                    rounded-1 py-2.5 px-4 text-[#2874f0] cursor-pointer font-medium">
                                            Enter Delivery Princode
                                        </button>
                                    </div>

                                </div>
                            </div>

                            <CartItems/>

                            <div className="sticky top-16 z-2 self-start block">
                                <div className="border-t-[1px] border-solid border-[#f0f0f0] bg-white px-[22px] py-4
                                                shadow-[0_-2px_10px_0_rgba(0,0,0,0.1)] text-right">

                                    <button className="w-auto bg-[#fb641b] shadow-[0_1px_2px_0_rgba(0, 0, 0, .2)]
                                                    py-4 px-[30px] min-w-[250px] uppercase rounded-[2px] text-[16px] 
                                                    font-medium relative text-white">
                                        <span>place Order</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="pl-4 sticky top-16 bottom-0 z-2 flex flex-col">
                            <div className="rounded-[2px] min-h-[47px] shadow-[0_1px_1px_0_rgba(0, 0, 0, .2)]">
                                <span className="text-[16px] uppercase block text-[#878787] rounded-[2px]">Price details</span>

                                <div className="px-6">
                                    <div className="flex justify-between my-5 items-start">
                                        <div className="max-w-[68%] flex">
                                            <div className="flex items-center whitespace-nowrap">Price (2 items)</div>
                                            <div className="ml-2 min-h-4 min-w-4">
                                                <div className="pt-[100%] w-full relative">
                                                    <div className="absolute top-0 left-o w-full flex justify-center items-center">
                                                        <img class="_4qMbau CwNMnK" alt="" src="https://rukminim2.flixcart.com/www/400/400/promos/10/04/2020/f1887cd2-f5dc-4103-880d-8c24ea271f91.png?q=50"></img>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="">
                                            <span className="">₹1,39,800</span>
                                        </div>
                                    </div>

                                    <div className="flex justify-between my-5 items-start">
                                        <div className="max-w-[68%] flex">
                                            <div className="flex items-center whitespace-nowrap">Discount</div>
                                        </div>

                                        <div className="">
                                            <span className="text-green-700">-₹1,39,800</span>
                                        </div>
                                    </div>

                                    <div className="flex justify-between my-5 items-start">
                                        <div className="max-w-[68%] flex">
                                            <div className="flex items-center whitespace-nowrap">Protect Promise Fee</div>
                                            <div className="ml-2 min-h-4 min-w-4">
                                                <div className="pt-[100%] w-full relative">
                                                    <div className="absolute top-0 left-o w-full flex justify-center items-center">
                                                        <img class="_4qMbau CwNMnK" alt="" src="https://rukminim2.flixcart.com/www/400/400/promos/10/04/2020/f1887cd2-f5dc-4103-880d-8c24ea271f91.png?q=50"></img>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="">
                                            <span className="">₹298</span>
                                        </div>
                                    </div>

                                    <div className="border-t border-dashed border-t-[#e0e0e0] font-medium text-[18px]">
                                        <div className="flex justify-between my-5 items-start">
                                            <div className="">Total Amount</div>
                                            <div className="">₹298</div>
                                        </div>
                                    </div>

                                    <div className="border-t border-dashed text-green-600 border-t-[#e0e0e0] font-medium text-[18px]">
                                        You will save ₹1,702 on this order
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default AddtoCartPage
