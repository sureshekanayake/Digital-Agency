import React, { useEffect } from "react";

import Logo from "../assets/images/logo-icon-64.png";

export default function Loader() {

    useEffect(() => {
        setTimeout(() => {
            const loaderEle = document.getElementById('preloader')
            loaderEle.style.display = 'none';
        }, 1000)
    }, []);

    return (
        <>
            <div id="preloader">
                <div id="status">
                    <div className="logo">
                        <img src={Logo} className="d-block mx-auto animate-[spin_10s_linear_infinite]" alt="" />
                    </div>
                    <div className="justify-content-center">
                        <div className="text-center">
                            <h4 className="mb-0 mt-2 text-lg font-semibold">Upwind</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}