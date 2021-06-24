const btnCreateTasks = document.querySelector('#btn-create-tasks');
const btnCreateBack = document.querySelector('#create-back-button');
const btnFavoritos = document.querySelector('#btn-favoritos');
const btnUsuario = document.querySelector('#btnUser');


// Navgacion tab
const tabHome = document.querySelector('#tab-home');

const ionItem = document.createElement('ion-item');
const ionIcon = document.createElement('ion-icon');
const ionLabelReason = document.createElement('ion-label');
const ionLabelAmount = document.createElement('ion-label');

console.log(location.href);

// Funtion
listeners();
function listeners() {

    if( tabHome ) {
      tabHome.addEventListener('click', () => {
        window.location.href = "/";
      });
    }

    if( btnCreateTasks ) {
      btnCreateTasks.addEventListener('click', () => {
        window.location.href = "/create";
      });
    }

    if( btnCreateBack ) {
      btnCreateBack.addEventListener('click', () => {
        window.location.href = "/";
      });
    }

    if( btnFavoritos ) {
      btnFavoritos.addEventListener('click', () => {
        window.location.href = "/favoritos";
      });
    }

    if( btnUsuario ) {
      btnUsuario.addEventListener('click', () => {
        window.location.href = "/yo";
      });
    }
}
// Validacion

const REASON_INPUT = document.querySelector('#input-reason');
const AMOUNT_INPUT = document.querySelector('#input-amunt');


const BTN_CANCEL = document.querySelector('#btn-cancel');
const BTN_CONFIRM = document.querySelector('#btn-confirm');


const EXPENSE_LIST = document.querySelector('#expense-list');
let expenseTotal = document.querySelectorAll('#expense-total');


const ALERT_CONTROLLER = document.querySelector('ion-alert-controller');


// AddEventListener --> Envento
document.addEventListener('DOMContentLoaded', function() {
  eventListener();
});

function eventListener() {
  BTN_CONFIRM.addEventListener('click', inputValidator);
  BTN_CANCEL.addEventListener('click', clear);
}

// Limpiando El Texto
function clear() {
    REASON_INPUT.value = '';
    AMOUNT_INPUT.value = '';
}

async function presentAlert() {
  let alert = document.createElement('ion-alert');
  alert.header = 'Invalid Input';
  alert.message = 'Plaser enter valid reason and amount';
  alert.buttons = ['Okay'];

  document.body.appendChild(alert);
  await alert.present();
}

function inputValidator() {

  const ENTERED_REASON = REASON_INPUT.value;
  const ENTERED_AMOUNT = AMOUNT_INPUT.value;

  if( ENTERED_REASON.trim().length <= 0 ||
      ENTERED_AMOUNT.trim() <= 0 ||
      ENTERED_AMOUNT.trim().length <= 0
 ) {
    presentAlert();
    return
  }


    let monto = parseInt(expenseTotal[0].textContent) + +ENTERED_AMOUNT;
    expenseTotal[0].textContent = monto;
    expenseTotal[1].textContent = monto;

    // Limpiar el html5
    clear();
}
