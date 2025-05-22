// 동일 구조 반복되므로 함수를 짜줌
const selChange = (s1, s2, l1, l2, t1,t2) => {
            //sel2의 값을 변경
        if (s1.value == "℃") s2.value = "℉";
        else s2.value = "℃";
        
        //label의 값을 변경
        //폼 요소 => value / 일반 요소 => innerHTML
        l1.innerHTML = s1.value;
        l2.innerHTML = s2.value;

        //input 값 초기화(클리어)
        t1.value = "";
        t2.value = "";
        t1.focus();

};


//내가 한거 + innerHTML과 .value
// const measureChange = (t1, l1) => {

//     const cf = (unit) => {
//         (unit - 32) / 1.8;
//     };
//     const fc = (unit) => {
//         (unit) * 1.8 + 32;
//     };

//     if (t1.value != null && l1.value == "℃") cf(t1.value);
//     else fc(t1.value)
// };



//2개 이상이면 배열로 잡아서 쓰는게 좋음
//셀렉트박스 하나 변경되면 나머지 셀렉트 박스와 label 2개 변경, 2개 단위 변경
// txt box 값이 입력되면 변환 계산

document.addEventListener("DOMContentLoaded", () => {
    ////1. dom 6 요소 추출
    const sel1 = document.querySelector("#sel1") ;
    const sel2 = document.getElementById("sel2") ;
    //querySelector getElementById 기능 같음
    const txt1 = document.querySelector("input");
    const txt2 = document.querySelector("[readonly]");
    const lab1 = document.querySelector("[for=txt1]") ;
    const lab2 = document.querySelector("[for=txt2]") ;

    ////2-1. 셀렉트 박스1의 값이 변경될 때
    sel1.addEventListener('change', () => {
        selChange(sel1, sel2, lab1, lab2, txt1,txt2);
    });

    ////2-2. 셀렉트 박스2의 값이 변경될 때
    sel2.addEventListener('change', () => {
        selChange(sel2, sel1, lab2, lab1, txt2,txt1);
    });

    txt1.addEventListener("input", () => {
        if(sel1.value == "℃") {
            txt2.value = parseFloat((txt1.value * (9/5)) + 32).toFixed(4);
        }
        else {
            txt2.value = parseFloat(txt1.value - 32) * (5/9).toFixed(4) ;
        }
    });






});

    //     for(let [idx,bt] of bts.entries()) {
            
    //     bt.addEventListener('click', (e) => {
    //         //0. 버튼 이벤트 방지
    //         e.preventDefault();

    //         //1. 컴퓨터 랜덤 수 생성, 이미지 변경
    //         let n = Math.floor(Math.random() * 6) + 1;
    //         imgs[0].setAttribute('src', `../img/${n}.png`)
    //         // imgs[0].src = ../img/${n}.png

    //         //2. 사용자 선택 수, 이미지 변경
    //         let usern = idx + 1 ;
    //         imgs[1].setAttribute('src', `../img/${usern}.png`)
            
    //         //3. 컴퓨터 수와 사용자 수가 같은지 비교
    //         if( n == usern ) {
    //             msg.innerHTML = "맞음";
    //         } 
    //         else {
    //             msg.innerHTML = "틀림";
    //         }
    //     });
    // }
        





