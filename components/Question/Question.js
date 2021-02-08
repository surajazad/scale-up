import React, {useState} from 'react';
import QuizContent from '../QuizContent/QuizContent';
import {QuizData} from '../QuizData/QuizData';

const Question = (props) => {
    const totalNumberOfQuestions = QuizData.length;
    // let answerCount = 0;
    // let correctAnswers = 0;
    let quizData = [
        {
            id: 1,
            leftBannerText: "Strategic Business Planning",
            heading: "Statement of readiness",
            question: "We have written 2-3 strategic plan with clear objectives and financial targets. We have a Business Plan for this year execution & reviews are a part of our life",
            optionOne: "Yes, we do have Business plans & work as per the objectives",
            optionTwo: "Yes, we do have Business plans & work as per the objectives",
            optionThree: "Yes, we do have Business plans & work as per the objectives",
            correctAnswer: "_first_option",
            answerSelectedByUser: ""
        },
        {
            id: 2,
            leftBannerText: "Strategic Business Planning",
            heading: "Statement of readiness",
            question: "We have written 2-3 strategic plan with clear objectives and financial targets. We have a Business Plan for this year execution & reviews are a part of our life",
            optionOne: "Yes, we do have Business plans & work as per the objectives",
            optionTwo: "Yes, we do have Business plans & work as per the objectives",
            optionThree: "Yes, we do have Business plans & work as per the objectives",
            correctAnswer: "_second_option",
            answerSelectedByUser: ""
        },
        {
            id: 3,
            leftBannerText: "Strategic Business Planning",
            heading: "Statement of readiness",
            question: "We have written 2-3 strategic plan with clear objectives and financial targets. We have a Business Plan for this year execution & reviews are a part of our life",
            optionOne: "Yes, we do have Business plans & work as per the objectives",
            optionTwo: "Yes, we do have Business plans & work as per the objectives",
            optionThree: "Yes, we do have Business plans & work as per the objectives",
            correctAnswer: "_first_option",
            answerSelectedByUser: ""
        },
        {
            id: 4,
            leftBannerText: "Strategic Business Planning",
            heading: "Statement of readiness",
            question: "We have written 2-3 strategic plan with clear objectives and financial targets. We have a Business Plan for this year execution & reviews are a part of our life",
            optionOne: "Yes, we do have Business plans & work as per the objectives",
            optionTwo: "Yes, we do have Business plans & work as per the objectives",
            optionThree: "Yes, we do have Business plans & work as per the objectives",
            correctAnswer: "_third_option",
            answerSelectedByUser: ""
        },
        {
            id: 5,
            leftBannerText: "Strategic Business Planning",
            heading: "Statement of readiness",
            question: "We have written 2-3 strategic plan with clear objectives and financial targets. We have a Business Plan for this year execution & reviews are a part of our life",
            optionOne: "Yes, we do have Business plans & work as per the objectives",
            optionTwo: "Yes, we do have Business plans & work as per the objectives",
            optionThree: "Yes, we do have Business plans & work as per the objectives",
            correctAnswer: "_second_option",
            answerSelectedByUser: ""
        },
        {
            id: 6,
            leftBannerText: "Strategic Business Planning",
            heading: "Statement of readiness",
            question: "We have written 2-3 strategic plan with clear objectives and financial targets. We have a Business Plan for this year execution & reviews are a part of our life",
            optionOne: "Yes, we do have Business plans & work as per the objectives",
            optionTwo: "Yes, we do have Business plans & work as per the objectives",
            optionThree: "Yes, we do have Business plans & work as per the objectives",
            correctAnswer: "_first_option",
            answerSelectedByUser: ""
        },
        {
            id: 7,
            leftBannerText: "Strategic Business Planning",
            heading: "Statement of readiness",
            question: "We have written 2-3 strategic plan with clear objectives and financial targets. We have a Business Plan for this year execution & reviews are a part of our life",
            optionOne: "Yes, we do have Business plans & work as per the objectives",
            optionTwo: "Yes, we do have Business plans & work as per the objectives",
            optionThree: "Yes, we do have Business plans & work as per the objectives",
            correctAnswer: "_first_option",
            answerSelectedByUser: ""
        },
        {
            id: 8,
            leftBannerText: "Strategic Business Planning",
            heading: "Statement of readiness",
            question: "We have written 2-3 strategic plan with clear objectives and financial targets. We have a Business Plan for this year execution & reviews are a part of our life",
            optionOne: "Yes, we do have Business plans & work as per the objectives",
            optionTwo: "Yes, we do have Business plans & work as per the objectives",
            optionThree: "Yes, we do have Business plans & work as per the objectives",
            correctAnswer: "_third_option",
            answerSelectedByUser: ""
        },
        {
            id: 9,
            leftBannerText: "Strategic Business Planning",
            heading: "Statement of readiness",
            question: "We have written 2-3 strategic plan with clear objectives and financial targets. We have a Business Plan for this year execution & reviews are a part of our life",
            optionOne: "Yes, we do have Business plans & work as per the objectives",
            optionTwo: "Yes, we do have Business plans & work as per the objectives",
            optionThree: "Yes, we do have Business plans & work as per the objectives",
            correctAnswer: "_second_option",
            answerSelectedByUser: ""
        },
        {
            id: 10,
            leftBannerText: "Strategic Business Planning",
            heading: "Statement of readiness",
            question: "We have written 2-3 strategic plan with clear objectives and financial targets. We have a Business Plan for this year execution & reviews are a part of our life",
            optionOne: "Yes, we do have Business plans & work as per the objectives",
            optionTwo: "Yes, we do have Business plans & work as per the objectives",
            optionThree: "Yes, we do have Business plans & work as per the objectives",
            correctAnswer: "_first_option",
            answerSelectedByUser: ""
        }
    ]
    // quizData.forEach((item) => {
    //     item.answerSelectedByUser = false;
    //     item.correctAnswerSelected = false;
    // })

    const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
    const [answerCount, setAnswerCount] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);

    const clickHandler = (questionId, answerOption) => {
        //console.log('clicked item --->' + id, answerOption);
        // if(answerOption === '_first_option') {
        //     const newElement = {
        //         question: JSON.parse(JSON.stringify(QuizData[id-1].question)),
        //         answerSelected: JSON.parse(JSON.stringify(QuizData[id-1].optionOne))
        //     }
        //     setQuestionAndAnswer(questionAndAnswer => [...questionAndAnswer, newElement]);
        // } else if (answerOption === '_second_option') {
        //     const newElement = {
        //         question: JSON.parse(JSON.stringify(QuizData[id-1].question)),
        //         answerSelected: JSON.parse(JSON.stringify(QuizData[id-1].optionTwo))
        //     }
        //     setQuestionAndAnswer(questionAndAnswer => [...questionAndAnswer, newElement]);
        // } else if(answerOption === '_third_option') {
        //     const newElement = {
        //         question: JSON.parse(JSON.stringify(QuizData[id-1].question)),
        //         answerSelected: JSON.parse(JSON.stringify(QuizData[id-1].optionThree))
        //     }
        //     setQuestionAndAnswer(questionAndAnswer => [...questionAndAnswer, newElement]);
        // }






        // console.log(quizData);
        // quizData.forEach((questionItem) => {
        //     if(questionItem.id === questionId) {
        //         questionItem.answerSelectedByUser = true;
        //         if(questionItem.correctAnswer === answerOption) {
        //             questionItem.correctAnswerSelected = true;
        //         }
        //     }
        // })
        // quizData.forEach((question) => {
        //     if(question.answerSelectedByUser === true){
        //         setAnswerCount(answerCount + 1);
        //     }
        //     if(question.correctAnswerSelected === true) {
        //         setCorrectAnswers(correctAnswers + 1);
        //     }
        // })
        // if(answerCount === 10) {
        //     setAllQuestionsAnswered(true);
        // }
        // console.log('q-----'+answerCount, correctAnswerCount);
        // props.sendFormData({
        //     "allQuestionsAnswered": allQuestionsAnswered,
        //     "correctAnswerCount": correctAnswers
        // });
    }

    return (
        <div className="question-content">
            {
                quizData.map((item) => {
                    const {id, heading, leftBannerText, optionOne, optionTwo, optionThree, question} = item;
                    return (
                        <div className="question-section">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-services">
                                    <p>{id}/{totalNumberOfQuestions}</p>
                                    <h3>{leftBannerText}</h3>
                                </div>
                            </div>
                            <div className="right-side-question-content">
                                <div className="question-title">
                                    <h5>{heading}</h5>
                                </div>
                                <div className="question">
                                    <p>{question}</p>
                                </div>
                                <div className="answer-options">
                                    <div className="option">
                                        <label for="one">
                                            <input onClick={()=>clickHandler(id, '_first_option')} type="radio" id={id} name={id+"-answer"} value="1" />
                                            {optionOne}
                                        </label>
                                    </div>
                                    <div className="option">
                                        <label for="two">
                                            <input onClick={()=>clickHandler(id, '_second_option')} type="radio" id={id} name={id+"-answer"} value="2" />
                                            {optionTwo}
                                        </label>
                                    </div>
                                    <div className="option">
                                        <label for="three">
                                            <input onClick={()=>clickHandler(id, '_third_option')} type="radio" id={id} name={id+"-answer"} value="3" />
                                            {optionThree}
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Question;