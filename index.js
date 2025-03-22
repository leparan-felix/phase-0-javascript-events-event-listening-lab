function addingEventListener() {
    const input = document.getElementById('button');
  
    // Define the clickAlert function
    function clickAlert() {
      alert('I was clicked!');
    }
  
    // Add the event listener for the click event
    input.addEventListener('click', clickAlert);
  }
  
  // Call the addingEventListener function to activate the event listener
  addingEventListener();
