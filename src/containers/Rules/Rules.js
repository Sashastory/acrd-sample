import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import RuleFilter from '../../components/Rules/RuleFilter/RuleFilter';
import RuleTable from '../../components/Rules/RuleTable/RuleTable';
import RuleTabs from '../../components/Rules/RuleTabs/RuleTabs';

class Rules extends Component {
    render() {

        const { classes } = this.props;

        return (
            <div>
                <RuleFilter/>
                <RuleTable/>
                <RuleTabs />
            </div>    
        );
    }
}

export default Rules;