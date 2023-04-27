console.log("strategy.js!"); 
function strategySaveSurvey() {    
  // Get the selected value from each dropdown menu
    var question1 = document.getElementById("question1").value;
    var question2 = document.getElementById("question2").value;
    var question3 = document.getElementById("question3").value;
    var question4 = document.getElementById("question4").value;
    var question5 = document.getElementById("question5").value;
  
    // Store the values in an object
    var score = (parseInt(question1)+parseInt(question2)+parseInt(question3)+parseInt(question4)+parseInt(question5))/25; 
    // var opcultureSurveyData = {
    //   question1: question1,
    //   question2: question2,
    //   question3: question3, 
    //   question4: question4, 
    //   question5: question5
    // };
    // Convert the object to a JSON string and save it to localStorage
    // Key value pairs, "surveyData - key", value 
    localStorage.setItem("strategySurveyData", score);

    window.location.href="technology.html";
  }
  
