import img1 from './free-delivery.png'
import img2 from './customer-care.png'
import img3 from './return-of-investment.png'
import img4 from './consumer.png'



const ServiceCard = () => {
    const data = [
        {
            id: 1,
            img: img1,
            head: "FREE SHIPPING",
            sub: "Free shipping on all order"
        },
        {
            id: 2,
            img: img2,
            head: "ONLINE SUPPORT",
            sub: "Online support 24 hours"
        },
        {
            id: 3,
            img: img3,
            head: "MONEY RETURN",
            sub: "Back guarantee under 5 days"
        },

        {
            id: 4,
            img: img4,
            head: "MEMBER DISCOUNT",
            sub: "Onevery order over ₹150"
        }



    ]
    return (
        <div className="w-full py-5 px-5">
            <div className='w-full md:px-5 md:py-2 gap-2 grid grid-cols-1 md:grid-cols-4'>
                {data.map((item, index) => (
                    <div className=' px-1 py-2 md:px-2 md:py-5 border-dotted border-2 border-black gap-5 cursor-pointer flex items-center justify-between' key={index}>
                        <div className=' w-full md:w-1/4'>
                            <img src={item.img} className='w-full' alt="" />
                        </div>
                        <div className=' w-full  md:w-3/4'>
                            <h3 className="text-sm md:text-lg font-bold">{item.head}</h3>
                            <p>{item.sub}</p>
                        </div>
                    </div>
                ))

                }
            </div>
        </div>
    )
}

export default ServiceCard