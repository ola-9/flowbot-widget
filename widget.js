const state = [
  {
    id: 'welcome',
    message: 'some message',
    buttons: [
      {
        text: 'Левая',
        next_state_id: 'left',
        type: 'button', // select
      },
      {
        text: 'Правая',
        next_state_id: 'right',
        type: 'button', // select
      },
    ],
  },
  {
    id: 'left',
    message: 'we are on left btn',
    buttons: [
      {
        text: 'Новый вопрос',
        next_state_id: 'next',
      },
      {
        text: 'Вернуться назад',
        next_state_id: 'welcome',
      },
    ],
  },
  {
    id: 'right',
    message: 'we are on right btn',
    buttons: [
      {
        text: 'Новый вопрос',
        next_state_id: 'next',
      },
      {
        text: 'Вернуться назад',
        next_state_id: 'welcome',
      },
    ],
  },
  {
    id: 'next',
    message: 'this is final step',
    buttons: [
      {
        text: 'Начать',
        next_state_id: 'welcome',
      },
    ]
  }
];

const start = state.find((item) => {
  return item.id === 'welcome';
});

let currentState = start;
const messages = [start.message]; // Здесь мы создаем массив из одного элемента

const root = document.getElementById('root');
const messagesEl = document.querySelector('.messages');
const buttonsEl = document.querySelector('.buttons');

const handleClick = (nextState) => {
  const res = state.find((item) => item.id === nextState);
  messages.push(res.message);
  currentState = res;
  console.log('click');
  renderMessages(messages);
  renderButtons(currentState);
}

const renderMessages = (messages) => {
  messages.forEach((item, index) => {
    const p = document.createElement('p');
    p.textContent = item;
    messagesEl.appendChild(p);

    if (index === messages.length - 1) {
      p.scrollIntoView();
    }
  });
}

const renderButtons = (state) => {
    buttonsEl.innerHTML = '';
    state.buttons.forEach((btn) => {
    const button = document.createElement('button');
    button.textContent = btn.text;
    button.addEventListener('click', () => handleClick(btn.next_state_id));
    buttonsEl.appendChild(button);
  })
}


renderMessages(messages);

renderButtons(currentState);
