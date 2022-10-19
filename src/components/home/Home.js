import {details} from "../search/Search";
import {useSearchParams} from "react-router-dom";
import MainData from "./MainData";

function Home() {
    const [searchParams, setSearchParams] = useSearchParams();
    const hashQuery = searchParams.get('hash');
    console.log("Details:" + details);

    const mainData = {
        "hash160": details.hash160,
        "address": details.address,
        "n_tx": details.n_tx,
        "n_unredeemed": details.n_unredeemed,
        "total_received": details.total_received,
        "total_sent": details.total_sent,
        "final_balance": details.final_balance
    };

    const txs = details.txs;
    console.log(`Transactions: ${txs}`);
    console.log(`main data: ${mainData}`);
    if (details.length === 0) {
        return (
            <h1>Type address to search data</h1>
        )
    } else if (hashQuery === 'undefined') {
        return (
            <h1>address not found</h1>
        )
    } else {
        return (
            <div>
                <MainData mainData={mainData}/>
                <div className='rounded-div my-10 py-4'>
                    <div className='flex justify-end my-3'>
                        {/*<input onChange={(e)=>setSearchText(e.target.value)} type="text" className='bg-gray-100 dark:bg-gray-600 rounded-md py-1 indent-3 outline-none'  placeholder='Search'/>*/}
                    </div>
                    <table className='w-full border-collapse text-center'>
                        <thead className='dark:text-white'>
                        <tr className='border-b'>
                            <th></th>
                            <th>#</th>
                            <th className='text-left'>Transaction hash</th>
                            <th>Received time</th>
                            <th>Status</th>
                            <th>Size (bytes)</th>
                            <th className='hidden md:table-cell'>No of confirmations</th>
                            <th className='hidden md:table-cell'>Total BTC input</th>
                            <th>Total BTC output</th>
                            <th>Total fees</th>
                        </tr>
                        </thead>
                        <tbody className='dark:text-white'>
                        {/*{coins.filter((value)=>{*/}
                        {/*    if(searchText === ""){*/}
                        {/*        return value*/}
                        {/*    }else if(value.name.toLowerCase().includes(searchText.toLowerCase())){*/}
                        {/*        return value*/}
                        {/*    }*/}
                        {/*}).map((coin)=> (*/}
                        {/*    <CoinItem key={coin.id} coin={coin}/>*/}
                        {/*))}*/}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Home;