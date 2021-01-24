$("#news_btn").on("click",function(event){
     event.preventDefault();

      let newsletter=$("#newsletter").serializeArray();
      newsletter.push({name:"newsletter",value:"newsletter"});
     let newsmail_valid=/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
     if(true){
          $.ajax({
             type:"post",
             url:"php/mail.php",
             data:newsletter,
             success:function(data){
               alert(data);
             }
          });
     }


   });

    
 let data;  

 $("#inner_btn").on("click",function(event) {
       event.preventDefault();
        data=$("#contact-form").serializeArray();
 
        
      if(check()){  
         if(isEmail()&&mobilValid()){

             data.push({name: "join", value: "join"});
  
     $.ajax({
        type:"post",
        url:"php/mail.php",
        data:data,
        success:function(data){
           alert(data);
        }
        
     });
   }
  }

 });


let checker;
  function check(){
    
    checker=0;

     data.forEach( function(element, index) {
   
       if(element.value===""){
             checker=1;
            
       }
  
     });

if(checker===1){return false;}else{return true;}

  }

  function mobilValid(){
   if(data[3].value.length==10){
         var phone=/^[0-9]*$/;
         return phone.test(data[3].value);
       }
         else{
          return false;
        }
       }
  function isEmail(){ var regix=/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;        
        return regix.test(data[2].value);}