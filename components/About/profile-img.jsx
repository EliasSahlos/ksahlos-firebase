import Image from "next/image";
import React from "react";

function ProfileImage({width,height}) {
    const imageSrc =
        "https://firebasestorage.googleapis.com/v0/b/photography-site-ksahlos-84194.appspot.com/o/Others%2Fabout-picture.jpg?alt=media&token=395fc7c7-919d-40d0-bb25-5aab0e2decca";

    return (
        <Image src={imageSrc} alt="profile-pic" width={width} height={height} className="rounded shadow-md" loading="eager"/>
    )
}

export default ProfileImage