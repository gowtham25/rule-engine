import React from 'react';

const RuleRowGenerator = ({ changeCondition, rule, attributeMetaData, metaConditions, deleteRule }) => {
    const { operator, value, field, id } = rule || {};
    return (
        <li className='rule-row'>
            <select value={field} onChange={(e) => { changeCondition(id, e.target.value, 'field') }}>
                <option>Select</option>
                {attributeMetaData.map((aValue, aIndex) => {
                    const { attributeKey, attributeDescription } = aValue || {};
                    return <option key={aIndex} value={attributeKey}>{attributeDescription}</option>
                })}
            </select>
            <select value={operator} onChange={(e) => { changeCondition(id, e.target.value, 'operator') }}>
                <option>Select</option>
                {metaConditions.map((aValue, aIndex) => {
                    const { key, label } = aValue || {};
                    return <option key={aIndex} value={key}>{label}</option>
                })}
            </select>
            <input type='text' value={value} onChange={(e) => { changeCondition(id, e.target.value, 'value') }} />
            <button className='delete-rule' onClick={() => { deleteRule(id) }}>X</button>
        </li>
    )
}

export default RuleRowGenerator;