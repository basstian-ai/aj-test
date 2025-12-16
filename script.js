const customers = {
  nordbygg: {
    name: 'Nordbygg AS',
    contractId: 'K-98231',
    badges: ['-18% avtale på kontor', 'Fast frakt 0,-', '48t levering i Oslo'],
    contractDetails: [
      { label: 'Avtaleperiode', value: '01.01.2024 – 31.12.2025' },
      { label: 'Rabattnivå', value: '18% møbel / 12% lager' },
      { label: 'Leveringsbetingelser', value: '48t standard, ekspress etter avtale' },
      { label: 'Betaling', value: 'Faktura EHF, 30 dager' },
    ],
    statuses: [
      { title: 'Siste ordre', value: '#23144', subtitle: 'Leveres 12. mars', tone: 'success', pill: 'På vei' },
      { title: 'Ordre under behandling', value: '4', subtitle: '2 med ekspress', tone: 'warning', pill: 'Produksjon' },
      { title: 'Åpne saker', value: '2', subtitle: 'Frakt / reklamasjon', tone: 'danger', pill: 'Service' },
      { title: 'Leveringsstatus', value: '87%', subtitle: 'Levert etter SLA siste 30 dager', tone: 'success', pill: 'SLA' },
    ],
    quickActions: [
      { title: 'Bestill på nytt', description: 'Repliker forrige ordre med ett klikk', target: 'products' },
      { title: 'Mine avtalevarer', description: 'Kun sortimentet vi har avtalt', target: 'products' },
      { title: 'Mine lister', description: 'Ukentlig påfyll og faste pakker', target: 'lists' },
      { title: 'Kontakt kundeservice', description: 'Eget kontaktpunkt for Nordbygg', target: 'support' },
    ],
    products: [
      {
        name: 'Nordic skrivebord 160cm',
        sku: 'NB-Desk-160',
        category: 'Kontor',
        price: 6290,
        contractPrice: 5158,
        stock: 'På lager',
        leadTime: '48 timer',
        minOrder: 1,
      },
      {
        name: 'Ergo Pro kontorstol',
        sku: 'EP-Chair',
        category: 'Kontor',
        price: 5490,
        contractPrice: 4500,
        stock: 'Under innkjøp',
        leadTime: '1–2 uker',
        minOrder: 2,
      },
      {
        name: 'Heavy Duty pallereol, seksjon',
        sku: 'HD-Rack',
        category: 'Lager',
        price: 3990,
        contractPrice: 3280,
        stock: 'På lager',
        leadTime: '3–5 dager',
        minOrder: 2,
      },
      {
        name: 'Industrigarderobe – dobbelt',
        sku: 'IG-Double',
        category: 'HMS',
        price: 4990,
        contractPrice: 4090,
        stock: 'Lav beholdning',
        leadTime: '1 uke',
        minOrder: 4,
      },
      {
        name: 'Støydempende skjerm vegg',
        sku: 'SilentWall',
        category: 'Kontor',
        price: 2890,
        contractPrice: 2390,
        stock: 'På lager',
        leadTime: '48 timer',
        minOrder: 2,
      },
    ],
    lists: [
      {
        name: 'Lager – ukentlig påfyll',
        items: 12,
        description: 'Tape, hansker, paller, etiketter',
        lastOrdered: 'For 3 dager siden',
      },
      {
        name: 'Kontor – prosjektkontor',
        items: 8,
        description: 'Pult + skjerm + stol + kabelpakke',
        lastOrdered: 'For 2 uker siden',
      },
      {
        name: 'HMS – garderobe',
        items: 5,
        description: 'Benker, skap, tørkeskap',
        lastOrdered: 'For 1 måned siden',
      },
    ],
    packages: [
      {
        name: 'Standardpakke: Kontor 5 pers',
        items: '5x pult, 5x stol, 5x skjerm, kabelpakke',
        delivery: '48t levering',
      },
      {
        name: 'Lager startpakke',
        items: 'Reoler, pallestøtter, jekketraller, merkekit',
        delivery: '3–5 dager',
      },
      {
        name: 'Garderobe team 12',
        items: '6x doble skap, 2x benk, 1x tørkeskap',
        delivery: '1 uke',
      },
    ],
    approvals: [
      {
        title: 'Påfyll lager uke 10',
        requester: 'Lars (Bestiller)',
        status: 'venter',
        amount: '42 300,-',
        costCenter: 'Lager 02',
        roleNeeded: 'Godkjenner',
      },
      {
        title: 'Kontor nyansettelser',
        requester: 'Ida (Bestiller)',
        status: 'godkjent',
        amount: '28 900,-',
        costCenter: 'Prosjekt 1045',
        roleNeeded: 'Fakturamottaker',
      },
    ],
    cases: [
      { title: 'Feil antall på pallereol', type: 'Reklamasjon', status: 'Åpen', updated: 'I dag', order: '#23144' },
      { title: 'Sporing ekspresslevering', type: 'Frakt', status: 'Pågår', updated: 'I går', order: '#23121' },
    ],
    contact: {
      name: 'Ingrid Strand',
      title: 'Kundeservice kontrakt',
      phone: '+47 415 22 890',
      email: 'ingrid@nwsupply.no',
      availability: '08–17, svar innen 1 time',
    },
    projects: [
      {
        name: 'Utvidelse Drammen lager',
        status: 'Leveranse 2 av 3',
        deliveries: [
          { label: 'Reoler og bærebjelker', status: 'Levert', date: '25. feb' },
          { label: 'Skap og garderobe', status: 'På vei', date: '12. mar' },
          { label: 'Kontorarbeidsplasser', status: 'Planlagt', date: '20. mar' },
        ],
      },
      {
        name: 'Nytt kontor Trondheim',
        status: 'Planlegging',
        deliveries: [
          { label: 'Pilotpakke (3 plasser)', status: 'Levert', date: '5. feb' },
          { label: 'Standardpakke 12 plasser', status: 'Venter godkjenning', date: 'TBC' },
        ],
      },
    ],
  },
  fjordlogistikk: {
    name: 'Fjordlogistikk',
    contractId: 'K-77112',
    badges: ['-12% på lagerartikler', 'Prioritert support', 'Fast rute tirsdag'],
    contractDetails: [
      { label: 'Avtaleperiode', value: '01.06.2024 – 01.06.2026' },
      { label: 'Rabattnivå', value: '12% lager / 8% kontor' },
      { label: 'Leveringsbetingelser', value: 'Fast rute tirsdag, ekspress på forespørsel' },
      { label: 'Betaling', value: 'Faktura PDF, 20 dager' },
    ],
    statuses: [
      { title: 'Siste ordre', value: '#1204', subtitle: 'Leveres tirsdag', tone: 'success', pill: 'Fast rute' },
      { title: 'Ordre under behandling', value: '1', subtitle: 'Ventende godkjenning', tone: 'warning', pill: 'Venter' },
      { title: 'Åpne saker', value: '0', subtitle: 'Ingen aktive', tone: 'success', pill: 'Stille' },
      { title: 'Leveringsstatus', value: '92%', subtitle: 'På tid siste 30 dager', tone: 'success', pill: 'SLA' },
    ],
    quickActions: [
      { title: 'Ukeordre', description: 'Send tirsdagsrute for godkjenning', target: 'approvals' },
      { title: 'Standardpakker', description: 'Pakkene vi alltid leverer', target: 'lists' },
      { title: 'Spor ordre', description: 'Hold oversikt på leveranser', target: 'support' },
    ],
    products: [
      { name: 'Plastkasser 60L', sku: 'PK-60', category: 'Lager', price: 189, contractPrice: 165, stock: 'På lager', leadTime: 'Fast rute tirsdag', minOrder: 10 },
      { name: 'Sikkerhetsvest pakke 10', sku: 'SV-10', category: 'HMS', price: 890, contractPrice: 790, stock: 'På lager', leadTime: 'Fast rute tirsdag', minOrder: 1 },
      { name: 'Reol, lettlager', sku: 'RL-120', category: 'Lager', price: 1290, contractPrice: 1120, stock: 'Under innkjøp', leadTime: '1 uke', minOrder: 4 },
    ],
    lists: [
      { name: 'Ukeordre lager', items: 15, description: 'Kasser, etiketter, hansker', lastOrdered: 'For 5 dager siden' },
    ],
    packages: [
      { name: 'Startpakke lager', items: 'Kasser, lettreol, jekketraller', delivery: 'Fast rute tirsdag' },
    ],
    approvals: [
      { title: 'Ukeordre 10', requester: 'Camilla (Bestiller)', status: 'venter', amount: '7 500,-', costCenter: 'Lager 01', roleNeeded: 'Godkjenner' },
    ],
    cases: [],
    contact: {
      name: 'Erik Lunde',
      title: 'Kundeservice rammeavtale',
      phone: '+47 998 44 200',
      email: 'erik@nwsupply.no',
      availability: '08–16, svar innen 2 timer',
    },
    projects: [
      {
        name: 'Terminal Bergen',
        status: 'Leveranse 1 av 2',
        deliveries: [
          { label: 'Lettlager-reoler', status: 'Levert', date: '18. feb' },
          { label: 'Kontorplasser', status: 'Planlagt', date: 'April' },
        ],
      },
    ],
  },
};

