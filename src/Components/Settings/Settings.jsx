import React, { useContext, useState } from "react";
import Divider from "../common/Divider";
import SettingItem from "./SettingItem";

const settingsData = [
    {
        id: 1,
        icon: "ion-android-globe",
        text: "Languages"
    },
    {
        id: 2,
        icon: "ion-ios-person",
        text: "Profile"
    },
    {
        id: 3,
        icon: "ion-android-exit",
        text: "logout"
    },
];

const Settings = () => {
    const [selected, setSelected] = useState(0);
    return (
        <>
            <Divider />
            <div className="flex flex-col gap-3 w-full overflow-auto px-2">
                <p className="text-sm font-semibold mb-3  dark:text-gray-200">All Settings</p>
                {
                    settingsData.map(data => <SettingItem key={data.id} icon={data.icon} text={data.text} />)
                }
            </div>
        </>
    );
};

export default Settings;
