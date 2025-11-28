// const user = {
//     name: 'Nazar',
//     age: 16,
//     location: 'Kriviy Rog',
//     friend: ['Vlad','Artem','Sahon']
// }

// const {name,age,location,friend,lastName = 'Triukhan'} = user
// console.log(name);
// console.log(lastName);

const movie = {
    title: 'The Shawshank Redemption',
    director: {
    name: 'Frank Darabont', 
    nationality: 'American'
    },
    actors: ['Tim Robbins', 'Morgan Freeman'],
    release_year: 1994, 
    ratings: {
     imdb: 9.3, 
    rotten_tomatoes: 90
}}

const {title,director: {name,nationality},actors:[el1,el2],release_year,ratings:{imdb,rotten_tomatoes}} = movie
console.log(title);
console.log(name);
console.log(nationality);
console.log(el1);
console.log(el2);
console.log(release_year);
console.log(imdb);
console.log(rotten_tomatoes);