const state = {
  customerKey: 'nordbygg',
  role: 'Bestiller',
  cart: [],
};

const roles = ['Bestiller', 'Godkjenner', 'Fakturamottaker'];

const navButtons = document.querySelectorAll('.nav-item');
const views = document.querySelectorAll('.view');

const elements = {
  companyName: document.getElementById('companyName'),
  contractId: document.getElementById('contractId'),
  contractDetails: document.getElementById('contractDetails'),
  contractBadges: document.getElementById('contractBadges'),
  quickActions: document.getElementById('quickActions'),
  statusGrid: document.getElementById('statusGrid'),
  productTable: document.getElementById('productTable'),
  availabilityFilter: document.getElementById('availabilityFilter'),
  listContainer: document.getElementById('listContainer'),
  packageContainer: document.getElementById('packageContainer'),
  approvalList: document.getElementById('approvalList'),
  approvalRole: document.getElementById('approvalRole'),
  approvalNotes: document.getElementById('approvalNotes'),
  costCenter: document.getElementById('costCenter'),
  sendForApproval: document.getElementById('sendForApproval'),
  caseList: document.getElementById('caseList'),
  newCase: document.getElementById('newCase'),
  contactPerson: document.getElementById('contactPerson'),
  projectList: document.getElementById('projectList'),
  cartItems: document.getElementById('cartItems'),
  cartSummary: document.getElementById('cartSummary'),
  cartTitle: document.getElementById('cartTitle'),
  checkout: document.getElementById('checkout'),
  customerSelect: document.getElementById('customerSelect'),
  roleOptions: document.getElementById('roleOptions'),
  toast: document.getElementById('toast'),
};

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add('show');
  setTimeout(() => elements.toast.classList.remove('show'), 2500);
}

