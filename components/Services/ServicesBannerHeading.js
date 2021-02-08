import React from 'react';
import Link from 'next/link';

const ServicesBannerHeading = (props) => {
    console.log(props);
    const {bannerHeadingTitle, knowMoreLink, enquireNowLink} = props.bannerHeadingData;
    return (
        <div className="services-banner-heading">
            <p>{bannerHeadingTitle}</p>
            <div className="services-banner-buttons">
                {
                    knowMoreLink !== "" ? 
                    <Link href={knowMoreLink}>
                        <button className="know-more-button">Know More</button>
                    </Link> : <></>
                }
                <Link href={enquireNowLink}>
                    <button className="enquire-now-button">Enquire Now</button>
                </Link>
            </div>
        </div>
    )
}

export default ServicesBannerHeading;