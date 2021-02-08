import React, {useState} from 'react';
import Link from 'next/link';

const ResultContent = () => {
    const [correctAnswerPercentage, setCorrectAnswerPercentage] = useState(0);
    React.useEffect(() => {
        setCorrectAnswerPercentage(window.sessionStorage.getItem('correctAnswerPercentage'));
    }, []);
    return (
        <div className="container header-padding">
                <div className="section-title">
                    <h2>Thank you for checking future readiness of your business</h2>
                    <div className="bar"></div>
                </div>
                <div className="row result-container">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-services">
                            <h3>How future ready is your business ?</h3>
                        </div>
                    </div>
                    <div className="result-content col-lg-7 col-md-6">
                        <h3>Your score was {correctAnswerPercentage} out of 100</h3>
                        <div className="score-indicator">
                            <h6>What does this score indicate ?</h6>
                            <p>In this volatile business world, you are facing issues similar to many business around you. It's time for some significant 'surgery'. A detailed business health review is needed to help understand key challenges, prioritize actions and take corrective measures. You will certainly benefit from the advice and assistance of an expert Business advisor to explore and recommend impactful actions to you firmly on the way to stability, growth and success.</p>
                        </div>
                        <div className="page-report">
                            <h6>Get a detailed 5 page report</h6>
                            <p>Download a detailed 5 page report on the key success factors to help your business strategies and execution succeed.</p>
                        </div>
                        <div className="download-button">
                            <Link href="/download-result">
                                <button className="download-now-button">Download Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default ResultContent;