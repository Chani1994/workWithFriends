import { makeObservable, observable, action, computed } from 'mobx';

class Contacts {
    people=[];
    viewSelectedCity = "all";
    constructor() {
        makeObservable(this, {
            people: observable,
            viewSelectedCity: observable,
            updateSelectedCity:action,
            addPeople: action,
            deletePeople: action,
            arrayPeople: computed,
        })
    };

    addPeople= (formData) => {
<<<<<<< HEAD
      this.people = [...this.people, {  name: formData.name, city:formData.city, tel: formData.tel ,}]
=======
        this.people = [...this.people, {  name: formData.name, city:formData.city, tel: formData.tel ,}]
>>>>>>> Chani1994/master
    }
    deletePeople = (formData) => {
        this.people.splice(this.people.indexOf(formData), 1)
      }
    updateSelectedCity = (city) => {
        this.viewSelectedCity = city;
      }
      get arrayPeople() {
        if (this.viewSelectedCity === "all") {
          return this.people;
        } else {
          return this.people.filter((person) => person.city === this.viewSelectedCity);
        }
      }
    
    }
 

export default new Contacts()//singletone