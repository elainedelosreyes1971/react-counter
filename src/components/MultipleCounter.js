import { useState } from "react";
import CounterGroup from "./CounterGroup";
import CounterGroupSum from "./CounterGroupSum";
import CounterSizeGenerator from "./CounterSizeGenerator";
import { useSelector } from "react-redux";

const Counter = () => {
    const counterList = useSelector(state => state.counter.counterList);
    const sum = counterList.reduce((prev, count) => prev + count, 0);

    return (
        <div>
            <CounterSizeGenerator onSizeChange={counterList.change} />
            <CounterGroupSum sum={sum} />
            <CounterGroup counterList={counterList} />
        </div>
    );
};

export default Counter;
