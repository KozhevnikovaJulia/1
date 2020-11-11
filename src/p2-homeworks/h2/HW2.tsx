import React, {useState} from "react";
import Affairs from "./Affairs";
import Affair from "./Affair";


// types
export type AffairPriorityType = string;
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
};
export type FilterType = "all" | AffairPriorityType;

// constants
const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: "React", priority: "high"},
    {_id: 2, name: "ani", priority: "low"},
    {_id: 4, name: "work", priority: "high"},
    {_id: 5, name: "html & css", priority: "middle"},
];

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => { // need to fix any
    if (filter === "all") return affairs;
    if (filter === "high") return affairs.filter(affair =>affair.priority === "high");
    if (filter === "middle") return affairs.filter(affair =>affair.priority === "middle");
    if (filter === "low") return affairs.filter(affair =>affair.priority === "low");
    else return affairs;
}

export const deleteAffair = (affairs: Array<AffairType>, _id: number): any => { // need to fix any
    return affairs.filter(affair => affair._id !== _id);
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType> >(defaultAffairs);
    const [filter, setFilter] = useState<FilterType>("all");

    const filteredAffairs = filterAffairs(affairs, filter);
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id));

    return (
        <div>
            <hr/>
           <h3>homeworks 2</h3>

            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />
           {/* <AlternativeAffairs/>*/}

        </div>
    );
}

export default HW2;
