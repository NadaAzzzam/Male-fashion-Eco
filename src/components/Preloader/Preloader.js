import React, { useEffect, useState } from 'react';

function Preloader(props) {
    const [progress, setProgress] = useState(0);
    const [isDone, setIsDone] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }
                const diff = Math.random() * 10;
                if (Math.min(oldProgress + diff, 100) === 100) {
                    setIsDone(false)
                }
                return Math.min(oldProgress + diff, 100);
            });
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);
    return (
        <div style={isDone === false ? { display: 'none' } : {}} className="loadmain">
            <div className="loadtext">
                Male Fashion ...
            </div>
            <div className="loadbar">
                <div style={{ width: progress }} id="fill"></div>
            </div>
        </div>
    );
}

export default Preloader;