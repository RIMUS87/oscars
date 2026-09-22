function switchTab(event, tabId) {
  // 1. Hide all tab content panes
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => content.classList.remove('active'));

  // 2. Remove the "active" class from all tab buttons
  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(button => button.classList.remove('active'));

  // 3. Show the current tab content pane
  document.getElementById(tabId).classList.add('active');

  // 4. Add the "active" class to the button that was clicked
  event.currentTarget.classList.add('active');
}
