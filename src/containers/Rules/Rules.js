import React from "react";
import RuleFilter from "../../components/Rules/RuleFilter/RuleFilter";
import RuleTable from "../../components/Rules/RuleTable/RuleTable";
import RuleTabs from "../../components/Rules/RuleTabs/RuleTabs";
import EnhancedTable from "../../components/MaterialTestComponent/EnhancedTable";

const rules = () => (
  <div>
    <RuleFilter />
    <RuleTable />
    <RuleTabs />
  </div>
);

export default rules;
