import { observer } from 'mobx-react'
import Contacts from './Contacts'
import { TextField } from '@mui/material';

const City = (observer(() => {
   
    const citys = [];
    Contacts.people.forEach((c) => {//מילוי מערך ערים לפי הערים של האנשי קשר
        if (!citys.includes(c.city)) {// מניעת כפילויות
            citys.push(c.city)
        }
    })
    const handleSelectCity = (e) => {//פונקציה שנקראת באירוע של שינוי הבחירה בסלקט
        Contacts.updateSelectedCity(e.target.value);
    
    }
    
    return (
        <>
        <div className='selectDiv'>
       
        {/* <TextField
          id="outlined-select-currency"
          select
          label="Search"
          helperText="Select by city"
        //   variant="standard"
          onChange={handleSelectCity}>
             <option>all</option>
          {
              citys.map((c, i) => <option key={i} value={c}>{c}</option>)
          }</TextField> */}
           <h5>search city:</h5> 
         <select onChange={handleSelectCity}>
                <option>all</option>
                {
                    citys.map((c, i) => <option key={i} value={c}>{c}</option>)
                }
        </select>
            </div>
           

           
        </>
    )
}))

export default City