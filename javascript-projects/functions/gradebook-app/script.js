function getAverage(testScoreArr)
{
  if(testScoreArr.length <= 0)
  {
    return 0;
  }
  let averageScore = 0;
  // return the average score.
  for(const score of testScoreArr)
  {
    averageScore += score;
  }
  // safe to do this because we checked if <= 0 for length and returned previously.
   return averageScore /= testScoreArr.length;
}

function getGrade(score)
{
  let gradeStr = "F";
  if(score >= 100)
  {
    gradeStr = "A+";
  }
  else if(score >= 90 && score <= 99)
  {
    gradeStr = "A";
  }
  else if(score >= 80 && score <= 89)
  {
    gradeStr = "B";
  }
  else if(score >= 70 && score <= 79)
  {
    gradeStr = "C";
  }
  else if(score >= 60 && score <= 69)
  {
    gradeStr = "D";
  }
  return gradeStr;
}

function hasPassingGrade(score)
{
  if(getGrade(score) !== "F")
  {
    return true;
  }
  return false;
}

function studentMsg(arrOfScores, score)
{
  let msg = "";
  let classAverage = getAverage(arrOfScores);
  let grade = getGrade(score);
  msg = `Class average: ${classAverage}. Your grade: ${grade}.`;
  if(hasPassingGrade(score))
  {
    msg += " You passed the course.";
  }
  else
  {
    msg += " You failed the course.";
  }
  console.log(msg);
  return msg;
}
