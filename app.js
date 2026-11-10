// =========================================
// 1. Registro del Service Worker
// =========================================
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('✅ SW registrado', reg))
      .catch(err => console.log('❌ Error SW', err));
  });
}

// =========================================
// 2. Referencias del DOM
// =========================================
const form = document.getElementById('expense-form');
const lista = document.getElementById('lista-gastos');
const totalDisplay = document.getElementById('total-display');
const countDisplay = document.getElementById('count-display');

// =========================================
// 3. Datos
// =========================================
let gastos = JSON.parse(localStorage.getItem('gastos')) || [];

// =========================================
// 4. Render
// =========================================
function renderizar() {
  lista.innerHTML = '';

  // Contador
  countDisplay.textContent = gastos.length;

  // Estado vacío
  if (gastos.length === 0) {
    lista.innerHTML = `
      <li class="empty-state">
        Sin gastos aún.<br>Agrega el primero arriba.
      </li>
    `;
    totalDisplay.textContent = '$0.00';
    return;
  }

  let total = 0;

  [...gastos].reverse().forEach((gasto) => {
    total += parseFloat(gasto.monto);
    const li = document.createElement('li');
    li.innerHTML = `
      <div>
        <strong>${escaparHTML(gasto.concepto)}</strong>
        <span class="category-tag">${escaparHTML(gasto.categoria)}</span>
      </div>
      <span>$${parseFloat(gasto.monto).toFixed(2)}</span>
    `;
    lista.appendChild(li);
  });

  totalDisplay.textContent = `$${total.toFixed(2)}`;
}

// =========================================
// 5. Escape HTML
// =========================================
function escaparHTML(texto) {
  const div = document.createElement('div');
  div.textContent = texto;
  return div.innerHTML;
}

// =========================================
// 6. Guardar gasto
// =========================================
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nuevoGasto = {
    id: Date.now(),
    concepto: document.getElementById('concepto').value.trim(),
    monto: parseFloat(document.getElementById('monto').value),
    categoria: document.getElementById('categoria').value,
    fecha: new Date().toISOString()
  };

  gastos.push(nuevoGasto);
  localStorage.setItem('gastos', JSON.stringify(gastos));
  form.reset();
  renderizar();
});

// Render inicial
renderizar();