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
        "KSS":{1:"파전",2:"가래떡 구이",3:"어묵",4:"떡볶이",5:""},
        "KTS":{1:"파전",2:"닭발",3:"닭강정",4:"떡볶이"},
        "KSM":{1:"제육볶음",2:"비빔밥",3:"국밥"},
        "KTM":{1:"부대찌개",2:"삼겹살",3:"닭갈비"},
        /*==============한식 메뉴===================*/
        "CSS":{1:"탕후루",2:"탕후루",3:"탕후루"},
        "CTS":{1:"탕후루",2:"탕후루",3:"탕후루"},
        "CSM":{1:"자장면",2:"동파육",3:"짬뽕"},
        "CTM":{1:"훠궈",2:"마라탕",3:"마라롱샤"},
        /*=========중식메뉴==================*/
        "JSS":{1:"당고",2:"오코노미야끼",3:"타코야끼"},
        "JTS":{1:"당고",2:"오코노미야끼",3:"타코야끼"},
        "JSM":{1:"덮밥",2:"돈가스",3:"라멘"},
        "JTM":{1:"초밥",2:"돈가스",3:"스키야키"},
        /*===============일식메뉴 =============*/
        "WSS":{1:"햄버거",2:"핫도그",3:"도넛"},
        "WTS":{1:"햄버거",2:"파이",3:"샌드위치"},
        "WSM":{1:"햄버거",2:"스테이크",3:"버팔로윙"},
        "WTM":{1:"미트로프",2:"스테이크",3:"피자"}
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
      console.log( msg );
      for(i=0; i<5; i++){
      $(".search_page").append("<a href='"+msg.documents[i].url+"' target='_blank'>'"+ msg.documents[i].title+"'</a>");
      }
    });
}
       
var result_btn= document.querySelector(".result_btn");
var search=document.querySelector(".search_page");
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
    document.querySelector(".foodname").innerHTML=foodname[""+balance][Math.floor(Math.random() * 3)+1];
    foodsearch();
   
  }
  /*API 서버에서 검색 값 가져오기*/

}









  

