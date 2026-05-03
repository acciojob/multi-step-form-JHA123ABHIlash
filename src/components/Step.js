import React from 'react'

export default function Step({step,formdata,handleChange,handleNext,handlePrev,handleSubmit}) {
  
        if(step==1){
           return (
            <div id='step1'>
                <label htmlFor='fname'>First Name:</label>
                <input type='text' id='fname' name='fname' value={formdata.fname} onChange={handleChange}/>
                 <label htmlFor='lname'>Last Name:</label>
                <input type='text' id='lname' name='lname' value={formdata.lname} onChange={handleChange}/>
                <button onClick={handleNext}>Next</button>
            </div>
           ) 
        }else if(step==2){
            return (
            <div id='step2'>
                <label htmlFor='brand'>Brand:</label>
                <input type='text' id='brand' name='brand' value={formdata.brand} onChange={handleChange}/>
                 <label htmlFor='model'>Model:</label>
                <input type='text' id='model' name='model' value={formdata.model} onChange={handleChange}/>
                <button onClick={handlePrev}>Previous</button>
                <button onClick={handleNext}>Next</button>
            </div>
           ) 
        }else if(step==3){
            return (
            <div id='step3'>
                <label htmlFor='card_info'>Credit Card No:</label>
                <input type='text' id='card_info'name='card_info' value={formdata.card_info} onChange={handleChange} minLength={12}/>
                 <label htmlFor='expiry_date'>Card Exp:</label>
                <input type='text' id="expiry_date" name='card_exp' value={formdata.card_exp} onChange={handleChange}/>
                <button onClick={handlePrev}>Previous</button>
                <button onClick={handleSubmit}>Submit</button>
            </div>
           ) 
        }
        
  
}
