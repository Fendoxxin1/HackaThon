import style from "./transaction.module.css";

const Transaction = () => {
    return (
        <section>
            <div>
                <div>
                    {" "}
                    <h1>Transactions</h1>
                    <p>Review and manage your curated financial record.</p>
                </div>
                <div>
                    <button>+Add Transaction</button>
                </div>
                {/* nav qismi */}
                <div>
                    <ul>
                        <li>All Activity</li>
                        <li>Income</li>
                        <li>Expenses</li>
                        <li>Pending</li>
                    </ul>
                    <button>Oct 2023 - Nov 2023</button>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>DATE</th>
                        <th>DESCRIPTION</th>
                        <th>TYPE</th>
                        <th>AMOUNT</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
            </table>
        </section>
    );
};

export default Transaction;
