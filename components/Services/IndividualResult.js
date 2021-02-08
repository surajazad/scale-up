import React from 'react';

const IndividualResult = (props) => {
    console.log(props);
    return (
        <div className="results">
            {props.results.map((individualResult) => {
                const { title, imageUlr} = individualResult;
                return(
                    <div className="individual-result">
                        <div className="image-container">
                            {imageUlr === "" 
                            ? <div></div>
                            : <img src={imageUlr} alt="" />
                            }
                        </div>
                        <div className="result-text">
                            {title}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default IndividualResult;