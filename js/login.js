document.getElementById('btn-submit').addEventListener('click',function(){
   const UserMail = document.getElementById('user-email')
      const   email= UserMail.value; 
   const Userpassowrd = document.getElementById('user-password')
      const  password= Userpassowrd.value; 
     console.log(email,password) 

     if(email ==="sohan@gmail.com" && password==="sohan004"){
       window.location.href= 'http://127.0.0.1:5500/js/bank.html'


      
     } 
     else{
        alert('invalid user')
     }
       
})  
