import React, {useEffect} from 'react';
import './App.css';
import {useNavigate} from "react-router";
import {useAppSelector} from "./redux/hooks";

function Layout(props: {children: JSX.Element}) {
    const navigate = useNavigate()

    const { phoneNumber, phoneUuid, secret, deviceUuid } = useAppSelector((state) => state.app)

    useEffect(() => {
        if (!secret || ! deviceUuid) {
            navigate('/noconfig')
        } else if (!phoneNumber) {
            navigate('/settings')
        }

    }, [phoneNumber, secret, deviceUuid] )

  return (
<div className="flex flex-col bg-pink-200 h-screen">
    <div className="flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="flex justify-between w-auto px-4">
                <button
                    className="text-md font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                    onClick={() => navigate('/')}>
                    Sésame
                </button>
            </div>
            <div className="flex flex-grow items-center" id="example-navbar-warning">
                <button
                    className="text-md ml-auto flex items-center uppercase font-bold leading-snug text-white hover:opacity-75 active:opacity-50"
                    onClick={() => navigate('/settings')}>
                    Settings
                </button>
            </div>
        </div>
    </div>
    <div className="flex-auto overflow-hidden">{props.children}</div>
</div>
  );
}

export default Layout;