import React, { useState } from 'react';
// import PropTypes from 'prop-types'


export default function About(props) {


  const style = {
    // color: props.mode === 'white' ? 'black' : 'white',
    // backgroundColor : props.mode === 'white' ? 'dark' : 'white',
    border : '2px solid',
    borderColor : props.mode === 'light' ? 'black' : ''
  }

  // const [mystyle, setMystyle] = useState({
  //   backgroundColor: 'white',
  //   color: 'black'
  // })

  // const [btnText, setBtnText] = useState('Dark')

  // const toggleStyle = () => {
  //   if (mystyle.color === 'black') {
  //     setMystyle({
  //       backgroundColor: 'black',
  //       color : 'white',
  //     })
  //     setBtnText('Light')
      
  //   } else {
  //     setMystyle({
  //       backgroundColor: 'white',
  //       color : 'black'
  //     })
  //     setBtnText('Dark')
  //   }
  // }

  return (
    <>
      <div className='container my-3'>
        <h1 style={{color: props.mode==='light'?'black':'white'}}>About Us</h1>
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item" style={style}>
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
              <strong>About Textutils</strong>
              </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
              <div className="accordion-body">
              Text-Utils is a web tool to assist developers and other people in daily tasks by providing tools for manipulating text data. 
              </div>
            </div>
          </div>
          <div className="accordion-item" style={style}>
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
              <strong>Analyze Your text </strong>
              </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
              <div className="accordion-body">
              Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={style}>
            <h2 className="accordion-header">
              <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
              <strong>Browser Compatible </strong>
              </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
              <div className="accordion-body">
              This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <button type='button' className='btn btn-primary my-3' onClick={toggleStyle}>{btnText}</button> */}
    </>
  )
}

