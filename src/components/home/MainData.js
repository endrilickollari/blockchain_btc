import {FaBitcoin} from 'react-icons/fa';
import {formatToBtc} from '../../config/api'

function MainData({mainData}) {
    const changeCurrency = () => {
        mainData.n_tx = 80;
        console.log(mainData.n_tx)
    }
    return (
        <div className="w-full bg-white rounded-lg border shadow-md dark:bg-gray-800 dark:border-gray-700">
            <ul className="hidden text-sm font-medium text-center text-gray-500 rounded-lg divide-x divide-gray-200 sm:flex dark:divide-gray-600 dark:text-gray-400"
                id="fullWidthTab" data-tabs-toggle="#fullWidthTabContent" role="tablist">
                <li className="w-full">
                    <div id="stats-tab" data-tabs-target="#stats" role="tab" aria-controls="stats"
                            aria-selected="true"
                            className="inline-block p-4 w-full bg-gray-50 rounded-tl-lg hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500">Main
                        Data
                    </div>
                </li>
            </ul>
            <div id="fullWidthTabContent" className="border-t border-gray-200 dark:border-gray-600">
                <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="stats" role="tabpanel"
                     aria-labelledby="stats-tab">
                    <dl className="grid grid-cols-2 gap-8 p-4 mx-auto max-w-screen-xl text-gray-900 sm:grid-cols-3 xl:grid-cols-5 dark:text-white sm:p-8">
                        <div className="flex flex-col justify-center items-center hover:scale-105 ease-out duration-300">
                            <dt className="mb-2 text-3xl font-extrabold">{mainData.n_tx.toLocaleString()}</dt>
                            <dd className="font-light text-gray-500 dark:text-gray-400">Confirmed transactions</dd>
                        </div>
                        <div className="flex flex-col justify-center items-center hover:scale-105 ease-out duration-300">
                            <dt className="mb-2 text-3xl font-extrabold">{formatToBtc(mainData.total_received)}</dt>
                            <dd className="font-light text-gray-500 dark:text-gray-400">Total BTC received</dd>
                        </div>
                        <div className="flex flex-col justify-center items-center hover:scale-105 ease-out duration-300">
                            <dt className="mb-2 text-3xl font-extrabold">{formatToBtc(mainData.total_sent)}</dt>
                            <dd className="font-light text-gray-500 dark:text-gray-400">Total BTC spent</dd>
                        </div>
                        <div className="flex flex-col justify-center items-center hover:scale-105 ease-out duration-300">
                            <dt className="mb-2 text-3xl font-extrabold">{formatToBtc(mainData.n_unredeemed)}</dt>
                            <dd className="font-light text-gray-500 dark:text-gray-400">Total BTC unspent</dd>
                        </div>
                        <div className="flex flex-col justify-center items-center hover:scale-105 ease-out duration-300">
                            <dt className="mb-2 text-3xl font-extrabold">{formatToBtc(mainData.final_balance)}</dt>
                            <dd className="font-light text-gray-500 dark:text-gray-400">Current address balance</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>

    )
}

export default MainData;