function setActiveSection(targetId) {
  views.forEach((view) => view.classList.toggle('active', view.id === targetId));
  navButtons.forEach((btn) => btn.classList.toggle('active', btn.dataset.target === targetId));
}

function renderContractSection(customer) {
  elements.companyName.textContent = customer.name;
  elements.contractId.textContent = `Avtale-ID: ${customer.contractId}`;

  elements.contractDetails.innerHTML = customer.contractDetails
    .map((item) => `<dt>${item.label}</dt><dd>${item.value}</dd>`)
    .join('');

  elements.contractBadges.innerHTML = customer.badges
    .map((badge) => `<span class="pill">${badge}</span>`)
    .join('');
}

function renderStatus(customer) {
  elements.statusGrid.innerHTML = customer.statuses
    .map(
      (status) => `
        <article class="status-card">
          <div class="label-row">
            <h4>${status.title}</h4>
            <span class="pill">${status.pill}</span>
          </div>
          <div class="value">${status.value}</div>
          <p class="hint">${status.subtitle}</p>
        </article>
      `
    )
    .join('');
}

function renderQuickActions(customer) {
  elements.quickActions.innerHTML = customer.quickActions
    .map(
      (action) => `
        <button class="quick-btn" data-target="${action.target}">
          <strong>${action.title}</strong>
          <span class="hint">${action.description}</span>
        </button>
      `
    )
    .join('');

  elements.quickActions.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', () => setActiveSection(btn.dataset.target));
  });
}

