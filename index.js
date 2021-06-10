var startbtn=document.querySelector(".start_btn"),
mainpage=document.querySelector(".main_page"),
choicepage=document.querySelector(".choice_page");

startbtn.addEventListener("click",function(){
  mainpage.style.display="none";
  startbtn.style.display="none";
  choicepage.classList.add("after");
});

var label1= document.querySelectorAll(".btn_container label"),
    input1=document.querySelectorAll(".country");

    for(var i=0; i<label1.length; i++ ){
         label1[i].addEventListener("click",function(event){
           for(var i=0; i<input1.length; i++ ){
           input1[i].value="0";
           a=event.target.id;
           var inputID1=document.querySelector("#"+a);
           inputID1.value="1";
           }
           countryresult();
         });
    }




    var label2= document.querySelectorAll(".btn_container2 label"),
    input2=document.querySelectorAll(".taste");

    for(var i=0; i<label2.length; i++ ){
         label2[i].addEventListener("click",function(event){
           for(var i=0; i<input2.length; i++ ){
           input2[i].value="0";
           a=event.target.id;
           var inputID2=document.querySelector("#"+a);
           inputID2.value="1";
           }
           tasteresult();
         });
    }



    var label3= document.querySelectorAll(".btn_container3 label"),
    input3=document.querySelectorAll(".kind");

    for(var i=0; i<label3.length; i++ ){
         label3[i].addEventListener("click",function(event){
           for(var i=0; i<input3.length; i++ ){
           input3[i].value="0";
           a=event.target.id;
           var inputID3=document.querySelector("#"+a);
           inputID3.value="1";
           }
           kindresult();
         });
    } 
    var mbti="";
function countryresult(){
  if(input1[0].value==1){
    mbti="";
    mbti+="K";
  }
  else if(input1[1].value==1){
    mbti="";
    mbti+="C";
  }
  else if(input1[2].value==1){
    mbti="";
    mbti+="J";
  }
  else if(input1[3].value==1){
    mbti="";
    mbti+="W";
  }
  }

var mbti2=""
  function tasteresult(){
    if(input2[0].value==1){
      mbti2="";
      mbti2+="S";
    }
    else if(input2[1].value==1){
      mbti2="";
      mbti2+="T";
    }
    
    }

var mbti3=""
  function kindresult(){
      if(input3[0].value==1){
        mbti3="";
        mbti3+="S";
      }
      else if(input3[1].value==1){
        mbti3="";
        mbti3+="M";
      }

      
      }
 var foodname= {
        "KSS":{1:"파전",2:"김밥",3:"어묵",4:"떡볶이",5:"닭강정",6:"라면",7:"만두"},
        "KTS":{1:"파전",2:"닭발",3:"닭강정",4:"떡볶이",5:"만두",6:"라면",7:"돼지 껍데기"},
        "KSM":{1:"제육볶음",2:"비빔밥",3:"국밥",4:"라면",5:"떡볶이",6:"닭발",7:"김치찌개"},
        "KTM":{1:"부대찌개",2:"삼겹살",3:"닭갈비",4:"족발",5:"김치찌개",6:"소고기",7:"간장게장"},
        /*==============한식 메뉴===================*/
        "CSS":{1:"탕후루",2:"탕수육",3:"딤섬",4:"물만두",5:"군만두",6:"군만두",7:"꿔바로우"},
        "CTS":{1:"딤섬",2:"탕수육",3:"탕후루",4:"물만두",5:"군만두",6:"꿔바로우",7:"군만두"},
        "CSM":{1:"자장면",2:"동파육",3:"짬뽕",4:"탕수육",5:"훠궈",6:"마라탕",7:"양꼬치"},
        "CTM":{1:"훠궈",2:"마라탕",3:"마라롱샤",4:"양꼬치",5:"자장면",6:"짬뽕",7:"동파육"},
        /*=========중식메뉴==================*/
        "JSS":{1:"당고",2:"오코노미야끼",3:"타코야끼",4:"라멘",5:"우동",6:"꼬치",7:"고로케"},
        "JTS":{1:"당고",2:"오코노미야끼",3:"타코야끼",4:"우동",5:"꼬치",7:"고로케"},
        "JSM":{1:"생선가스",2:"돈가스",3:"라멘",4:"초밥",5:"우동",6:"텐동",7:"소바"},
        "JTM":{1:"초밥",2:"돈가스",3:"스키야키",4:"라멘",5:"덮밥",6:"소바",7:"우동"},
        /*===============일식메뉴 =============*/
        "WSS":{1:"햄버거",2:"핫도그",3:"도넛",4:"토스트",5:"샌드위치",6:"빵",7:"파이"},
        "WTS":{1:"햄버거",2:"파이",3:"샌드위치",4:"토스트",5:"샌드위치",6:"빵",7:"핫도그"},
        "WSM":{1:"햄버거",2:"스테이크",3:"치킨윙",4:"샌드위치",5:"토스트",6:"스파게티",7:"치킨"},
        "WTM":{1:"치킨",2:"스테이크",3:"피자",4:"샌드위치",5:"햄버거",6:"스파게티",7:"감바스"}
       }



       
var result_btn= document.querySelector(".result_btn");
var search=document.querySelector(".search_page");
var rebtn=document.querySelector(".retry_btn");
result_btn.addEventListener("click",foodresult);
function foodresult(){ 
  var balance=mbti+mbti2+mbti3;
  if(mbti.length==0 || mbti2.length==0 || mbti3.length==0){
    alert("종류를 3개 다 선택해주세요")
  }
  else{
    choicepage.style.display="none";
    document.querySelector(".result_page").style.display="inline-block";
    setTimeout(function(){document.querySelector(".foodname").style.opacity="1";},1000);
    setTimeout(function(){search.classList.add("after");},1200);
    setTimeout(function(){rebtn.classList.add("after");},1200);
    document.querySelector(".foodname").innerHTML=foodname[balance][Math.floor(Math.random() * 7)+1];
    foodsearch();
   
  }
  /*API 서버에서 검색 값 가져오기*/

}
function foodsearch(){
  var name=document.querySelector(".foodname").innerHTML;
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v2/search/web",
    data: {query:name +"레시피"},
    headers:{Authorization:"KakaoAK f34a91ca9e1e99ad266cbc7e674571d2"}
  })
    .done(function(msg) {
      console.log( name );
      for(i=0; i<5; i++){
      $(".search_page").append("<a href='"+msg.documents[i].url+"' target='_blank'>'"+ msg.documents[i].title+"'</a>");
      }
    });

     
}





    
    var map_btn= document.querySelector(".map_btn");
    var map_btn2= document.querySelector(".map_btn2");
      map_btn.addEventListener("click",function(){
      document.querySelector(".food_map").classList.toggle("after");
      document.querySelector(".search_page").classList.toggle("after");
      map_btn.style.display="none";
      map_btn2.style.display="inline-block";
      
    });
    
    map_btn2.addEventListener("click",function(){
      document.querySelector(".food_map").classList.toggle("after");
      document.querySelector(".search_page").classList.toggle("after");
      
    });








  

