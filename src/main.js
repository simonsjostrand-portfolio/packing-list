import { getJSON, capatalize, resetInputs } from './helpers.js';
import { API_URL, API_ID, TIMEOUT } from './config.js';

const formPacking = document.querySelector('.packing-form');
const inputItem = document.querySelector('#item-input');
const quantityEl = document.querySelector('#quantity');

const packingList = document.querySelector('.packing-list');

///////////////////////////////////////////////////////////////////////////////

const renderItem = function (item) {
  const html = `
  <li class="list-item">
    <p class="item-quantity">${item.quantity} st</p>
    <div class="item-wrapper">
      <div class="img-wrapper">
        <img class="item-img" src="${
          item.imgURL || 'src/backup-img.jpg'
        }" alt="${item.description}" />
      </div>
      <p class="item-name">${capatalize(item.name)}</p>
    </div>
    <button class="btn-packed">Packed</button>
    <p class="btn-delete">❌</p>
  </li>
`;
  packingList.insertAdjacentHTML('afterbegin', html);
};

const fetchItemImage = async function (query, quantity) {
  try {
    const data = await getJSON(query, API_URL, API_ID);

    const item = {
      name: query,
      quantity: quantity,
      imgURL: data?.urls?.thumb,
      description: data?.alt_description,
    };

    renderItem(item);
  } catch (err) {
    console.error(err);
  }
};

// Event handlers
const togglePackedState = e => {
  if (e.target.classList.contains('btn-packed')) {
    const itemWrapper = e.target
      .closest('.list-item')
      .querySelector('.item-wrapper');

    const isPacked = itemWrapper.classList.toggle('packed');
    e.target.textContent = isPacked ? 'Unpack' : 'Packed';
  }
};

const handleDeleteItem = e => {
  if (e.target.classList.contains('btn-delete')) {
    e.target.closest('.list-item').remove();
  }
};

const handleSubmit = e => {
  e.preventDefault();

  const query = inputItem.value;
  const quantity = quantityEl.value;

  fetchItemImage(query, quantity);
  resetInputs(formPacking, inputItem);
};

// Event listeners
formPacking.addEventListener('submit', handleSubmit);
packingList.addEventListener('click', handleDeleteItem);
packingList.addEventListener('click', togglePackedState);
