function calcCgpa(subjectMark){
    var totalCredits = 0;
    var totalGradePoints = 0;

    var gradePoints = {
        'A+':4.0,
        'A':3.8,
        'B+':3.7,
        'B':3.3,
        'C+':3.0,
        'C':2.0
    }

for(var subject in subjectMark){
    if(subjectMark.hasOwnProperty(subject)){
        var grade = subjectMark[subject].grade;
        var credits = subjectMark[subject].credits;

        totalCredits+=credits;

        totalGradePoints += gradePoints[grade] * credits;
    }
}

var cgpa = totalGradePoints / totalCredits;
return cgpa.toFixed(2);

}

var subjectMark = {
    'Math' : {grade: 'A', credits: 3},
    'Science' : {grade: 'B+', credits: 4},
    'English' : {grade: 'A', credits: 3},
    'History' : {grade: 'B', credits: 3}  
};

var cgpa = calcCgpa(subjectMark);
console.log("CGPA"+ cgpa);