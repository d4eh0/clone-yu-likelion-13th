const dDay = Date.parse("2025/03/09 00:00:00");

function updateCountdown() {
  const now = new Date();
  const timeLeft = dDay - now;

  if (timeLeft < 0) {
    clearInterval(countdownInterval);
    return;
  }

  // 남은 시간 계산
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // HTML 요소 가져오기
  const sections = document.querySelectorAll(".timer"); // 각 시간 단위 블록
  if (sections.length < 4) return; // 예상한 4개의 섹션이 없으면 종료

  // 각 시간 블록에 값 넣기
  sections[0].querySelectorAll("div")[0].innerText = Math.floor(days / 10); // 일 (십의 자리)
  sections[0].querySelectorAll("div")[1].innerText = days % 10; // 일 (일의 자리)

  sections[1].querySelectorAll("div")[0].innerText = Math.floor(hours / 10); // 시 (십의 자리)
  sections[1].querySelectorAll("div")[1].innerText = hours % 10; // 시 (일의 자리)

  sections[2].querySelectorAll("div")[0].innerText = Math.floor(minutes / 10); // 분 (십의 자리)
  sections[2].querySelectorAll("div")[1].innerText = minutes % 10; // 분 (일의 자리)

  sections[3].querySelectorAll("div")[0].innerText = Math.floor(seconds / 10); // 초 (십의 자리)
  sections[3].querySelectorAll("div")[1].innerText = seconds % 10; // 초 (일의 자리)
}

// 1초마다 업데이트
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();
