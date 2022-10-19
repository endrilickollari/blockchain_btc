import {FaBitcoin} from 'react-icons/fa';

function MainData({mainData}) {
    return (
        <div className='rounded-div py-5'>
            <h1 className='text-3xl font-semibold my-5'>Main data</h1>
            <div className='grid gap-3 md:grid-cols-2 xl:grid-cols-3 sm:grid-cols-1'>
                <div>
                    <div className='rounded-div p-3 hover:scale-105 ease-out duration-300'>
                        <div className='flex justify-between items-center'>
                            <div>
                                {/*<img className='rounded-full' src=""  />*/}
                                <div>
                                    {/*<Link to={`/coin/${coin.item?.id}`}>*/}
                                    {/*    <h2 className='font-semibold text-xl'>{coin.item.name}</h2>*/}
                                    {/*</Link>*/}
                                    <h5 className='text-sm font-bold text-gray-500'>{mainData.hash160}</h5>
                                </div>
                            </div>
                            <div className='flex'>
                                <FaBitcoin color='orange' size={15} className="relative top-[6px] right-1"/>
                                {/*<p>{coin.item.price_btc.toFixed(9)}</p>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainData;