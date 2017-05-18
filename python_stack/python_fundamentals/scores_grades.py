import random

def scores_grades():
    print "Scores and Grades"
    for i in range(0,11):
        grade = random.randint(60,100)
        if grade > 59 and grade < 70:
            print "Score: " + str(grade) + "; Your grade is D"
        elif grade > 69 and grade < 80:
            print "Score: " + str(grade) + "; Your grade is C"
        elif grade > 79 and grade < 90:
            print "Score: " + str(grade) + "; Your grade is B"
        elif grade > 89 and grade <= 100:
            print "Score: " + str(grade) + "; Your grade is A"
        else:
            print "You failed"
    print "End of the program. Bye!"
        
scores_grades()   
scores_grades()   
scores_grades()   
scores_grades()   
scores_grades()   
scores_grades()   
scores_grades()   



