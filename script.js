function submitFirstAnswers(e) {
  e.preventDefault();

  var total = 6;
  var firstpoints = 0;

  // Get User Input
  var q1 = document.forms["quizForm"]["q1"].value;
  var q2 = document.forms["quizForm"]["q2"].value;
  var q3 = document.forms["quizForm"]["q3"].value;
  var q4 = document.forms["quizForm"]["q4"].value;
  var q5 = document.forms["quizForm"]["q5"].value;
  var q6 = document.forms["quizForm"]["q6"].value;

  // Validation
  for (i = 1; i <= total; i++) {
    if (eval("q" + i) == null || eval("q" + i) == "") {
      alert("You missed question " + i);
      return false;
    }
  }

  // Check Answers
  for (i = 1; i <= total; i++) {
    if (eval("q" + i) == "a") {
      firstpoints = firstpoints + 1;
    }
    if (eval("q" + i) == "b") {
      firstpoints = firstpoints + 2;
    }
    if (eval("q" + i) == "c") {
      firstpoints = firstpoints + 3;
    }
    if (eval("q" + i) == "d") {
      firstpoints = firstpoints + 4;
    }
    if (eval("q" + i) == "e") {
      firstpoints = firstpoints + 5;
    }
  }
  sessionStorage.setItem("firstpoints", firstpoints);

  location.href = "secondquiz.html";
}

//////////////////////////second////////////////////
function submitSecondAnswers(e) {
  e.preventDefault();

  var total = 6;
  var secondpoints = 0;

  // Get User Input
  var q1 = document.forms["quizForm"]["q1"].value;
  var q2 = document.forms["quizForm"]["q2"].value;
  var q3 = document.forms["quizForm"]["q3"].value;
  var q4 = document.forms["quizForm"]["q4"].value;
  var q5 = document.forms["quizForm"]["q5"].value;
  var q6 = document.forms["quizForm"]["q6"].value;

  // Validation
  for (i = 1; i <= total; i++) {
    if (eval("q" + i) == null || eval("q" + i) == "") {
      alert("You missed question " + i);
      return false;
    }
  }

  // Check Answers
  for (i = 1; i <= total; i++) {
    if (eval("q" + i) == "a") {
      secondpoints = secondpoints + 1;
    }
    if (eval("q" + i) == "b") {
      secondpoints = secondpoints + 2;
    }
    if (eval("q" + i) == "c") {
      secondpoints = secondpoints + 3;
    }
    if (eval("q" + i) == "d") {
      secondpoints = secondpoints + 4;
    }
    if (eval("q" + i) == "e") {
      secondpoints = secondpoints + 5;
    }
  }
  sessionStorage.setItem("secondpoints", secondpoints);

  location.href = "thirdquiz.html";
}

///////////////////////////////////////third//////////////////
function submitThirdAnswers(e) {
  e.preventDefault();

  var total = 6;
  var thirdpoints = 0;

  // Get User Input
  var q1 = document.forms["quizForm"]["q1"].value;
  var q2 = document.forms["quizForm"]["q2"].value;
  var q3 = document.forms["quizForm"]["q3"].value;
  var q4 = document.forms["quizForm"]["q4"].value;
  var q5 = document.forms["quizForm"]["q5"].value;
  var q6 = document.forms["quizForm"]["q6"].value;

  // Validation
  for (i = 1; i <= total; i++) {
    if (eval("q" + i) == null || eval("q" + i) == "") {
      alert("You missed question " + i);
      return false;
    }
  }

  // Check Answers
  for (i = 1; i <= total; i++) {
    if (eval("q" + i) == "a") {
      thirdpoints = thirdpoints + 1;
    }
    if (eval("q" + i) == "b") {
      thirdpoints = thirdpoints + 2;
    }
    if (eval("q" + i) == "c") {
      thirdpoints = thirdpoints + 3;
    }
    if (eval("q" + i) == "d") {
      thirdpoints = thirdpoints + 4;
    }
    if (eval("q" + i) == "e") {
      thirdpoints = thirdpoints + 5;
    }
  }
  sessionStorage.setItem("thirdpoints", thirdpoints);

  location.href = "fourthquiz.html";
}
////////////////////////////////////////four///////////////
function submitFourthAnswers(e) {
  e.preventDefault();

  var total = 6;
  var fourthpoints = 0;

  // Get User Input
  var q1 = document.forms["quizForm"]["q1"].value;
  var q2 = document.forms["quizForm"]["q2"].value;
  var q3 = document.forms["quizForm"]["q3"].value;
  var q4 = document.forms["quizForm"]["q4"].value;
  var q5 = document.forms["quizForm"]["q5"].value;
  var q6 = document.forms["quizForm"]["q6"].value;

  // Validation
  for (i = 1; i <= total; i++) {
    if (eval("q" + i) == null || eval("q" + i) == "") {
      alert("You missed question " + i);
      return false;
    }
  }

  // Check Answers
  for (i = 1; i <= total; i++) {
    if (eval("q" + i) == "a") {
      fourthpoints = fourthpoints + 1;
    }
    if (eval("q" + i) == "b") {
      fourthpoints = fourthpoints + 2;
    }
    if (eval("q" + i) == "c") {
      fourthpoints = fourthpoints + 3;
    }
    if (eval("q" + i) == "d") {
      fourthpoints = fourthpoints + 4;
    }
    if (eval("q" + i) == "e") {
      fourthpoints = fourthpoints + 5;
    }
  }
  sessionStorage.setItem("fourthpoints", fourthpoints);

  location.href = "fifthquiz.html";
}
//////////////////////////////////////five/////////////
function submitFifthAnswers(e) {
  e.preventDefault();

  var total = 6;
  var fifthpoints = 0;

  // Get User Input
  var q1 = document.forms["quizForm"]["q1"].value;
  var q2 = document.forms["quizForm"]["q2"].value;
  var q3 = document.forms["quizForm"]["q3"].value;
  var q4 = document.forms["quizForm"]["q4"].value;
  var q5 = document.forms["quizForm"]["q5"].value;
  var q6 = document.forms["quizForm"]["q6"].value;

  // Validation
  for (i = 1; i <= total; i++) {
    if (eval("q" + i) == null || eval("q" + i) == "") {
      alert("You missed question " + i);
      return false;
    }
  }

  // Check Answers
  for (i = 1; i <= total; i++) {
    if (eval("q" + i) == "a") {
      fifthpoints = fifthpoints + 1;
    }
    if (eval("q" + i) == "b") {
      fifthpoints = fifthpoints + 2;
    }
    if (eval("q" + i) == "c") {
      fifthpoints = fifthpoints + 3;
    }
    if (eval("q" + i) == "d") {
      fifthpoints = fifthpoints + 4;
    }
    if (eval("q" + i) == "e") {
      fifthpoints = fifthpoints + 5;
    }
  }
  sessionStorage.setItem("fifthpoints", fifthpoints);

  location.href = "end.html";
}
