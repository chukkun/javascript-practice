// <-- https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true -->

function gradingStudents(grades) {
    // Write your code here
        var result = [];
    for (let i = 0; i < grades.length; i++) {
        var grade = grades[i];
        if (grade < 38) {
            result.push(grade); 
        } else {
            var nextMultipleOf5 = grade;
            while (nextMultipleOf5 % 5 !== 0) {
                nextMultipleOf5++;
            }
            if (nextMultipleOf5 - grade < 3) {
                result.push(nextMultipleOf5); 
            } else {
                result.push(grade); 
            }
        }
    }
    return result;
}