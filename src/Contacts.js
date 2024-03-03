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
      this.people = [...this.people, {  name: formData.name, city:formData.city, tel: formData.tel ,}]
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

console.log('lea');
console.log('diti');
