function validate()
{
    var a=document.getElementById("fname").value;
    if(a=="")
    {
        alert("PLEASE ENTER YOUR FIRST NAME");
        return false;
    }
    var b=document.getElementById("lname").value;
    if(b=="")
    {
        alert("PLEASE ENTER YOUR LAST NAME");
        return false;
    }
    var C=document.getElementById("emailid").value;
    var e= /^([a-zA-Z0-9\.-]+)@([a-zA-z0-9-]+)\.([a-z]{2,5})$/ ;
    if(e.test(C))
    {
        return true;
    }
    else{
        alert("ENTER VALID EMAIL ADDRESS");
        return false;
    }

}