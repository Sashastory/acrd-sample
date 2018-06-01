import React from "react";
import TranscationFilter from "../../components/Transactions/TransactionFilter/TransactionFilter";
import TransactionTable from "../../components/Transactions/TransactionTable/TransactionTable";
import TransactionTableControls from '../../components/Transactions/TransactionTable/TransactionTableControls/TransactionTableControls';
import TransactionTabs from '../../components/Transactions/TransactionTabs/TransactionTabs';

const transactions = props => {
    return (
        <div>
            <TranscationFilter/>
            <TransactionTable/>
            <TransactionTableControls/>
            {/*<TransactionTabs/>*/}
        </div>
    );
};

export default transactions;
