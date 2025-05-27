document.addEventListener("DOMContentLoaded", () => {
    const cols = document.querySelectorAll(".col");
    const bt = document.querySelector(".row > button");
    const msg = document.querySelector("#msg");

    let arr = [0, 0, 0, 0, 0, 0, 0, 0, 1]; // 0은 하트, 1은 폭탄을 의미합니다.
    const totalCells = arr.length;
    let gameStarted = false; // 게임 시작 여부를 나타냅니다.
    let revealedHearts = 0; // 찾은 하트의 개수입니다.
    let totalHeartsInGame = arr.filter(x => x === 0).length; // 게임 내 총 하트 개수입니다.
    let cellStates; // 각 셀이 클릭되었는지 추적하는 배열입니다. [false, false, ...] 형태입니다.

    // 게임을 초기화하거나 재설정하는 함수입니다.
    function initGame() {
        // 배열을 섞어 폭탄 위치를 무작위로 변경합니다.
        arr.sort(() => Math.random() - 0.5);
        // console.log("섞인 배열 (디버깅용):", arr); // 디버깅 시 이 줄의 주석을 해제하여 확인하세요.

        gameStarted = true;
        revealedHearts = 0;
        totalHeartsInGame = arr.filter(x => x === 0).length; // arr 배열이 변경될 경우를 대비해 다시 계산합니다.
        cellStates = Array(totalCells).fill(false); // 클릭된 상태를 초기화합니다.

        bt.innerHTML = "게임중....";
        msg.innerHTML = "하트를 찾아보세요! (폭탄은 피하세요 💣)";

        // 이전 게임의 셀 표시 상태를 초기화합니다.
        cols.forEach(col => {
            col.innerHTML = ""; // ❤️ 또는 💣 같은 내용을 지웁니다.
            col.className = "col"; // 클래스를 "col"로 초기화합니다 (스타일 초기화 목적).
        });
    }

    // "폭탄섞기" (폭탄 섞기 / 다시 시작) 버튼에 대한 이벤트 리스너입니다.
    bt.addEventListener("click", () => {
        initGame(); // 게임을 시작하거나 다시 시작합니다.
    });

    // 클릭 가능한 각 열(셀)에 대한 이벤트 리스너입니다.
    cols.forEach((col, idx) => {
        col.addEventListener("click", () => {
            if (!gameStarted) {
                msg.innerHTML = "폭탄섞기 버튼을 눌러 게임을 시작하세요.";
                return;
            }

            if (cellStates[idx]) {
                // 이미 클릭되어 내용이 표시된 셀입니다. 아무것도 하지 않습니다.
                return;
            }
            cellStates[idx] = true; // 이 셀을 클릭됨/공개됨으로 표시합니다.

            if (arr[idx] === 1) { // 폭탄을 클릭한 경우입니다.
                col.innerHTML = '💣';
                col.classList.add("bomb"); // CSS 스타일링을 위한 클래스 추가
                msg.innerHTML = "펑! 폭탄을 찾았습니다! 게임 종료 😭";
                gameStarted = false;
                bt.innerHTML = "다시하기";

                // 모든 셀의 실제 내용을 공개합니다.
                cols.forEach((cellToReveal, cellIdx) => {
                    if (arr[cellIdx] === 1) {
                        cellToReveal.innerHTML = '💣';
                        cellToReveal.classList.add("bomb");
                    } else {
                        cellToReveal.innerHTML = '❤️';
                        cellToReveal.classList.add("heart");
                    }
                });

            } else { // 하트를 클릭한 경우입니다.
                col.innerHTML = '❤️';
                col.classList.add("heart"); // CSS 스타일링을 위한 클래스 추가
                revealedHearts++;

                if (revealedHearts === totalHeartsInGame) {
                    msg.innerHTML = "축하합니다! 모든 하트를 찾았습니다! 🎉";
                    gameStarted = false;
                    bt.innerHTML = "새 게임";
                } else {
                    msg.innerHTML = `하트 ${revealedHearts}개 발견! ${totalHeartsInGame - revealedHearts}개 남았습니다.`;
                }
            }
        });
    });
});