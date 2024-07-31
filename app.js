'use strict';
const questionsSection = document.querySelector('.questions-section');
const answers = document.querySelectorAll('.answer');
const icons = document.querySelectorAll('.icon');

questionsSection.addEventListener('click', function (e) {
  const clicked = e.target.closest('.question-container');
  if (!clicked) return;

  const answer = clicked.nextElementSibling;
  const isCurrentlyHidden = answer.classList.contains('hidden');

  answers.forEach((answer) => {
    answer.classList.add('hidden');
  });

  icons.forEach((icon) => {
    icon.src = 'assets/images/icon-plus.svg';
  });
  if (isCurrentlyHidden) {
    answer.classList.remove('hidden');
    const icon = clicked.querySelector('.icon');
    icon.src = 'assets/images/icon-minus.svg';
  } else {
    answer.classList.add('hidden');
    const icon = clicked.querySelector('.icon');
    icon.src = 'assets/images/icon-plus.svg';
  }
});