function renderProducts(customer) {
  const filter = elements.availabilityFilter.value;
  const filtered = customer.products.filter((product) => {
    if (filter === 'inStock') return product.stock === 'På lager';
    if (filter === 'onOrder') return product.stock !== 'På lager';
    return true;
  });

  elements.productTable.innerHTML = filtered
    .map((product) => {
      const dotClass =
        product.stock === 'På lager' ? 'dot' : product.stock === 'Lav beholdning' ? 'dot warning' : 'dot danger';
      return `
        <div class="table-row" data-sku="${product.sku}">
          <div class="product-meta">
            <strong>${product.name}</strong>
            <p class="small">${product.category} · Minstekjøp ${product.minOrder} stk</p>
          </div>
          <div class="price-row">
            <span class="old-price">${product.price.toLocaleString('no-NO')} ,-</span>
            <span class="new-price">${product.contractPrice.toLocaleString('no-NO')} ,-</span>
          </div>
          <div class="stock">
            <span class="${dotClass}"></span>
            <div>
              <strong>${product.stock}</strong>
              <p class="small">Levering: ${product.leadTime}</p>
            </div>
          </div>
          <div class="qty">
            <input type="number" min="${product.minOrder}" value="${product.minOrder}" aria-label="Antall" />
            <button class="ghost add-to-cart">Legg i kurv</button>
          </div>
          <div class="muted small">Avtalepris inkl. rabatt</div>
        </div>
      `;
    })
    .join('');

  elements.productTable.querySelectorAll('.add-to-cart').forEach((button) => {
    button.addEventListener('click', (e) => {
      const row = e.target.closest('.table-row');
      const sku = row.dataset.sku;
      const qty = Number(row.querySelector('input').value);
      const product = customer.products.find((p) => p.sku === sku);
      addToCart(product, qty);
    });
  });
}

function renderLists(customer) {
  elements.listContainer.innerHTML = customer.lists
    .map(
      (list) => `
        <article class="list-card">
          <header>
            <div>
              <strong>${list.name}</strong>
              <p class="small">${list.description}</p>
            </div>
            <span class="pill">${list.items} linjer</span>
          </header>
          <p class="hint">Sist bestilt: ${list.lastOrdered}</p>
          <div class="actions">
            <button class="primary" data-action="cart">Legg til i kurv</button>
            <button class="ghost" data-action="approve">Send til godkjenning</button>
          </div>
        </article>
      `
    )
    .join('');

  elements.listContainer.querySelectorAll('.actions button').forEach((button) => {
    button.addEventListener('click', () => {
      if (button.dataset.action === 'cart') {
        showToast('Liste lagt i kurv med avtalepriser');
      } else {
        pushApproval('Liste sendt til godkjenning', 'Lager 02');
      }
    });
  });
}

function renderPackages(customer) {
  elements.packageContainer.innerHTML = customer.packages
    .map(
      (pack) => `
        <article class="package-card">
          <header>
            <div>
              <strong>${pack.name}</strong>
              <p class="small">${pack.items}</p>
            </div>
            <span class="pill">${pack.delivery}</span>
          </header>
          <div class="actions">
            <button class="primary" data-action="cart">Legg til i kurv</button>
            <button class="ghost" data-action="approve">Send til godkjenning</button>
          </div>
        </article>
      `
    )
    .join('');

  elements.packageContainer.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => {
      if (button.dataset.action === 'cart') {
        showToast('Pakke lagt i kurv');
      } else {
        pushApproval('Standardpakke til godkjenning', 'Prosjekt 1045');
      }
    });
  });
}

function statusTag(status) {
  const normalized = status.toLowerCase();
  const tone =
    normalized === 'godkjent'
      ? 'success'
      : normalized === 'venter' || normalized === 'pågår' || normalized === 'åpen'
        ? 'warning'
        : 'danger';
  return `<span class="status-tag ${tone}">${status}</span>`;
}

