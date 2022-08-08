document.getElementById('timer').value=m+":"+s+" remaining"

s=s-1
q=setTimeout("quizCount()", 1000) 

if (wrongtotal = [1,2,3,4,5,6,7,8]) 
{s=s-10;}
if (s<1)
{ m=m-1; s=59;}

if (m<0)
{