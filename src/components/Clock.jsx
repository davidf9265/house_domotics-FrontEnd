import React, {useEffect, useState} from "react";


const Clock = ({ className }) => {
    const [clockState, setClockState] = useState()

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString())
        }, 1000);
    }, []);
    
    return (
        <div className = {className}>
            {clockState}
        </div>
    );
};

export default Clock;