import { observer } from 'mobx-react'

import Contacts from './Contacts';

const People = (observer(({ index }) => {

    const thisPeople = Contacts.arrayPeople[index];
    const handleDeletePeople=()=>{
        Contacts.deletePeople(thisPeople);
    }

    return (
        <>
            <div>
            name: {thisPeople.name}  city: {thisPeople.city}  tel: {thisPeople.tel}
            <button onClick={handleDeletePeople}>delete</button>
            </div>
            
        </>
    )
}))

export default People