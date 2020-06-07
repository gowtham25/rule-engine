import React, { useState } from 'react';

const RuleRowGenerator = ({ changeCondition, rule, attributeMetaData, metaConditions, deleteRule }) => {
    const [condData, setCondData] = useState([]);
    const [type, setType] = useState('');
    const { operator, value, field, id } = rule || {};
    const getType = (id, value, key) => {
        changeCondition(id, value, key);
        const typeData = {
            rental_amount: 'number',
            rental_tenure: 'number',
            customer_age: 'number',
            customer_zip: 'comma',
            order: 'text'
        }
        setType(typeData[value]);
        setCondData(metaConditions[typeData[value]]);
    }
    return (
        <li className='rule-row'>
            <select value={field} onChange={(e) => { getType(id, e.target.value, 'field') }}>
                <option>Select</option>
                {attributeMetaData.map((aValue, aIndex) => {
                    const { attributeKey, attributeDescription } = aValue || {};
                    return <option key={aIndex} value={attributeKey}>{attributeDescription}</option>
                })}
            </select>
            <select value={operator} onChange={(e) => { changeCondition(id, e.target.value, 'operator') }}>
                <option>Select</option>
                {condData.map((aValue, aIndex) => {
                    const { key, label } = aValue || {};
                    return <option key={aIndex} value={key}>{label}</option>
                })}
            </select>
            <div className='value-container'>
                <input type='text' value={value} onChange={(e) => { changeCondition(id, e.target.value, 'value') }} />
                {type === 'comma' && <span className='message'>* comma seperated</span>}
            </div>
            <button className='delete-rule' onClick={() => { deleteRule(id) }}>X</button>
        </li>
    )
}

export default RuleRowGenerator;