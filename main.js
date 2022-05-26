name_of_the_student_array=[];
function submit() 
{
   var display_student_array=[];
   for (var j=1; j<=4; j++)
   {
       var name_of_the_student_=document.getElementById("name_of_the_student_"+j).value;
       console.log(name_of_the_student);
       name_of_the_student_array.push(name_of_the_student);


   }
   console.log(name_of_the_student_array);
   var length_of_student=name_of_the_student_array.length;
   console.log(length_of_student_array);

   for (k=0; k<length_of_student_array; k++)
   {
       display_student_array.push("<h4>NAME-"+name_of_the_student_array[k] + "</h4>");
       console.log(display_student_array);
   }
   console.log(display_student_array);
   document.getElementById("display_name with comas").innerHTML=display_student_array;
   document.getElementById("sumbit_button").style.display="none";



    
    
    
}