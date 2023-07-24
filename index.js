

const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');
let intervalId = ''

buttonEl.addEventListener('click', () => { /// в этой функции получаем содержание инпута и передаем ее второй функции который рисует и делает обратный отчет
  const seconds = parseInt(inputEl.value);
  const errorMessage = document.querySelector('.alertMessage')
  if (!seconds) {
    return errorMessage.style.display = 'block'
  }
  if (seconds <= 0) {
    return errorMessage.style.display = 'block'

  }
  if (intervalId) {
    clearInterval(intervalId); // Останавливаем предыдущий интервал, если он был запущен
  }

  animateTimer(seconds);

  inputEl.value = '';

});


const createTimerAnimator = (seconds) => {


  intervalId = setInterval(() => {

    seconds--;


    const hours = Math.floor(seconds / 3600); // рисуем в спан 
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    timerEl.innerHTML = `${hours}h:${minutes}m:${remainingSeconds}s`; // ставим в нужном формате


    if (seconds === 0) { // когда отчет закончится 
      clearInterval(intervalId);
      alert('Обратный отсчет завершен!');
    }

  }, 1000);
};

const animateTimer = createTimerAnimator;




