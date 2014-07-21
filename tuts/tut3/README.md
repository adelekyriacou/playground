
#Tutorial Questions (Tutorial 3)

For this tutorial DO NOT  use any HTML editing software such eg Dreamweaver, Microsoft Frontpage. Use an ordinary text editor such as Notepad++.

Create a HTML page with an externally linked javascript file which includes the following functionalities. 
 
* Create a web form with radio form elements and a button. The clicking of the button should invoke a function to display the value of the radio element selected by the user.

* Modify the web form created in part (a), to include a button which invokes a function called `removeFriends()` when clicked. The function `removeFriends()` should use the array method `splice()`, to replace the element found at index position 2, of the array friends (defined below) with a new element and display the contents of the updated array in a pop-up window.

``` js
  var friends = ['Tom','Tim','Lyn','Bob'];
```

* Modify the web form created in part (a), to include a text entry input element and a button.  The button should invoke a function called `addFriends()` when clicked. The function `addFriends()` should use the array method `push()`, to insert a new element into the  friends array. The new element should be accessed from text entry input area. Finally, the contents of the updated array should be displayed in a pop-up window.

* Modify the web form created in part (a), to include a button which invokes a function called `sorted()`, which sorts the friends array in alphabetical order and displays the sorted array in  a pop-up window. 


* Modify the web form created in part (a), to include a button, which invokes a function called `sortAge()` which sorts the array called `agesOfPeople` (defined below)  in ascending order and  displays the contents of the sorted array in  a pop-up window.

``` js
  var agesOfPeople = [56, 23, 45, 21, 2, 67, 34]; 
```
* Repeat part(e), so that the array is sorted in descending order.
