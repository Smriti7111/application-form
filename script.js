function validateform(){
    var forname=document.myform.fullname.value;
    var foremail=document.myform.email.value;
    var phone=document.myform.phone.value;
    var atposition=x.indexOf("@");  
    var dotposition=x.lastIndexOf(".");  

    if (forname==null || forname==""){
        alert("Name field cannot be blank");
        return false;
    }
    else if(foremail=="null" || foremail=="")
        alert("Email field cannot be blank");
        return false;

}