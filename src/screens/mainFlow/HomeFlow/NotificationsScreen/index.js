import { useEffect, useState } from 'react';
import { NotificationsView } from './NotificationsView';

const NotificationsScreen = () => {

    const notifications = [


        {
            "title": "03-12-2022",
            "data": [
                {
                    "icon": "location",
                    "title": "New Old Notification",
                    "discription": "",
                    "label": "LabelIsHere",
                    "time": "08:30",
                    amount: 20
                },
                {
                    "icon": "location",
                    "title": "New Very Notification",
                    "discription": "this is good",
                    "label": "labelIshere",
                    "time": "08:45",
                    amount: 20
                },
                {
                    "icon": "location",
                    "title": "New Notification",
                    "discription": "notification file",
                    "label": "",
                    "time": "08:50",
                    amount: 20
                }
            ]
        },
        {
            "title": "03-12-2022",
            "data": [
                {
                    "icon": "location",
                    "title": "New Old Notification",
                    "discription": "",
                    "label": "LabelIsHere",
                    "time": "08:30",
                    amount: 20
                },
                {
                    "icon": "location",
                    "title": "New Very Notification",
                    "discription": "this is good",
                    "label": "labelIshere",
                    "time": "08:45",
                    amount: 20
                },
                {
                    "icon": "location",
                    "title": "New Notification",
                    "discription": "notification file",
                    "label": "egewrgwerg",
                    "time": "08:50",
                    amount: '20,00,456'
                }
            ]
        },
        {
            "title": "03-12-2022",
            "data": [
                {
                    "icon": "location",
                    "title": "New Old Notification",
                    "discription": "fsdjkhfsdkajhfksd hsdfl jsahflkjashd fjklshad fhsad klfjh sadkfjh asdkhf asdkljhf aksdljhf alsdhf aklsdjh faksjhdfkasjd fasdkh ",
                    "label": "LabelIsHere",
                    "time": "08:30",
                    amount: 20
                },
                {
                    "icon": "location",
                    "title": "New Very Notification",
                    "discription": "this is good",
                    "label": "labelIshere",
                    "time": "08:45",
                    amount: 20
                },
                {
                    "icon": "location",
                    "title": "New Notification",
                    "discription": "notification file",
                    "label": "fkjhaskldjfhask",
                    "time": "08:50",
                    amount: 20
                }
            ]
        }

    ]
    return <NotificationsView notifications={notifications} />;
};

export default NotificationsScreen;
