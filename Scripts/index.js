function submitAnswers() {
    var totalQuestions = 5;
    var score = 0;

    // Get user input
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;

    // Validation - Making sure that questions are not left unanswered?

    // if(q1 == null || q1 == "") {
    //     alert("q1 hasn't been answered!");
    //     return false; //this will keep the form from submitting 
    // };
    // //Instead of writiing this conditional four more times, use a for-loop instead.

    for (i=1; i<=totalQuestions; i++){
        if(eval("q" +i) == null || eval("q"+i) == "") { //using eval is how you would get the loop to recgonize that you want to loop through the variables you made above
            alert(i+ " hasn't been answered!");
            return false; //this will keep the form from submitting 
        }
    }
    // Set the correct answers
    var answers = ["d","b","a","d","d"];
    // Check the answers
    for(i=1; i<=totalQuestions;i++) {
        if(eval("q"+i) == answers[i-1]){
            score++;
        }
    }
    // Display results
    var results = document.getElementById("results");
    results.innerHTML = "<h3> You scored <span>" +score+ "</span> out of <span>" +totalQuestions+ "</span>    :D</h3>"
    alert("You scored "+score+ " out of "+totalQuestions+"!");

    return false;
}