function renderApprovals(customer) {
  elements.approvalList.innerHTML = customer.approvals
    .map(
      (approval, index) => `
        <article class="approval-card" data-index="${index}">
          <header>
            <div>
              <strong>${approval.title}</strong>
              <p class="small">${approval.requester} · ${approval.costCenter}</p>
            </div>
            ${statusTag(approval.status)}
          </header>
          <p class="hint">Beløp: ${approval.amount}</p>
          <div class="actions">
            ${state.role === approval.roleNeeded && approval.status === 'venter' ? '<button class="primary" data-action="approve">Godkjenn</button><button class="ghost" data-action="reject">Avvis</button>' : '<button class="ghost" data-action="view">Se detaljer</button>'}
          </div>
        </article>
      `
    )
    .join('');

  elements.approvalList.querySelectorAll('.approval-card').forEach((card) => {
    const index = Number(card.dataset.index);
    const approval = customer.approvals[index];
    card.querySelectorAll('button').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (btn.dataset.action === 'approve') {
          approval.status = 'godkjent';
          showToast('Ordre godkjent av godkjenner');
        } else if (btn.dataset.action === 'reject') {
          approval.status = 'avvist';
          showToast('Ordre avvist – bestiller varslet');
        }
        renderApprovals(customer);
      });
    });
  });
}

function renderSupport(customer) {
  elements.caseList.innerHTML = customer.cases.length
    ? customer.cases
        .map(
          (ticket, index) => `
            <article class="case-card" data-index="${index}">
              <header>
                <div>
                  <strong>${ticket.title}</strong>
                  <p class="small">${ticket.type} · Ordre ${ticket.order || 'N/A'}</p>
                </div>
                ${statusTag(ticket.status.toLowerCase())}
              </header>
              <p class="hint">Oppdatert: ${ticket.updated}</p>
              <div class="actions">
                <button class="ghost">Legg til notat</button>
                <button class="ghost">Last opp bilde</button>
              </div>
            </article>
          `
        )
        .join('')
    : '<p>Ingen åpne saker.</p>';

  const contact = customer.contact;
  elements.contactPerson.innerHTML = `
    <strong>${contact.name}</strong>
    <p>${contact.title}</p>
    <p class="small">${contact.phone} · ${contact.email}</p>
    <p class="hint">${contact.availability}</p>
  `;
}

function renderProjects(customer) {
  elements.projectList.innerHTML = customer.projects
    .map(
      (project) => `
        <article class="project-card">
          <header>
            <div>
              <strong>${project.name}</strong>
              <p class="small">${project.status}</p>
            </div>
            <div class="actions">
              <button class="ghost" data-action="copy">Kopier</button>
              <button class="ghost" data-action="reorder">Bestill på nytt</button>
            </div>
          </header>
          <div class="stack small">
            ${project.deliveries
              .map(
                (delivery) => `
                  <div class="label-row">
                    <span>${delivery.label}</span>
                    <span class="pill">${delivery.status} · ${delivery.date}</span>
                  </div>
                `
              )
              .join('')}
          </div>
        </article>
      `
    )
    .join('');

  elements.projectList.querySelectorAll('.actions button').forEach((btn) => {
    btn.addEventListener('click', () => {
      showToast(`${btn.dataset.action === 'copy' ? 'Prosjektordre kopiert' : 'Bestilling lagt i kurv'}`);
    });
  });
}

