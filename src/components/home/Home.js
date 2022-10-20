import {details} from "../search/Search";
import {useSearchParams} from "react-router-dom";
import MainData from "./MainData";
import Transactions from "./Transactions";
import {useState} from "react";
import './Home.css';

export let mainData;

function Home() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchText, setSearchText] = useState('');
    let [mainData, setMainData] = useState('');
    const hashQuery = searchParams.get('hash');

     mainData = {
        "hash160": details.hash160,
        "address": details.address,
        "n_tx": details.n_tx,
        "n_unredeemed": details.n_unredeemed,
        "total_received": details.total_received,
        "total_sent": details.total_sent,
        "final_balance": details.final_balance
    };
    const txs = details.txs;
    if (details.length === 0) {
        return (
            <h1 className="font-bold text-center text-gray-500">Type address to search data</h1>
        )
    } else if (hashQuery === 'undefined') {
        return (
            <h1 className="font-bold text-center text-red-500">address not found</h1>
        )
    } else {
        return (
            <div>
                <MainData mainData={mainData}/>
                <div className='rounded-div my-10 py-4 w-screen' id="div-table">
                    <div className='flex justify-end my-3'>
                        <input onChange={(e) => setSearchText(e.target.value)} type="text"
                               className='bg-gray-100 dark:bg-gray-600 rounded-md py-1 indent-3 outline-none'
                               placeholder='Search'/>
                    </div>
                    <table className='w-full border-collapse text-center'>
                        <thead className='dark:text-white'>
                        <tr className='border-b'>
                            <th id='subscription'></th>
                            <th className='text-left'>Transaction hash</th>
                            <th>Received time</th>
                            <th>Status</th>
                            <th>Size</th>
                            <th className='hidden md:table-cell'>No of confirmations</th>
                            <th className='hidden md:table-cell'>Total BTC input</th>
                            <th>Total BTC output</th>
                            <th>Total fees</th>
                        </tr>
                        </thead>
                        <tbody className='dark:text-white'>
                        {txs.filter((value) => {
                            if (searchText === "") {
                                return value
                            } else if (value.hash.toLowerCase().includes(searchText.toLowerCase())) {
                                return value
                            }
                        }).map((transactions) => (
                            <Transactions key={transactions.hash} transactions={transactions}/>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Home;