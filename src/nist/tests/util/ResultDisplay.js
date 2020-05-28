import React from 'react';


const ResultDisplay = (props)=>(
    <div>
        <h3>Результат: </h3>
        <div className={"nist-result-display"}>
            {Array.isArray(props.result) ? <table className={"nist-test-array-display"}>
                    <thead>
                        <th>Тест</th>
                        <th>P-value</th>
                        <th>Випадковість</th>
                    </thead>
                    {props.result.map((item, index) =>(
                        <tr key={index}>
                            <td>{props.data[index]}</td>
                            <td>{item.pValue.toFixed(10)}</td>
                            <td className={item.pValue < 0.1 ? "non-random":"random"} />
                        </tr>
                ))}
                </table>
                :
                <>
                    <h4>P-value: {props.result.pValue.toFixed(10)}</h4>
                    <h4>{props.result.pValue>0.1 ?
                        <span className={"random"}>Послідовність випадкова</span>
                        :<span className={"non-random"}>Послідовність не випадкова</span>}</h4>
                </>
            }

        </div>
    </div>
)
export default ResultDisplay;