function renderCart() {
  const customer = customers[state.customerKey];
  const total = state.cart.reduce((sum, item) => sum + item.contractPrice * item.qty, 0);
  elements.cartTitle.textContent = state.cart.length ? `${state.cart.length} linjer` : 'Tom';
  elements.cartItems.innerHTML = state.cart
    .map(
      (item, index) => `
        <div class="label-row" data-index="${index}">
          <div>
            <strong>${item.name}</strong>
            <p class="small">${item.qty} stk · ${item.contractPrice.toLocaleString('no-NO')} ,-</p>
          </div>
          <button class="mini-btn" data-action="remove">Fjern</button>
        </div>
      `
    )
    .join('');
  elements.cartSummary.textContent = state.cart.length
    ? `Sum avtalepris: ${total.toLocaleString('no-NO')} ,-`
    : 'Ingen linjer lagt til ennå.';

  elements.cartItems.querySelectorAll('.mini-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const index = Number(e.target.closest('[data-index]').dataset.index);
      state.cart.splice(index, 1);
      renderCart();
    });
  });

  elements.checkout.disabled = !state.cart.length;
  elements.checkout.textContent = state.role === 'Bestiller' ? 'Send til godkjenning' : 'Send ordre';

  elements.checkout.onclick = () => {
    if (!state.cart.length) return;
    if (state.role === 'Bestiller') {
      pushApproval('Handlekurv til godkjenning', 'Prosjekt 1045');
      showToast('Sendt til godkjenner');
    } else {
      showToast('Ordre sendt til behandling');
    }
    state.cart = [];
    renderCart();
    renderApprovals(customer);
  };
}

function addToCart(product, qty) {
  const existing = state.cart.find((item) => item.sku === product.sku);
  if (existing) {
    existing.qty += qty;
  } else {
    state.cart.push({ ...product, qty });
  }
  renderCart();
  showToast(`${product.name} (${qty} stk) lagt til med avtalepris`);
}

function pushApproval(title, costCenter) {
  const customer = customers[state.customerKey];
  customer.approvals.unshift({
    title,
    requester: `${customers[state.customerKey].name} (${state.role})`,
    status: 'venter',
    amount: 'Avtalepris',
    costCenter,
    roleNeeded: 'Godkjenner',
  });
  renderApprovals(customer);
}

function renderRoleControls() {
  elements.roleOptions.innerHTML = roles
    .map((role) => `<button class="role-pill ${state.role === role ? 'active' : ''}" data-role="${role}">${role}</button>`)
    .join('');

  elements.roleOptions.querySelectorAll('button').forEach((btn) =>
    btn.addEventListener('click', () => {
      state.role = btn.dataset.role;
      renderRoleControls();
      renderCart();
      renderApprovals(customers[state.customerKey]);
    })
  );

  elements.approvalRole.innerHTML = roles.map((role) => `<option value="${role}">${role}</option>`).join('');
  elements.approvalRole.value = state.role;
  elements.approvalRole.onchange = (e) => {
    state.role = e.target.value;
    renderRoleControls();
    renderCart();
    renderApprovals(customers[state.customerKey]);
  };
}

function renderAll() {
  const customer = customers[state.customerKey];
  renderContractSection(customer);
  renderStatus(customer);
  renderQuickActions(customer);
  renderProducts(customer);
  renderLists(customer);
  renderPackages(customer);
  renderApprovals(customer);
  renderSupport(customer);
  renderProjects(customer);
  renderCart();
  renderRoleControls();
}

// Event bindings
navButtons.forEach((btn) => {
  btn.addEventListener('click', () => setActiveSection(btn.dataset.target));
});

elements.availabilityFilter.addEventListener('change', () => renderProducts(customers[state.customerKey]));

elements.sendForApproval.addEventListener('click', () => {
  const title = elements.approvalNotes.value || 'Bestilling fra bestiller';
  const costCenter = elements.costCenter.value || 'N/A';
  pushApproval(title, costCenter);
  elements.approvalNotes.value = '';
  showToast('Sendt til godkjenning');
});

elements.newCase.addEventListener('click', () => {
  const customer = customers[state.customerKey];
  customer.cases.unshift({
    title: 'Ny sak opprettet',
    type: 'Kundehenvendelse',
    status: 'Åpen',
    updated: 'Nå nettopp',
    order: '#NY',
  });
  renderSupport(customer);
  showToast('Sak opprettet og prioritert');
});

elements.customerSelect.addEventListener('change', (e) => {
  state.customerKey = e.target.value;
  state.cart = [];
  renderAll();
  setActiveSection('dashboard');
  showToast(`Viser portal for ${customers[state.customerKey].name}`);
});

renderAll();
