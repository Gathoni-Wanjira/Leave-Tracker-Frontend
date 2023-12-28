import React from 'react'
import { useState } from 'react'
import validator from 'validator'

function Form() {
  const [fullName, setFullName] = useState("");
  const [emailAdress, setEmailAdress] = useState("");
  const [department, setDepartment] = useState("");
  const [reason, setReason] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");


  function handleSubmit(e) {
    e.preventDefault()
    let isValid = checkValidation()
    if (isValid.valid) {

    }
    else {
      alert(isValid.errormessage)
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
       setEmailAdress('Valid Email :)')
    } else {
      setEmailAdress('Enter valid Email!')
     
    }

    // Validate Departments
    // Validate Reasons
    // Validate Start Date
    // Validate End Date

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

            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 w-full mb-5 group">
                <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name*</label> <br />
                <input value={fullName} onChange={(e) => setFullName(e.target.value)}
                  type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              </div>

              <div class="relative z-0 w-full mb-5 group">
                <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address*</label> <br />
                <input value={emailAdress} onChange={(e) => setEmailAdress(e.target.value)} type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
              </div>
            </div>
            <div className='SelectDepartment'>
              <label for="department">Departments*</label><br />
              <select value={department} onChange={(e) => setDepartment(e.target.value)} name="Departments" id="department" >
                <option value="betting">Betting</option>
                <option value="consulting">Consulting</option>
                <option value="tech">Tech</option>
                <option value="hospitality">Hospitality</option>
              </select>
            </div>
            <div className='SelectPurpose'>
              <label for="purpose">Reason for Leave*</label><br />
              <select value={reason} onChange={(e) => setReason(e.target.value)} name="Purposes" id="purpose">
                <option value="maternity">Maternity</option>
                <option value="annual">Annual</option>
                <option value="paternity">Paternity</option>
                <option value="emergency">Emergency</option>
                <option value="study">Study</option>
                <option value="compassionate">Compassionate</option>
              </select>
            </div>

            <label for="strdate">Start Date*</label> <br />
            <input value={startDate} onChange={(e) => setStartDate(e.target.value)} id='strdate' name='strdate' type='date'></input><br />

            <label for="endDate">End Date*</label> <br />
            <input value={endDate} onChange={(e) => setEndDate(e.target.value)} id='endDate' name='endDate' type='date'></input><br />
            <div className='applyBtn'>
              <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Apply</button>
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