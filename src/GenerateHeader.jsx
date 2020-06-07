import React from 'react';

const GenerateHeader = ({ combinator, id, addRule, addGroup, changeCondition, deleteRule, isFirst }) => {
    return (
        <li className='header-li'>
            <select value={combinator} className='condition-select' onChange={(e) => changeCondition(id, e.currentTarget.value, 'combinator')}>
                <option value='and'>AND</option>
                <option value='or'>OR</option>
            </select>
            <button className='add-rule' onClick={() => { addRule(id) }}>Add Rule</button>
            <button className='add-group' onClick={() => { addGroup(id) }}>Add Group</button>
            {!isFirst && <button className='delete-rule' onClick={() => { deleteRule(id) }}>X</button>}
        </li>
    )
}

export default GenerateHeader;