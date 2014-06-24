function readData() {
  var elements = document.form1.CourseOption.length;

  for (var i = 0; i<elements; i++) {
    if (document.form1.CourseOption[i].checked==true) {
      var selected = document.form1.CourseOption[i].value;
      alert('You have selected ' +selected);
    };
  };
}

function removeFriends() {
  var friends=['Tom','Tim','Lyn','Bob'];
  friends.splice(2,1,'Adele');
  alert(friends);
}

document.getElementById('button').onclick=removeFriends;


function addFriends(input) {
  var friends=['Tom','Tim','Lyn','Bob'];  
  friends.push(input);
  alert(friends);
}

function sorted() {
  var friends=['Tom','Tim','Lyn','Bob']; 
  friends.sort();
  alert(friends);
}

function sortAge() {
  var agesOfPeople=[56,23,45,21,2,67,34]; 
  agesOfPeople.sort(function(a,b) {return a-b});
  alert(agesOfPeople);
}

function sortAgeDesc() {
  var agesOfPeople=[56,23,45,21,2,67,34]; 
  agesOfPeople.sort(function(a,b) {return b-a});
  alert(agesOfPeople);
}
