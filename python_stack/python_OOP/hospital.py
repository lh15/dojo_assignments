class Patient(object):
    # the __init__ method is called every time a new object is created
    def __init__(self, id, name, allergies):
        # set some instance variables. just like any variable we can call these anything
        self.id = id
        self.name = name
        self.allergies = allergies
        self.bedNum = 0
        # self.display_info()
        
    def display_info(self):
        # print "Id: " + str(self.id) + "\n", "Name: " + str(self.name) + "\n" , "Allergies: " + str(self.allergies) + "\n", "Bed Number: " + str(self.bedNum)
        return self


class Hospital(object):
    # the __init__ method is called every time a new object is created
    def __init__(self, name, max):
        # set some instance variables. just like any variable we can call these anything
        self.patients = []
        self.patientsAmt = len(self.patients)
        self.name = name
        self.max = max
        # self.display_info()

    def addmitPatient(self, patient):
        if self.patientsAmt < self.max:
            self.patients.append(patient)
            self.patientsAmt = len(self.patients)
            patient.bedNum = self.patients.index(patient)+1
            print str(patient.name) + " has been admitted to the hospital and their bed number is: " + str(patient.bedNum)
        else:
            print "sorry were full :("
        return self

    def dischargePatient(self, removeName):
        for index, patient in enumerate(self.patients):
            if patient.name == removeName:
                self.patients.pop(index)
                self.patientsAmt = len(self.patients)
                patient.bedNum = 0
                print str(patient.name) + " has been discharged from the hospital"
                return self
            
        print "sorry we dont have that patient"
        return self

   
    def display_info(self):
        print "        -------------         "
        print self.name + " Hospital Database" + "\n", "        -------------         "
        print "Amount of Patients: " + str(self.patientsAmt)
        print "        -------------         "
        for index, patient in enumerate(self.patients):
            print str(patient.name) +  " is number " + str((index+1)) + " in the hospital" 
            print "Id: " + str(patient.id) + "\n", "Name: " + str(patient.name) + "\n" , "Allergies: " + str(patient.allergies) + "\n", "Bed Number: " + str(patient.bedNum) + "\n", "        -------------         "
        
        return self


patient1 = Patient(123, "tom","none")
patient2 = Patient(35696, "some guy","a few allergies...")
patient3 = Patient(64657, "random dude","an allergie or 2...")

Hosptl1 = Hospital("swedish covenant", 3).addmitPatient(patient1).addmitPatient(patient2).addmitPatient(patient3).display_info().dischargePatient("tomi").dischargePatient("tom").display_info()