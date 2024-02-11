
import { observer } from 'mobx-react'
import Contacts from './Contacts'
import People from './People'


const ListPeople = (observer(() => {
  
    return (
        <>
        
            <div className='right-aligned-component'>
                <h3>Phonebook</h3>
            {Contacts.arrayPeople.map((_, index) =>
                <People
                    key={index}
                    index={index}
                />)}
                
                </div>

           
        </>
    )
}))

export default ListPeople