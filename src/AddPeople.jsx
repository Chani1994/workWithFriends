import { useState } from "react"
import { observer } from 'mobx-react'
import { TextField } from '@mui/material';

import Contacts from "./Contacts";
import City from "./City";

const AddPeople = (observer(() => {
  
    const [formData, setFormData] = useState({// כתיבה בריאקט למשתנה דינמי בקומפוננטה ששינוי בו יגרום לרינדור של הקומפוננטה
        name: '',                               //בתוך הפונקציה useState יופעל הsetState(setFormData) בפעם הראשונה ויושם הערך הדיפולטיבי
        city: '',
        tel: '',
      });
      const handleAddPeople = (e) => {
        e.preventDefault();
        Contacts.addPeople(formData);
        setFormData({
        name: '',
        city: '',
        tel: '',})
    }
      const handleChange = (e) => {
        const { id, value } = e.target;//הtarget במקרה הזה הוא הinput שאותו שינינו
        setFormData({ ...formData, [id]: value });
      }
    
    
    return (
        <>
        
         <form className="left-aligned-component">
         <City></City>
         <TextField id="name" label="Enter Name" variant="outlined" value={formData.name} onChange={handleChange} margin="dense"/>
            <br />
            <TextField id="city" label="Enter City" variant="outlined" value={formData.city} onChange={handleChange} margin="dense"/>
            <br />
            <TextField id="tel" label="Enter tel" variant="outlined" value={formData.tel} onChange={handleChange} margin="dense"/>
            <br />
            <button onClick={handleAddPeople}>add people</button>
            </form> 
        </>
    )
}))

export default AddPeople