const computer = {
    brand: 'Lenovo',
    price: 47000,
    processor: 'intel',
    ssd: '512gb'
};
const keys = Object.keys(computer);
console.log(keys);

const values = Object.values(computer);
console.log(values);
//
const profile = {
    name: 'Tanjila',
    age: 21,
    city:'Dhaka'
};
const profileKeys = Object.keys(profile);
const hasName = profileKeys.includes('name');
console.log(hasName);

if('email' in profile){
    console.log('email exists');
}else{
    console.log('No email. No spam');
}

if(profile.hasOwnProperty('email')){
    console.log('Email niye boroloki dekhai');
}else{
    console.log('Email chara jibon');
}

if(profile.city === 'Dhaka'){
    console.log('Jam er sohor Dhaka')
}else{
    console.log('Aram sob gram e');
}
//
