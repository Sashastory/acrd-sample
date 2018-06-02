import React, {Component} from "react";
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import TransactionFilter from "../../components/Transactions/TransactionFilter/TransactionFilter";
import TransactionTable from "../../components/Transactions/TransactionTable/TransactionTable";
import TransactionTableControls from '../../components/Transactions/TransactionTable/TransactionTableControls/TransactionTableControls';
import TransactionTabs from '../../components/Transactions/TransactionTabs/TransactionTabs';

class Transactions extends Component {

    componenDidMount() {
        this.props.onFetchTransactions();
    }

    render() {

        const { transactions } = this.props;

        return (
            <div>
                <TransactionFilter/>
                <TransactionTable transactions={transactions}/>
                {/*<TransactionTableControls/>*/}
                {/*<TransactionTabs/>*/}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        transactions: state.transactionsR.transactions
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchTransactions: () => dispatch(actions.fetchTransactions())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
