const runFlowbot = (state) => {
  const start = state.find((item) => {
    return item.id === 'welcome';
  });
  
  const messages = [start.message];
  
  const root = document.getElementById('root');
  
  const messagesEl = document.querySelector('.messages');
  const buttonsEl = document.querySelector('.buttons');
  
  const handleClick = (nextState) => {
    const currentState = state.find((item) => item.id === nextState);
    messages.push(res.message);
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
      button.type = 'button'; 
      button.classList.add('btn', 'btn-primary'); 
      button.addEventListener('click', () => handleClick(btn.next_state_id));
      buttonsEl.appendChild(button);
    })
  }
   
  renderMessages(messages);
  
  renderButtons(currentState);
}


