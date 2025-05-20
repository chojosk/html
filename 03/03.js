/*
function Hello() {
    alert("누르지 말았어야지 ㅋㅋ");
}
*/

//화살표 함수
//let & const
const Hello = () => {
    // alert("누르지 말았어야지 ㅋㅋ");
    console.log("누르지 말았어야지 ㅋㅋ by. " + name);

    var name = "CFTL" ;
    console.log("누르지 말았어야지 ㅋㅋ by. " + name);
} 

const Hello2 = () => {
    // alert("누르지 말았어야지 ㅋㅋ");
    // console.log("누르지 말았어야지 ㅋㅋ by. " + name);

    let name = "CFTL" ;
    // console.log("누르지 말았어야지 ㅋㅋ by. " + name);
    console.log(`누르지 말았어야지 ㅋㅋ by. ${name}`);
} 

const check = () => {
    let s = "123" ; 
    let x = "10" ; 

    console.log(s) ;    
    console.log(typeof(s)) ;
    // 숫자로만 구성되어 있는지? true: 문자열 포함 / false: 숫자로만 구성
  
    console.log(isNaN(s)) ;
    // 둘 다 숫자라면 숫자 연산을 하겠다는 if문
    if (!isNaN(s) && !isNaN(x)) {
        s = parseInt(s) ;
        x = parseInt(x) ; 
    }
    console.log(s + x) ;
    
}

const checkFor = () => {
    let s = "토마토,바나나" ; 
    
    console.log(s[0]) ;
    console.log(s.charAt(0)) ; 

    console.log(s.split(',')) ;
    console.log(s.indexOf(','));
    console.log(s.includes(','));

    for(let i = 0 ; i < s.length ; i++) {
        console.log(s[i]);
    }

    for(let c of s) {
        console.log(c);
    }
}