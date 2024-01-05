import Image from "next/image";
import React from "react";

function ProfileImage({width,height}) {
    const imageSrc =
        "https://firebasestorage.googleapis.com/v0/b/photography-site-ksahlos-84194.appspot.com/o/Others%2F91480670_2573088219631235_8832628316130246656_n-1-650x650.jpg?alt=media&token=afca5c9c-519d-4ce3-8fbf-f44a1ddc05a7";

    return (
        <Image src={imageSrc} alt="profile-pic" width={width} height={height} className="rounded shadow-md" loading="eager"/>
    )
}

export default ProfileImage