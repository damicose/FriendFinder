// Need to fold this into a post request or something~~
// Figure out if we're posting and evaluating ("friend finding") in the same function ?? Seems ugly--

// Empty friends array

const friendArray = [
    {
        nombre: "",
        photo: "",
        answers: []
    },
    {
        nombre:"Monica",
        photo:"",
        answers:[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
          ]
      },
      {
        nombre:"Erica",
        photo:"",
        answers:[
            1,
            5,
            3,
            1,
            2,
            5,
            4,
            3,
            1,
            4
          ]
      },    
      {
        nombre:"Rita",
        photo:"",
        answers:[
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
          ]
      },      
      {
        nombre:"Tina",
        photo:"",
        answers:[
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3
          ]
      }
];


// Looks like this should just be an object template for each friend entry and that js function is nested in HTML file
// 
module.exports = friendArray;