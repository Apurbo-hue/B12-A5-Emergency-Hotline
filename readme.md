1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Answer:
    getElementById: It is used to get the element in Javascript from the linked HTML file with the specific id.
    getElementsByClassName:It is used to get the elements with the same Class name.
    querySelector: It is used to get the single element (first) with the css selector.
    querySelectorAll: It works excatly like the querySelector just the difference is it can get all the elements instead of just one.



2. How do you **create and insert a new element into the DOM**?
Answer:
    
    const (new element's variable name) = document.createElement('p/h1/div')

    const(target element's variable name) document.getElementById('id')
    (target element's variable name).appendChild(new element's variable name)



3. What is **Event Bubbling** and how does it work?
Answer:
      Event bubbling is a way of handeling the event in js where we click on something and the event happens excatly over there and it bubbles up and goes up to the parent and then it's parent and all the way up to the body and then to the html



4. What is **Event Delegation** in JavaScript? Why is it useful?
Answer:
      Delegation is another way where we put the event listener to the parent element and handle the events of the child inside the listener

      useful: it works even if new childern are added



5. What is the difference between **preventDefault() and stopPropagation()** methods?
Answer:
     preventDefault() is used in order to stop the default action of an event

     stopPropagation() is used to control the flow of the event