document.addEventListener('DOMContentLoaded', () => {
    const imgs = document.querySelectorAll(".mdiv img") ;
    const bts = document.querySelectorAll(".mdiv button");
    const msg = document.querySelector("#msg") ;

    // for(let bt of bts) {
    //     bt.addEventListener('click', () => {
    //         //1. 컴퓨터 랜덤 수 생성, 이미지 변경
    //         let n = Math.floor(Math.random() * 6) + 1;
    //         imgs[0].setAttribute('src', `../img/${n}.png`)

    //         //2. 사용자 선택 수, 이미지 변경
    //         let usern = parseInt(bt.innerHTML[0]);
    //         imgs[0].setAttribute('src', `../img/${uern}.png`)
    //         //3. 컴퓨터 수와 사용자 수가 같은지 비교
    //     });

        for(let [idx,bt] of bts.entries()) {
            
        bt.addEventListener('click', (e) => {
            //0. 버튼 이벤트 방지
            e.preventDefault();

            //1. 컴퓨터 랜덤 수 생성, 이미지 변경
            let n = Math.floor(Math.random() * 6) + 1;
            imgs[0].setAttribute('src', `../img/${n}.png`)
            // imgs[0].src = ../img/${n}.png

            //2. 사용자 선택 수, 이미지 변경
            let usern = idx + 1 ;
            imgs[1].setAttribute('src', `../img/${usern}.png`)
            
            //3. 컴퓨터 수와 사용자 수가 같은지 비교
            if( n == usern ) {
                msg.innerHTML = "맞음";
            } 
            else {
                msg.innerHTML = "틀림";
            }
        });
    }
        





});