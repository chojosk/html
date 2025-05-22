document.addEventListener("DOMContentLoaded", () => {
    //요소 가져오기
    const img = document.querySelector(".mdiv > img");
    const txt1 = document.querySelector("#txt1") ; 
    const bt = document.querySelector(".mdiv > button") ;
    const bt2 = document.querySelector("#btArea > button") ;
    const btInput = document.querySelector("#btInput") ;
    const btArea = document.querySelector("#btArea") ;

    //flag 변수
    let flag = false;
    let n;
    //다시하기 영역 보이지 않게 초기화
    btArea.style.display = 'none';

    // 확인 버튼이 눌러지면 
    bt.addEventListener("click", ()=>{
        //1. flag가 false이면 랜덤수 n 생성하고 flag true로 변경
        //flag == flase vs. !flag
        if (!flag) {
            n = Math.floor(Math.random()*100) + 1;
            console.log(n);
            flag = true;
        }
        //입력값이 없을 때
        if(!txt1.value) {
            alert("숫자를 입력하세요.")
            txt1.focus()
            return;
            //리턴의 의미
        }
       
        //2. input에 입력한 값과 랜덤수 n을 비교
        //2.1 n보다 입력수가 크면 다운 이미지
        if (txt1.value > n) {
            img.setAttribute('src', "../img/down.png")
        }
        //2.1 n보다 입력수가 작으면 업 이미지
        else if (txt1.value < n){
            img.setAttribute('src', "../img/up.png")
        }
        //2-3. n과 입력수가 같으면 good이미지 보이기, 다시하기 버튼 보이기
        else {
            img.setAttribute('src', "../img/good.png")
            btInput.style.display = 'none';
            btArea.style.display = 'flex';
        }
    });

    // 다시 하기 버튼이 눌러지면
    bt2.addEventListener("click", ()=>{
    //1.flag 값을 false 만들기
        flag = false;
    //2.input과 확인 버튼이 다시 보이게 / what 이미지 복귀 및 txt 초기화 & 포커스
        img.setAttribute('src', "../img/what.png")  
        btInput.style.display = 'flex';
        btArea.style.display = 'none';
        txt1.value = "";
        txt1.focus();
        n = undefined;

    });
});


//카운트 횟수 체크하기
        
