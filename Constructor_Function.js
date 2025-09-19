function student(firstName, lastName,dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date (dob);
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
    this.getFullYear = function(){
        return`${firstName} ${lastName}`;
    }
}