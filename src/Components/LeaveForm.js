import React from 'react'

function LeaveForm() {
  return (
    <div>
        <form className='LeaveForm'>
            <div className='FormName'>
            <label>Name
                <input type="text" text = "Name"/>
            </label>
            <input type='submit' value="submit"/>
            </div>
            <div className='FormEmail'>
            <label>Email
                <input type="email" text = "Email"/>
            </label>
            <input type='submit' value="submit"/>
            </div>
            <div className='FormStartDate'>
            <label>startDate
                <input type="date" text = "date"/>
            </label>
            <input type='submit' value="submit"/>
            </div>
            <div className='FormEndDate'>
            <label>startDate
                <input type="date" text = "date"/>
            </label>
            <input type='submit' value="submit"/>
            </div>
            
      <div>
        <button type="submit">Apply</button>
      </div>
           
           
        </form>
         {/* <form >
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
        />
      </div>

      <div>
        <label htmlFor="startDate">Starting Date</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          required
        />
      </div>

      <div>
        <label htmlFor="endDate">Ending Date</label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          required
        />
      </div>

      <div>
        <label htmlFor="leaveDates">Leave Days</label>
        <textarea
          id="leaveDates"
          name="leaveDates"
          required
        />
      </div>

      <div>
        <button type="submit">Apply</button>
      </div>
    </form> */}
    </div>
  )
}

export default LeaveForm