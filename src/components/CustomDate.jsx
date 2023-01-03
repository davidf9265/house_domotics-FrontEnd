import React, {useEffect, useState} from "react";


const CustomDate = ({className}) => {
    const [customDateState, setCustomDateState] = useState()

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setCustomDateState(date.toLocaleDateString())
        }, 1000);
    }, []);
    
    return (
        <div className={className}>
            {customDateState}
        </div>
    );
};

export default CustomDate;