import React, { useContext, useState } from "react";
import Divider from "../common/Divider";

const Settings = () => {
    const [selected, setSelected] = useState(0);
    return (
        <>
            <Divider />
            <div className="flex flex-col gap-3 overflow-auto px-2">
                <p className="text-sm font-semibold mb-3  dark:text-gray-200">All Settings</p>
                {/* List settings here... */}
            </div>
        </>
    );
};

export default Settings;
