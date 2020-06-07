import React, { useState } from 'react';
import './App.css';
import RuleElementGenerator from './RuleElementGenerator';

const idGenerator = () => Math.floor(Math.random() * 90000) + 10000;

function App() {
	const [ruleData, setRuleData] = useState({
		"id": idGenerator(),
		"rules": [],
		"combinator": "and",
	});

	const addObjectById = (obj, id, newObj = {}) => {
		let rl = obj.rules
		if (obj.id === id) {
			rl.push(newObj)
		}
		if (obj.hasOwnProperty('rules')) {
			rl.forEach((item, index) => addObjectById(obj.rules[index], id, newObj));
		}
		return obj;
	}
	const deleteObjectById = (obj, id) => {
		let rl = obj.rules;
		if (obj.hasOwnProperty('rules')) {
			rl.forEach((item, index) => {
				if (item.id === id) {
					rl.splice(index, 1);
				} else {
					deleteObjectById(obj.rules[index], id)
				}
			});
		}
		return obj;
	}

	const addPropByObjectById = (obj, id, val, key) => {
		if (obj.id === id) {
			obj[key] = val;
			return obj;
		}
		let rl = obj.rules;
		if (obj.hasOwnProperty('rules')) {
			rl.forEach((item, index) => {
				if (item.id === id) {
					rl[index][key] = val;
				} else {
					addPropByObjectById(obj.rules[index], id, val, key);
				}
			});
		}
		return obj;
	}
	const submitData = () => {
		fetch('https://www.mocky.io/v2/5185415ba171ea3a00704eed', {
			method: 'PUT',
			body: JSON.stringify(ruleData),
			headers: {
				'Content-type': 'application / json; charset = UTF - 8'
			}
		})
			.then(response => response.json())
			.then(json => console.log(json))

	};

	const addRule = (id) => {
		setRuleData(addObjectById(JSON.parse(JSON.stringify(ruleData)), id, { "id": idGenerator(), field: "", value: "", operator: "" }));
	}

	const addGroup = (id) => {
		setRuleData(addObjectById(JSON.parse(JSON.stringify(ruleData)), id, { "id": idGenerator(), rules: [], combinator: "and" }));
	}

	const deleteRule = (id) => {
		setRuleData(deleteObjectById(JSON.parse(JSON.stringify(ruleData)), id));
	}

	const changeCondition = (id, value, key) => {
		setRuleData(addPropByObjectById(JSON.parse(JSON.stringify(ruleData)), id, value, key));
	}

	return (
		<div className="App">
			<h3>Rule Engine</h3>
			<div className='rule-engine-container'>
				<RuleElementGenerator
					ruleData={ruleData}
					addRule={addRule}
					addGroup={addGroup}
					changeCondition={changeCondition}
					deleteRule={deleteRule}
					isFirst={true}
				/>
			</div>
			<div className='button-container'>
				<button className='submit-data' onClick={() => { submitData() }}>Submit</button>
			</div>
		</div>
	);
}

export default App;
