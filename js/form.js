function formSubmit(form){
    var fname = form.fname.value;
    var lname = form.lname.value;
    var email = form.email.value;
    var phoneNum = form.phoneNum.value;
    var subject = form.inqSubject.value;
    var inq = document.getElementById("inq").value;
    alert("Your inquiry has been registered with the following info:\nFirst Name: " + fname + "\nLast Name: " + lname + "\nEmail: " + email + "\nPhone Number: " + phoneNum + "\nSubject: " + subject + "\nInquiry: " + inq);
}
