import React from 'react'
import { useState } from 'react'
import validator from 'validator'
// import { format } from "date-fns";


function Form() {
  const [fullName, setFullName] = useState("");
  const [emailAdress, setEmailAdress] = useState("");
  const [department, setDepartment] = useState("Consulting");
  const [reason, setReason] = useState("Emergency");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");


  function handleSubmit(e) {
    e.preventDefault()
    let applicationStatus = checkValidation()
    if (applicationStatus.valid) {
      const generateLeaveRequestEmail = (fullName, department, reason, startDate, endDate, emailAdress) => {
        return `
        Subject: Leave Request - ${fullName}
      
        Dear HR,
      
        I hope this message finds you well. I would like to request leave from the ${department} department for the following reasons:
      
        - Reason for Leave: ${reason}
        - Start Date: ${startDate}
        - End Date: ${endDate}
      
        If there are any specific procedures or forms that need to be completed for the leave request, please let me know, and I will promptly take care of them.
      
        Your understanding and support regarding this matter is highly appreciated.
      
        Regards,
      
        ${fullName}
        ${emailAdress}
        `;
      };
      
      
      const leaveRequestEmail = generateLeaveRequestEmail(fullName, department, reason, startDate, endDate,emailAdress);
      console.log(leaveRequestEmail);
      

    }
    else {
      alert(applicationStatus.errormessage)
    }
  }
  function checkValidation() {
    let status = {
      valid: false,
      errormessage: ""
    }


    // Validate Name
    if (fullName.trim() === "") {
      status.valid = false
      status.errormessage = "Enter your full name"
      return status

    }
    // Validate Email

    if (validator.isEmail(emailAdress)) {
       //setEmailAdress('Valid Email :)')
    } else {
      setEmailAdress('Enter valid Email!')
     
    }

    // Validate Departments
    // Validate Reasons
    
    // Validate Start Date
  if (startDate.trim() === "") {
    status.valid = false;
    status.errormessage = "Select a start date";
    return status;
  }

  // // Validate End Date
  if (endDate.trim() === "") {
    status.valid = false;
    status.errormessage = "Select an end date";
    return status;
  }

  // // Check if the End Date is not earlier than the Start Date
  const startDateObj = new Date(startDate);
  const endDateObj = new Date(endDate);

  if (startDateObj > endDateObj) {
    status.valid = false;
    status.errormessage = "End Date cannot be earlier than Start Date";
    return status;
  }

    // TODO: HANDLE VALIDATION FOR ALL INPUTS. 
    status.valid = true


    return status
  }
  return (
    <div className='modaldiv'>

      <div className='leftModal'>
        <div className='topRow'>
          <p className='trackerTitle'>LEAVE TRACKER</p>
        </div>
        <div className='bottomColumn'>

          <form class="max-w-md mx-auto" onSubmit={handleSubmit}>

            <div >
              <div >
                <label for="floating_first_name" >Full Name*</label> <br />
                <input value={fullName} onChange={(e) => setFullName(e.target.value)}
                  type="text" name="floating_first_name" id="floating_first_name" placeholder="e.g. Jane Doe" required />
              </div>

              <div >
                <label for="floating_email">Email address*</label> <br />
                <input value={emailAdress} onChange={(e) => setEmailAdress(e.target.value)} type="email" name="floating_email" id="floating_email"  placeholder="Enter your email " required  />
              </div>
            </div>
            <div className='SelectDepartment'>
              <label for="department">Departments*</label><br />
              <select value={department} onChange={(e) => setDepartment(e.target.value)} name="Departments" id="department" required >
                <option value="Consulting">Consulting</option>
                <option value="Betting">Betting</option>
                <option value="Tech">Tech</option>
                <option value="Hospitality">Hospitality</option>
              </select>
            </div>
            <div className='SelectPurpose'>
              <label for="purpose">Reason for Leave*</label><br />
              <select value={reason} onChange={(e) => setReason(e.target.value)} name="Purposes" id="purpose" required>
                <option value="Emergency">Emergency</option>
                <option value="Maternity">Maternity</option>
                <option value="Annual">Annual</option>
                <option value="Paternity">Paternity</option>
                <option value="Study">Study</option>
                <option value="Compassionate">Compassionate</option>
              </select>
            </div>

            <label for="strdate">Start Date*</label> <br />
            <input value={startDate} onChange={(e) => setStartDate(e.target.value)} id='strdate' name='strdate' type='date' required></input><br />

            <label for="endDate">End Date*</label> <br />
            <input  min = {startDate.length>0 ? new Date(startDate).toISOString().split('T')[0] : new Date(Date.now()).toISOString().split('T')[0] } value={endDate} onChange={(e) => setEndDate(e.target.value)} id='endDate' name='endDate' type='date' required></input><br />
            <div className='applyBtn'>
              <button type="submit" >Apply</button>
            </div>
          </form>
         
        </div>

      </div>
      <div className='borderLine'>
        <div>
        </div>
      </div>
      <div className='rightModal'>
        <img src='FINAL+SAPIENT+LOGO-2.jpg' alt='see'></img>
      </div>

    </div>
  )
}

export default Form