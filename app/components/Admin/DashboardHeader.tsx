"use client";
import { ThemeSwitcher } from "@/app/utils/ThemeSwitcher";
import { useGetAllNotificationsQuery, useUpdateNotificationStatusMutation } from "@/redux/features/notifications/notificationsApi";
import React, { FC, useEffect, useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import socketIO from "socket.io-client";
import { format } from "timeago.js";

const ENDPOINT = process.env.NEXT_PUBLIC_SOCKET_SERVER_URI || ""
const socketId = socketIO(ENDPOINT, { transports: ['websocket'] })

type Props = {
    open?: boolean;
    setOpen?: any;
};

const DashboardHeader: FC<Props> = ({ open, setOpen }) => {

    const { data, refetch } = useGetAllNotificationsQuery(undefined, {
        refetchOnMountOrArgChange: true
    })

    const [updateNotificationStatus, { isSuccess }] = useUpdateNotificationStatusMutation()
    const [notification, setNotification] = useState<any>([])

    const [audio] = useState<any>(
        typeof window !== "undefined" &&
        new Audio(
            "https://res.cloudinary.com/dwg9xfjxr/video/upload/v1727206590/livechat-129007_chsoiz.mp3"
        )
    )

    const playerNotificationSound = () => {
        audio.play()
    }

    useEffect(() => {
        if (data) {
            setNotification(data.notifications.filter((item: any) => item.status === 'unread'))
        }
        if (isSuccess) {
            refetch()
        }
        audio.load()
    }, [data, isSuccess])

    useEffect(() => {
        socketId.on("newNotification", (data) => {
            refetch()
            playerNotificationSound()
        })
    }, [])

    console.log("NOTIFICATION : ", notification)

    const handleNotificationStatusChange = async (id: string) => {
        await updateNotificationStatus(id)
    }

    return (
        <div className="w-full flex items-center justify-end p-6 fixed top-0 right-0 z-50 bg-white dark:bg-zinc-900 border-b-2 border-opacity-50 border-zinc-400">
            <ThemeSwitcher />
            <div
                className="relative cursor-pointer m-2"
                onClick={() => setOpen(!open)}
            >
                <IoMdNotificationsOutline className="text-2xl cursor-pointer dark:text-white text-black" />
                <span className="absolute -top-2 -right-2 bg-emerald-600 rounded-full w-[20px] h-[20px] text-[12px] flex items-center justify-center text-white">
                    {notification && notification.length}
                </span>
            </div>
            {open && (
                <div className="w-[350px] h-[60vh] overflow-y-scroll py-3 px-2 border border-[#ffffff0c] dark:bg-zinc-900 bg-white absolute top-16 z-[1000000000] rounded shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] dark:shadow-zinc-950 shadow-zinc-200">
                    <h5 className="text-center text-[20px] font-Poppins text-black dark:text-white p-3">
                        Notifications
                    </h5>
                    {
                        notification && notification.map((item: any, index: number) => (
                            <>
                                <div key={index} className="dark:bg-zinc-900 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] dark:shadow-zinc-950 shadow-zinc-200 bg-zinc-50 font-Poppins my-2 rounded-xl p-1">
                                    <div className="w-full flex items-center justify-between p-2">
                                        <p className="text-black dark:text-white">
                                            {item.title}
                                        </p>
                                        <p className="dark:text-[#F9D341] dark:hover:text-red-600 text-emerald-400 hover:text-red-600 cursor-pointer"
                                            onClick={() => handleNotificationStatusChange(item._id)}>
                                            Mark as read
                                        </p>
                                    </div>
                                    <p className="px-2 text-black dark:text-white">
                                        {item.message}
                                    </p>
                                    <p className="p-2 text-black dark:text-white text-[14px]">
                                        {format(item.createdAt)}
                                    </p>
                                </div>
                                <hr />
                            </>
                        ))
                    }
                </div>
            )}
        </div>
    );
};

export default DashboardHeader;