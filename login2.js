function validate()
{
 
    var user=document.Regform.userid.value;
    var pass1=document.Regform.pass.value;
       
function test(a,b,callback)
{

if(a=='admin'&& b=='12345')
{

    alert("success");
callback();
   // window.location.assign("mainpage.html");
    

}

else
{
    alert("Incorrect username or password");
    
    return false;
}
}
function lock1()
{
 window.location.assign("mainpage.html");
   
}

test(user,pass1,lock1);


}


