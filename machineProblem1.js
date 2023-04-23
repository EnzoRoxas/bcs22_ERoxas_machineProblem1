/*
   Program:       Computation of Grades Using Function
   Programmer:    Ralph Enzo B. Roxas
   Section:       BCS22
   Start Date:    April 17, 2023
   End Date:      April 25,2023

*/

      const enabArr =[];
      const summArr= [];
      
      
      const studentAcad1 = new Object();
      studentAcad1.Name_of_Student = prompt("Enter the Name of the Student: "); 


      for (let i = 0; i<5;i++){
            enabArr[i] = prompt("Enter Enabling Assessment " +[i+1]+": ");     
     }
      let classPart = getClassPart(enabArr[0], enabArr[1], enabArr[2], enabArr[3], enabArr[4]);
      studentAcad1.Class_Participation = classPart;
      


      for (let a = 0; a<3; a++){
      	summArr[a] = prompt("Enter Summative Assessment " + [a+1] + ": ");
      }
       let summGet = getSummative(summArr[0], summArr[1], summArr[2]);
       studentAcad1.Summative_Assessment = summGet;
       
    

       let examTest = getMajorExam();
       studentAcad1.Exam_Grade = examTest;


       let finalGet = getFinalGrade(classPart, summGet, examTest);
       studentAcad1.Grade_Score = finalGet;


        let gradeLetter = getLetter(finalGet);
        studentAcad1.Letter_Grade = gradeLetter;

     
     
     const studentAcad2 = new Object();
     studentAcad2.Name_of_Student = prompt("Enter the Name of the Student: ");
     

     for (let i = 0; i<5;i++){
            enabArr[i] = prompt("Enter Enabling Assessment " +[i+1]+":");     
     }
      classPart = getClassPart(enabArr[0], enabArr[1], enabArr[2], enabArr[3], enabArr[4]);
      studentAcad2.Class_Participation = classPart;
      

      
      for (let a = 0; a<3; a++){
      	summArr[a] = prompt("Enter Summative Assessment " +[a+1]+":");
      }
        summGet = getSummative(summArr[0], summArr[1], summArr[2]); 
        studentAcad2.Summative_Assessment = summGet;
        


        examTest = getMajorExam();
        studentAcad2.Exam_Grade = examTest;


        finalGet = getFinalGrade(classPart, summGet, examTest);
        studentAcad2.Grade_Score = finalGet;


         gradeLetter = getLetter(finalGet);
         studentAcad2.Letter_Grade = gradeLetter;


     
     const studentAcad3 = new Object();
     studentAcad3.Name_of_Student = prompt("Enter the Name of the Student: ");
     

     for (let i = 0; i<5;i++){
            enabArr[i] = prompt("Enter Enabling Assessment " +[i+1]+":");     
     }
       classPart = getClassPart(enabArr[0], enabArr[1], enabArr[2], enabArr[3], enabArr[4]);
       studentAcad3.Class_Participation = classPart;
       

     
     for (let a = 0; a<3; a++){
       summArr[a] = prompt("Enter Summative Assessment " +[a+1]+":");
      }
       summGet = getSummative(summArr[0], summArr[1], summArr[2]);
       studentAcad3.Summative_Assessment = summGet;
       


       examTest = getMajorExam();
       studentAcad3.Exam_Grade = examTest;


       finalGet = getFinalGrade(classPart, summGet, examTest);
       studentAcad3.Grade_Score = finalGet;


        gradeLetter = getLetter(finalGet);
        studentAcad3.Letter_Grade = gradeLetter;

     
     const studentAcad4 = new Object();
     studentAcad4.Name_of_Student = prompt("Enter the Name of the Student: ");
     

     for (let i = 0; i<5;i++){
            enabArr[i] = prompt("Enter Enabling Assessment " +[i+1]+":");     
     }
      classPart = getClassPart(enabArr[0], enabArr[1], enabArr[2], enabArr[3], enabArr[4]);
      studentAcad4.Class_Participation = classPart;
      


     for (let a = 0; a<3; a++){
      summArr[a] = prompt("Enter Summative Assessment " +[a+1]+":");
      }
      summGet = getSummative(summArr[0], summArr[1], summArr[2]);
      studentAcad4.Summative_Assessment = summGet;
      


      examTest = getMajorExam();
      studentAcad4.Exam_Grade = examTest;


      finalGet = getFinalGrade(classPart, summGet, examTest);
      studentAcad4.Grade_Score = finalGet;


        gradeLetter = getLetter(finalGet);
        studentAcad4.Letter_Grade = gradeLetter;


     
     const studentAcad5 = new Object();
     studentAcad5.Name_of_Student = prompt("Enter the Name of the Student: ");
     for (let i = 0; i<5;i++){
            enabArr[i] = prompt("Enter Enabling Assessment " +[i+1]+":");     
     } 
   
     classPart = getClassPart(enabArr[0], enabArr[1], enabArr[2], enabArr[3], enabArr[4]);
     studentAcad5.Class_Participation = classPart;
     

     for (let a = 0; a<3; a++){
      summArr[a] = prompt("Enter Summative Assessment " +[a+1]+":");
      }
      summGet = getSummative(summArr[0], summArr[1], summArr[2]);
      studentAcad5.Summative_Assessment = summGet;
      


      examTest = getMajorExam();
      studentAcad5.Exam_Grade = examTest;


      finalGet = getFinalGrade(classPart, summGet, examTest);
      studentAcad5.Grade_Score = finalGet;


       gradeLetter = getLetter(finalGet);
       studentAcad5.Letter_Grade = gradeLetter;

     

     function getClassPart(a, b, c, d ,e){
     	 
     	 let enabClass = (parseInt(a) + parseInt(b) + parseInt(c) + parseInt(d) + parseInt(e)) /5;
       let enabClass2 = Math.round(enabClass);

         return parseInt(enabClass2);
     }

     function getSummative (x, y, z){
        let sumAssess = (parseInt(x) + parseInt(y) + parseInt(z)) /3;
        let sumAssess2 = Math.round(sumAssess);

        return parseInt(sumAssess2);
     }

     function getMajorExam (){
     	 let majorGrade =  prompt("Enter Major Exam Grade: ");
     	 
     	 return parseInt(majorGrade);
     } 

     function getFinalGrade(a, b, c){
        let gradeScore = (a*0.3) + (b* 0.3) + (c*0.4);
        let gradeScore2 = Math.round(gradeScore)

        return parseInt(gradeScore2);
     }

     function getLetter (x){
            
            if(x >= 90 ){
            	x = "A";
            }

            else if(x >= 80){
              x = "B";
            }

            else if(x >= 70){
            	x = "C";
            }

            else if (x >= 60){
            	x = "D";
            }

            else{
            	x ="F";
            }

            return x;
     } 
 

     const studentGrade = [];
     studentGrade.push(studentAcad1);    
     studentGrade.push(studentAcad2);
     studentGrade.push(studentAcad3);
     studentGrade.push(studentAcad4);
     studentGrade.push(studentAcad5);
     
     console.table(studentGrade);






    
