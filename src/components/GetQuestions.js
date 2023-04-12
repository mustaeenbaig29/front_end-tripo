import React from 'react'
import { useQuery, gql } from "@apollo/client";
import {LOAD_QUESTIONS} from '../Graphql/Q'
import { useState, useEffect } from 'react';
import './Questions.css'



const GetQuestions = () => {
    const { error, loading, data } = useQuery(LOAD_QUESTIONS)
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        if (data) {
            setQuestions(data.questions);
          }
      }, [data]);
  return (
    <div>
       {" "}
      {/* {questions.map((val) => {
        return <>
        <h1>{val.question}</h1>
        <h1> {val.input_data[0]}</h1>;
        <h1> {val.input_data[1]}</h1>;
        <h1> {val.input_data[2]}</h1>;
        <h1> {val.input_data[3]}</h1>;
        </>
      })} */}

<div className='bg_img'>
            
            <div className='logo'>
                      {/* <img src={logo}/> */}
                     </div>
                         <div className='con'>
                         <div className='questions'>
                        
                           
                             <div className='questions_content'>
                              {questions.map((val) => {
                                return(
                                    <>
                                      <div className='span'>
                                <span>{val.question}
                                 </span>
                                </div>
                                 <div className='options'>
                                 <div className='options_con'><span>{val.input_data[0]}</span></div>
                                 <div className='options_con'><span>{val.input_data[1]}</span></div>
                                 <div className='options_con'><span>{val.input_data[2]}</span></div>
                                 <div className='options_con'><span>{val.input_data[3]}</span></div>
                                 
                                 </div>
                                    </>
                                )
                              })}
                                 <button className='nxt' >NEXT</button>
                             </div>
                           
                         </div>
                         </div>
                      </div>
    </div>
  )
}

export default GetQuestions
