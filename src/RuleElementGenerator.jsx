import React from 'react';
import { attributeMetaData, metaConditions } from './Config/config.js';
import GenerateHeader from './GenerateHeader';
import RuleRowGenerator from './RuleRowGenerator';

const RuleElementGenerator = ({ ruleData, isFirst, addRule, addGroup, changeCondition, deleteRule }) => {
    const { rules, id, value, combinator } = ruleData || {};
    return (
        <ul className='tree'>
            <GenerateHeader
                id={id}
                key={id}
                addRule={addRule}
                addGroup={addGroup}
                combinator={combinator}
                changeCondition={changeCondition}
                deleteRule={deleteRule}
                isFirst={isFirst}
            />
            {rules ? rules.map((rule, index) => {
                const { rules: rRule, id: rId } = rule || {};
                return (<>
                    {rRule ? <RuleElementGenerator
                        ruleData={rule}
                        key={rId}
                        isFirst={false}
                        addRule={addRule}
                        addGroup={addGroup}
                        changeCondition={changeCondition}
                        deleteRule={deleteRule}
                    /> : <RuleRowGenerator
                            metaConditions={metaConditions}
                            attributeMetaData={attributeMetaData}
                            changeCondition={changeCondition}
                            rule={rule}
                            key={rId}
                            deleteRule={deleteRule}
                        />}
                </>)
            }) : <li>{value}</li>}
        </ul>
    )
}

export default RuleElementGenerator;