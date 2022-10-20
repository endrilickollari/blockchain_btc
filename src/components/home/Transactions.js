import React from "react";
import {AiOutlineHeart} from "react-icons/ai";
import {useState} from "react";
import moment from 'moment';
import './Transactions.css';
import {formatToBtc} from '../../config/api';
import Toast from 'light-toast';

function Transactions({transactions}) {
    const date = moment(new Date(transactions.time * 1000)).format('DD/MM/YYYY hh:MM');
    let status = '';
    let statusBool;
    if (transactions.block_index === null && transactions.block_height === null) {
        status = 'Unconfirmed';
        statusBool = false;
    } else {
        status = 'Confirmed';
        statusBool = true;
    }

    const [subscribedTransaction, setSubscribedTransaction] = useState(false);

    const handleSubscribedTransaction = () => {
        setSubscribedTransaction(prevTransaction => !prevTransaction)
    }

    const subscribeTransaction = () => {
        handleSubscribedTransaction();
        Toast.success(`Transaction ${transactions.hash} subscribed!`, 3000, () => {
            return;
        })
    }
    return (
        <tr className='h-[75px] border-b overflow-hidden p-0.5'>
            <td>
                <button onClick={subscribeTransaction}>
                    {subscribedTransaction ? <AiOutlineHeart color='red'/> : <AiOutlineHeart/>}
                </button>
            </td>
            <td>
                <p id="hash" className="text-blue-600 font-mono">
                    {transactions.hash}
                </p>

            </td>
            <td>
                {date}
            </td>
            <td>
                <p
                    className={statusBool ? "bg-green-200 font-semibold text-green-700" : "bg-red-200 font-semibold text-red-700"}
                    id="status">
                    {status}
                </p>
            </td>
            <td>{transactions.size.toLocaleString()} bytes</td>
            <td className='w-[200px] hidden md:table-cell'>-</td>
            <td className='w-[200px] hidden md:table-cell'>{formatToBtc(transactions.vin_sz)}</td>
            <td className='w-[200px] hidden md:table-cell'>{formatToBtc(transactions.vout_sz)}</td>
            <td>
                {formatToBtc(transactions.fee)}
            </td>
            {/*<ToastContainer/>*/}
        </tr>
    )
}

export default Transactions;