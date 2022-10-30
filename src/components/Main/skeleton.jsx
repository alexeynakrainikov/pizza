import React from 'react';
import ContentLoader from "react-content-loader";

function Skeleton() {
    return (
        <ContentLoader className="pizza-block"
            speed={2}
            width={280}
            height={465}
            viewBox="0 0 280 465"
            backgroundColor="#e8e8e8"
            foregroundColor="#c2c2c2"
        >
            <rect x="379" y="399" rx="3" ry="3" width="88" height="6" />
            <rect x="367" y="427" rx="3" ry="3" width="52" height="6" />
            <circle cx="140" cy="118" r="115" />
            <rect x="1" y="260" rx="5" ry="5" width="280" height="25" />
            <rect x="-1" y="314" rx="5" ry="5" width="280" height="51" />
            <rect x="-1" y="389" rx="6" ry="6" width="98" height="33" />
            <rect x="138" y="381" rx="20" ry="20" width="142" height="56" />
        </ContentLoader>
    );
}

export default Skeleton;