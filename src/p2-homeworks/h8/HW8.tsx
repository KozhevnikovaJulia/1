import React, {useState} from "react";
import {homeWorkReducer} from "./bll/homeWorkReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from "./HW8.module.css";

const initialPeople = [
    {_id: 0, name: "Кот", age: 3},
    {_id: 1, name: "Александр", age: 66},
    {_id: 2, name: "Коля", age: 16},
    {_id: 3, name: "Виктор", age: 44},
    {_id: 4, name: "Дмитрий", age: 40},
    {_id: 5, name: "Ирина", age: 55},
]

function HW8() {
    debugger
    const [people, setPeople] = useState(initialPeople);

    let finalPeople = people.map(p => <div key={p._id}>
            {p.name}, возраст: {p.age}
        </div>
    )
 
    const sortUp = () =>   setPeople(homeWorkReducer(initialPeople, {type: "SORT-NAME-UP"}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: "SORT-NAME-DOWN"}))
    const check18 = () => setPeople(homeWorkReducer(initialPeople, {type: "CHECK-AGE-18", age:18}))
    return (
        <div>
            <hr/>
           <h3> homeworks 8</h3>

            {/*should work (должно работать)*/}

            {finalPeople}
            
            <div className = {s.button}>
                <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
                <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
                <div><SuperButton onClick={check18}>check 18</SuperButton></div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    );
}

export default HW8;
