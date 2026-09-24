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


// Define your custom orders using the data-id strings
const orders = {
  'alphabetical': ['a-friend-of-dorothy', 'all-the-empty-rooms', 'arco', 'armed-only-with-a-camera-the-life-and-death-of-brent-renaud', 'avatar-fire-and-ash', 'blue-moon', 'bugonia', 'butchers-stain', 'butterfly', 'children-no-more-were-and-are-gone', 'come-see-me-in-the-good-light', 'cutting-through-rocks', 'diane-warren-relentless', 'elio', 'f1', 'forevergreen', 'frankenstein', 'hamnet', 'if-i-had-legs-id-kick-you', 'it-was-just-an-accident', 'jane-austens-period-drama', 'jurassic-world-rebirth', 'kokuho', 'kpop-demon-hunters', 'little-amelie-or-the-character-of-rain', 'marty-supreme', 'mr-nobody-against-putin', 'one-battle-after-another', 'perfectly-a-strangeness', 'retirement-plan', 'sentimental-value', 'sinners', 'sirat', 'song-sung-blue', 'the-alabama-solution', 'the-devil-is-busy', 'the-girl-who-cried-pearls', 'the-lost-bus', 'the-perfect-neighbor', 'the-secret-agent', 'the-singers', 'the-smashing-machine', 'the-three-sisters', 'the-ugly-stepsister', 'the-voice-of-hind-rajab', 'train-dreams', 'two-people-exchanging-saliva', 'viva-verdi', 'weapons', 'wicked', 'zootopia-2'],
  'year': ['a-friend-of-dorothy', 'all-the-empty-rooms', 'arco', 'armed-only-with-a-camera-the-life-and-death-of-brent-renaud', 'avatar-fire-and-ash', 'blue-moon', 'bugonia', 'butchers-stain', 'butterfly', 'children-no-more-were-and-are-gone', 'come-see-me-in-the-good-light', 'cutting-through-rocks', 'diane-warren-relentless', 'elio', 'f1', 'forevergreen', 'frankenstein', 'hamnet', 'if-i-had-legs-id-kick-you', 'it-was-just-an-accident', 'jane-austens-period-drama', 'jurassic-world-rebirth', 'kokuho', 'kpop-demon-hunters', 'little-amelie-or-the-character-of-rain', 'marty-supreme', 'mr-nobody-against-putin', 'one-battle-after-another', 'perfectly-a-strangeness', 'retirement-plan', 'sentimental-value', 'sinners', 'sirat', 'song-sung-blue', 'the-alabama-solution', 'the-devil-is-busy', 'the-girl-who-cried-pearls', 'the-lost-bus', 'the-perfect-neighbor', 'the-secret-agent', 'the-singers', 'the-smashing-machine', 'the-three-sisters', 'the-ugly-stepsister', 'the-voice-of-hind-rajab', 'train-dreams', 'two-people-exchanging-saliva', 'viva-verdi', 'weapons', 'zootopia-2', 'wicked'],
  'awards': ['one-battle-after-another', 'sinners', 'frankenstein', 'kpop-demon-hunters', 'wicked', 'all-the-empty-rooms', 'avatar-fire-and-ash', 'f1', 'hamnet', 'mr-nobody-against-putin', 'sentimental-value', 'the-girl-who-cried-pearls', 'the-singers', 'two-people-exchanging-saliva', 'weapons', 'a-friend-of-dorothy', 'arco', 'armed-only-with-a-camera-the-life-and-death-of-brent-renaud', 'blue-moon', 'bugonia', 'butchers-stain', 'butterfly', 'children-no-more-were-and-are-gone', 'come-see-me-in-the-good-light', 'cutting-through-rocks', 'diane-warren-relentless', 'elio', 'forevergreen', 'if-i-had-legs-id-kick-you', 'it-was-just-an-accident', 'jane-austens-period-drama', 'jurassic-world-rebirth', 'kokuho', 'little-amelie-or-the-character-of-rain', 'marty-supreme', 'perfectly-a-strangeness', 'retirement-plan', 'sirat', 'song-sung-blue', 'the-alabama-solution', 'the-devil-is-busy', 'the-lost-bus', 'the-perfect-neighbor', 'the-secret-agent', 'the-smashing-machine', 'the-three-sisters', 'the-ugly-stepsister', 'the-voice-of-hind-rajab', 'train-dreams', 'viva-verdi', 'zootopia-2']
};

function changeOrder(orderType) {
  const grid = document.getElementById('imageGrid');
  const items = Array.from(grid.querySelectorAll('.grid-item'));
  const currentOrderSequence = orders[orderType];

  if (!currentOrderSequence) return;

  // Sort the DOM element array based on the index position in our specified list
  items.sort((a, b) => {
    const indexA = currentOrderSequence.indexOf(a.getAttribute('data-id'));
    const indexB = currentOrderSequence.indexOf(b.getAttribute('data-id'));
    return indexA - indexB;
  });

  // Re-append items to the grid container in the new order
  items.forEach(item => grid.appendChild(item));
}