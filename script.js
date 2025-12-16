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
    insights: [
      { label: 'Leveringsgrad', value: '87% på tid', description: 'Siste 30 dager med avtalelevering', chip: 'SLA' },
      { label: 'Neste milepæl', value: '12. mar', description: 'Skap og garderobe på vei' },
      { label: 'Repeterende kjøp', value: 'Lagerpåfyll uke 10', description: 'Hold kostnader på avtalepris' },
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
    architectTools: {
      briefs: [
        {
          client: 'Atelier Oslo (sluttkunde: Lysaker Brygge)',
          need: 'Serieoppsett for stillesoner og møterom',
          deliverable: 'Sortiment + avtaleprisark',
          due: 'Frist: 8. mars',
          note: 'Skal deles videre til sluttkunde som lenke',
        },
        {
          client: 'Nordbygg HQ – avdeling vest',
          need: 'Arbeidsplasser (12) + garderobe',
          deliverable: 'Ferdig tilbud med leveranseplan',
          due: 'Frist: uke 11',
          note: 'Tilpasses logistikk i tre del-leveranser',
        },
      ],
      collections: [
        {
          name: 'Seriepakke: Nordic Focus (10 plasser)',
          summary: 'Modulært kontoroppsett med akustikk og ergo',
          tags: ['Stillesoner', 'Akustikk', 'Ergo'],
          bundle: [
            { sku: 'NB-Desk-160', name: 'Nordic skrivebord 160cm', qty: 10 },
            { sku: 'EP-Chair', name: 'Ergo Pro kontorstol', qty: 10 },
            { sku: 'SilentWall', name: 'Støydempende skjerm vegg', qty: 10 },
          ],
          costCenter: 'Prosjekt 1045',
        },
        {
          name: 'Robust lager + garderobe',
          summary: 'Reoler med garderobe for tunge soner',
          tags: ['Lager', 'Garderobe', 'Montasje'],
          bundle: [
            { sku: 'HD-Rack', name: 'Heavy Duty pallereol, seksjon', qty: 12 },
            { sku: 'IG-Double', name: 'Industrigarderobe – dobbelt', qty: 8 },
          ],
          costCenter: 'Prosjekt 2078',
        },
      ],
      catalogs: [
        {
          name: 'Katalog: Nordbygg vestfløy',
          format: 'Lenke + PDF',
          status: 'Oppdatert i dag',
          note: 'Seriepakker med avtalepris og leveransevindu',
        },
        {
          name: 'Tilbudsutkast: Campus Nydalen',
          format: 'Deles med prosjektleder',
          status: 'Klar for godkjenning',
          note: 'Kan sendes til kunde med kostnadssted inkludert',
        },
      ],
      actions: [
        { title: 'Bygg katalog fra avtalevarene', description: 'Velg serier og del med sluttkunde', target: 'products' },
        { title: 'Legg seriepakke i kurv', description: 'Start tilbud og send til godkjenning', target: 'projects' },
      ],
    },
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
    projectSales: [
      {
        name: 'Campus Nydalen – kontorbygg',
        stage: 'Prosjektordre klar',
        value: '1,25 MNOK avtalepris',
        readiness: 0.78,
        nextStep: 'Bekreft leveransevindu uke 15',
        deliveryPlan: '3 del-leveranser med montasje',
        owner: 'Ida (Prosjektsalg)',
        costCenter: 'Prosjekt 1045',
        scopes: ['Arbeidsplasser (18)', 'Møterom og akustikk', 'Montasje og logistikk'],
        bundle: [
          { sku: 'NB-Desk-160', name: 'Nordic skrivebord 160cm', qty: 18 },
          { sku: 'EP-Chair', name: 'Ergo Pro kontorstol', qty: 18 },
          { sku: 'SilentWall', name: 'Støydempende skjerm vegg', qty: 10 },
          { sku: 'IG-Double', name: 'Industrigarderobe – dobbelt', qty: 6 },
          { sku: 'SERV-MONT', name: 'Montasje og logistikk', qty: 1, contractPrice: 8500, price: 8500 },
        ],
      },
      {
        name: 'Drammen lager fase 2',
        stage: 'Tilbudsgrunnlag klart',
        value: '640 000,- estimert',
        readiness: 0.62,
        nextStep: 'Godkjenn leveranseplan 2/3',
        deliveryPlan: '2 leveranser med montasje og frakt',
        owner: 'Lars (Prosjekt)',
        costCenter: 'Prosjekt 2078',
        scopes: ['Tunglager-reoler', 'Montasje inkl. stillas', 'Frakt ekspress'],
        bundle: [
          { sku: 'HD-Rack', name: 'Heavy Duty pallereol, seksjon', qty: 22 },
          { sku: 'SERV-MONT', name: 'Montasje og logistikk', qty: 1, contractPrice: 12500, price: 12500 },
        ],
      },
    ],
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
    insights: [
      { label: 'Fast rute', value: 'Tirsdag', description: 'Pålitelig levering hver uke', chip: 'Logistikk' },
      { label: 'Godkjenningsstatus', value: '1 venter', description: 'Camilla venter godkjenning' },
      { label: 'Leveringsgrad', value: '92% på tid', description: 'Siste 30 dager med SLA' },
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
    architectTools: {
      briefs: [
        {
          client: 'Fjordlogistikk – terminal Sør',
          need: 'Seriepakke for 6 møterom',
          deliverable: 'Lenke til katalog + prisark',
          due: 'Frist: 14. mars',
          note: 'Bruk fast rute tirsdag for leveranse',
        },
        {
          client: 'Partner: Nordhavn Eiendom',
          need: 'Lettlager + kontor for pilot',
          deliverable: 'Sortiment og kostnadssted for pilotordre',
          due: 'Frist: uke 12',
          note: 'Skal være klar til å kopiere for nye lokasjoner',
        },
      ],
      collections: [
        {
          name: 'Serie: Fast rute tirsdag',
          summary: 'Standard sortiment for ukeordre',
          tags: ['Rute', 'Volum', 'Repeterende'],
          bundle: [
            { sku: 'PK-60', name: 'Plastkasser 60L', qty: 30 },
            { sku: 'SV-10', name: 'Sikkerhetsvest pakke 10', qty: 5 },
            { sku: 'RL-120', name: 'Reol, lettlager', qty: 8 },
          ],
          costCenter: 'Lager 01',
        },
        {
          name: 'Pilotoppsett kontor + lettlager',
          summary: 'Mikro-kontor kombinert med lettlager',
          tags: ['Pilot', 'Kontor', 'Lager'],
          bundle: [
            { sku: 'SV-10', name: 'Sikkerhetsvest pakke 10', qty: 2 },
            { sku: 'RL-120', name: 'Reol, lettlager', qty: 6 },
            { sku: 'PK-60', name: 'Plastkasser 60L', qty: 24 },
          ],
          costCenter: 'Prosjekt 3320',
        },
      ],
      catalogs: [
        {
          name: 'Katalog: Terminal Bergen',
          format: 'Delbar lenke',
          status: 'Oppdatert',
          note: 'Lister + pakker tilpasset tirsdagsruten',
        },
        {
          name: 'Tilbud: Fast rute volum',
          format: 'PDF + lenke',
          status: 'Pågår',
          note: 'Oppdatere med nye minstekjøp før sending',
        },
      ],
      actions: [
        { title: 'Lag tilbud for partner', description: 'Bygg katalog med seriepakker', target: 'projects' },
        { title: 'Kopier sortiment for ny lokasjon', description: 'Gjenbruk ukeordre som basis', target: 'lists' },
      ],
    },
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
    projectSales: [
      {
        name: 'Terminal Bergen – prosjektordre',
        stage: 'Tilbud sendt',
        value: '420 000,- estimert',
        readiness: 0.55,
        nextStep: 'Avklar kostnadssted og levering',
        deliveryPlan: 'Leveranse i to puljer via tirsdagsruten',
        owner: 'Erik (Prosjektsalg)',
        costCenter: 'Prosjekt 3320',
        scopes: ['Reoler lettlager', 'Kontor 8 plasser', 'Leveranse via fast rute'],
        bundle: [
          { sku: 'PK-60', name: 'Plastkasser 60L', qty: 60 },
          { sku: 'SV-10', name: 'Sikkerhetsvest pakke 10', qty: 3 },
          { sku: 'RL-120', name: 'Reol, lettlager', qty: 12 },
          { sku: 'SERV-ROUTE', name: 'Prosjektleveranse tirsdag', qty: 1, contractPrice: 5200, price: 5200 },
        ],
      },
    ],
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

const orderTracking = {
  orderNumber: 'NO220928-00005',
  customerReference: '11932',
  orderName: 'Set order name',
  shippingDate: '12.10.2022',
  buyer: 'Ingebrigt Breistøl',
  address: ['Kirkevold Kontorutstyr AS', 'Akersgt. 7', '0158 OSLO', 'Norway'],
  summary: [
    { label: 'Pris før MVA', value: '6 491,10 NOK' },
    { label: 'MVA (25%)', value: '1 622,78 NOK' },
    { label: 'Pris inkl. MVA', value: '8 113,88 NOK' },
    { label: 'Frakt', value: 'Etter avtale' },
    { label: 'Total', value: '8 113,88 NOK', emphasize: true },
  ],
  steps: [
    { label: 'Placed', date: '28.09.2022', state: 'done' },
    { label: 'Confirmed', date: '28.09.2022', state: 'done' },
    { label: 'In production', date: '12.10.2022', state: 'done' },
    { label: 'Shipped', date: '12.10.2022', state: 'done' },
    { label: 'Invoiced', date: '12.10.2022', state: 'done' },
    { label: 'Shipping date', date: '12.10.2022', state: 'upcoming', note: 'Track order' },
  ],
};

const roles = ['Bestiller', 'Godkjenner', 'Fakturamottaker', 'Arkitekt'];

const navButtons = document.querySelectorAll('.nav-item');
const views = document.querySelectorAll('.view');

const elements = {
  companyName: document.getElementById('companyName'),
  contractId: document.getElementById('contractId'),
  contractDetails: document.getElementById('contractDetails'),
  contractBadges: document.getElementById('contractBadges'),
  quickActions: document.getElementById('quickActions'),
  statusGrid: document.getElementById('statusGrid'),
  insightGrid: document.getElementById('insightGrid'),
  architectPanel: document.getElementById('architectPanel'),
  architectBriefs: document.getElementById('architectBriefs'),
  architectCollections: document.getElementById('architectCollections'),
  architectCatalogs: document.getElementById('architectCatalogs'),
  productTable: document.getElementById('productTable'),
  productSearch: document.getElementById('productSearch'),
  productCount: document.getElementById('productCount'),
  sortSelect: document.getElementById('sortSelect'),
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
  projectSales: document.getElementById('projectSales'),
  projectList: document.getElementById('projectList'),
  cartItems: document.getElementById('cartItems'),
  cartSummary: document.getElementById('cartSummary'),
  cartTitle: document.getElementById('cartTitle'),
  checkout: document.getElementById('checkout'),
  customerSelect: document.getElementById('customerSelect'),
  roleOptions: document.getElementById('roleOptions'),
  toast: document.getElementById('toast'),
  orderTracking: document.getElementById('orderTracking'),
  trackingModal: document.getElementById('trackingModal'),
  trackingDialog: document.getElementById('trackingDialog'),
  trackingTimeline: document.getElementById('trackingTimeline'),
  trackingAddress: document.getElementById('trackingAddress'),
  trackingBuyer: document.getElementById('trackingBuyer'),
  trackingSummary: document.getElementById('trackingSummary'),
  trackingMeta: document.getElementById('trackingMeta'),
  trackingTitle: document.getElementById('trackingTitle'),
  trackingShipping: document.getElementById('trackingShipping'),
  trackingClose: document.getElementById('trackingClose'),
  trackingAddToCart: document.getElementById('trackingAddToCart'),
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

function renderInsights(customer) {
  elements.insightGrid.innerHTML = customer.insights
    .map(
      (insight) => `
        <article class="insight-card">
          <div class="label-row">
            <span class="eyebrow">${insight.label}</span>
            ${insight.chip ? `<span class="insight-chip">${insight.chip}</span>` : ''}
          </div>
          <strong>${insight.value}</strong>
          <p class="hint">${insight.description}</p>
        </article>
      `
    )
    .join('');
}

function renderStatus(customer) {
  elements.statusGrid.innerHTML = customer.statuses
    .map(
      (status) => `
        <article class="status-card tone-${status.tone}">
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
  const roleActions = state.role === 'Arkitekt' ? customer.architectTools?.actions || [] : [];
  const actions = [...customer.quickActions, ...roleActions];

  elements.quickActions.innerHTML = actions
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

function renderArchitectTools(customer) {
  if (!elements.architectPanel) return;
  const tools = customer.architectTools;

  if (!tools || state.role !== 'Arkitekt') {
    elements.architectPanel.classList.add('hidden');
    return;
  }

  elements.architectPanel.classList.remove('hidden');

  const briefs = tools.briefs || [];
  const collections = tools.collections || [];
  const catalogs = tools.catalogs || [];

  elements.architectBriefs.innerHTML = briefs.length
    ? briefs
        .map(
          (brief, index) => `
            <article class="architect-card" data-index="${index}">
              <div class="label-row">
                <strong>${brief.client}</strong>
                <span class="pill soft">${brief.due}</span>
              </div>
              <p class="hint">${brief.need}</p>
              <div class="architect-meta">
                <span>${brief.deliverable}</span>
                <span>${brief.note}</span>
              </div>
              <div class="actions">
                <button class="primary" data-action="catalog">Bygg forslag</button>
                <button class="ghost" data-action="approve">Send til godkjenning</button>
              </div>
            </article>
          `
        )
        .join('')
    : '<p class="hint">Ingen arkitekt-forespørsler akkurat nå.</p>';

  elements.architectBriefs.querySelectorAll('.actions button').forEach((btn) => {
    const brief = briefs[Number(btn.closest('[data-index]')?.dataset.index)];
    btn.addEventListener('click', () => {
      if (!brief) return;
      if (btn.dataset.action === 'catalog') {
        setActiveSection('products');
        showToast('Starter forslag med avtalesortiment');
      } else {
        pushApproval(`${brief.deliverable} (${brief.client})`, brief.client);
        showToast('Forslaget er sendt til godkjenning');
      }
    });
  });

  elements.architectCollections.innerHTML = collections.length
    ? collections
        .map(
          (collection, index) => `
            <article class="architect-card" data-index="${index}">
              <div class="label-row">
                <strong>${collection.name}</strong>
                <span class="pill">${collection.costCenter || 'Kostnadssted TBD'}</span>
              </div>
              <p class="hint">${collection.summary}</p>
              <div class="tag-row">
                ${(collection.tags || []).map((tag) => `<span class="pill soft">${tag}</span>`).join('')}
              </div>
              <div class="actions">
                <button class="primary" data-action="cart">Legg i kurv</button>
                <button class="ghost" data-action="approval">Send tilbud</button>
              </div>
            </article>
          `
        )
        .join('')
    : '<p class="hint">Ingen seriepakker valgt ennå.</p>';

  elements.architectCollections.querySelectorAll('.actions button').forEach((btn) => {
    const collection = collections[Number(btn.closest('[data-index]')?.dataset.index)];
    btn.addEventListener('click', () => {
      if (!collection) return;
      if (btn.dataset.action === 'cart') {
        addCollectionToCart(collection);
      } else {
        pushApproval(collection.name, collection.costCenter || 'Kostnadssted mangler');
        showToast('Tilbudsutkastet er sendt til godkjenning');
      }
    });
  });

  elements.architectCatalogs.innerHTML = catalogs.length
    ? catalogs
        .map(
          (catalog) => `
            <article class="architect-card">
              <div class="label-row">
                <strong>${catalog.name}</strong>
                <span class="pill soft">${catalog.status}</span>
              </div>
              <p class="hint">${catalog.format}</p>
              <p class="small">${catalog.note}</p>
              <div class="actions">
                <button class="primary" data-action="share">Del med kunde</button>
                <button class="ghost" data-action="approval">Send til godkjenning</button>
              </div>
            </article>
          `
        )
        .join('')
    : '<p class="hint">Ingen delbare kataloger er klare ennå.</p>';

  elements.architectCatalogs.querySelectorAll('.actions button').forEach((btn) => {
    const catalogName = btn.closest('.architect-card')?.querySelector('strong')?.textContent || 'Katalog';
    btn.addEventListener('click', () => {
      if (btn.dataset.action === 'share') {
        showToast('Delbar lenke kopiert (demo)');
      } else {
        pushApproval(`Godkjenn katalog: ${catalogName}`, 'Prosjekt / avtale');
        showToast('Katalog sendt til godkjenning');
      }
    });
  });
}

function renderProducts(customer) {
  const filter = elements.availabilityFilter.value;
  const searchTerm = elements.productSearch.value.trim().toLowerCase();
  const sort = elements.sortSelect.value;

  const matchesFilters = (product) => {
    const availabilityMatch =
      filter === 'all' || (filter === 'inStock' && product.stock === 'På lager') || (filter === 'onOrder' && product.stock !== 'På lager');
    const textMatch =
      !searchTerm ||
      product.name.toLowerCase().includes(searchTerm) ||
      product.sku.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm);
    return availabilityMatch && textMatch;
  };

  const stockRank = (stock) => {
    if (stock === 'På lager') return 0;
    if (stock === 'Lav beholdning') return 1;
    return 2;
  };

  const filtered = customer.products
    .filter(matchesFilters)
    .sort((a, b) => {
      if (sort === 'priceAsc') return a.contractPrice - b.contractPrice;
      if (sort === 'priceDesc') return b.contractPrice - a.contractPrice;
      if (sort === 'stock') return stockRank(a.stock) - stockRank(b.stock);
      return 0;
    });

  elements.productCount.textContent = `${filtered.length} av ${customer.products.length} avtalevarer vises`;

  elements.productTable.innerHTML = filtered.length
    ? filtered
        .map((product) => {
          const dotClass =
            product.stock === 'På lager' ? 'dot' : product.stock === 'Lav beholdning' ? 'dot warning' : 'dot danger';
          return `
            <div class="table-row" data-sku="${product.sku}">
              <div class="product-meta">
                <strong>${product.name}</strong>
                <p class="small">${product.category} · SKU ${product.sku} · Minstekjøp ${product.minOrder} stk</p>
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
              <div class="muted small">Avtalepris låst til din avtale</div>
            </div>
          `;
        })
        .join('')
    : '<div class="empty-state">Ingen avtalevarer matcher filtrene. Nullstill søket eller velg en annen tilgjengelighet.</div>';

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

function renderProjectSales(customer) {
  elements.projectSales.innerHTML = customer.projectSales
    .map((sale, index) => {
      const progress = Math.round(sale.readiness * 100);
      return `
        <article class="project-card project-sale" data-index="${index}">
          <header>
            <div>
              <strong>${sale.name}</strong>
              <p class="small">${sale.stage} · ${sale.owner}</p>
            </div>
            <div class="actions">
              <button class="ghost" data-action="approve">Send prosjektordre</button>
              <button class="ghost" data-action="cart">Legg i kurv</button>
            </div>
          </header>
          <div class="project-sale-meta">
            <div>
              <p class="eyebrow">Verdi</p>
              <strong>${sale.value}</strong>
              <p class="hint">Kostnadssted: ${sale.costCenter}</p>
            </div>
            <div>
              <p class="eyebrow">Fremdrift</p>
              <div class="progress-track" role="presentation">
                <div class="progress-value" style="width: ${progress}%;"></div>
              </div>
              <p class="small">${progress}% klart · Neste: ${sale.nextStep}</p>
            </div>
            <div>
              <p class="eyebrow">Leveranseplan</p>
              <p class="hint">${sale.deliveryPlan}</p>
            </div>
          </div>
          <div class="project-sale-scope">
            ${sale.scopes.map((scope) => `<span class="pill soft">${scope}</span>`).join('')}
          </div>
          <div class="project-sale-lines">
            ${sale.bundle
              .map(
                (line) => `
                  <div class="label-row small">
                    <span>${line.qty} × ${line.name}</span>
                    <span class="pill">${line.sku}</span>
                  </div>
                `
              )
              .join('')}
          </div>
        </article>
      `;
    })
    .join('');

  elements.projectSales.querySelectorAll('.project-card').forEach((card) => {
    const sale = customer.projectSales[Number(card.dataset.index)];
    card.querySelectorAll('button').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (btn.dataset.action === 'approve') {
          pushApproval(sale.name, sale.costCenter);
          showToast('Prosjektordre sendt til godkjenning');
        } else if (btn.dataset.action === 'cart') {
          addProjectToCart(sale);
        }
      });
    });
  });
}

function renderProjectDeliveries(customer) {
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

function addToCart(product, qty, options = {}) {
  const { silent = false } = options;
  const existing = state.cart.find((item) => item.sku === product.sku);
  if (existing) {
    existing.qty += qty;
  } else {
    state.cart.push({
      ...product,
      contractPrice: product.contractPrice ?? product.price ?? 0,
      price: product.price ?? product.contractPrice ?? 0,
      qty,
    });
  }
  renderCart();
  if (!silent) {
    showToast(`${product.name} (${qty} stk) lagt til med avtalepris`);
  }
}

function addProjectToCart(sale) {
  const customer = customers[state.customerKey];
  sale.bundle.forEach((line) => {
    const product =
      customer.products.find((p) => p.sku === line.sku) || {
        name: line.name,
        sku: line.sku,
        contractPrice: line.contractPrice ?? line.price ?? 0,
        price: line.price ?? line.contractPrice ?? 0,
        stock: 'Prosjektsalg',
        leadTime: sale.deliveryPlan,
        minOrder: 1,
      };
    addToCart(product, line.qty, { silent: true });
  });
  renderCart();
  showToast(`Prosjektet "${sale.name}" er lagt i kurv med avtalepris`);
}

function addCollectionToCart(collection) {
  const customer = customers[state.customerKey];
  collection.bundle.forEach((line) => {
    const product =
      customer.products.find((p) => p.sku === line.sku) || {
        name: line.name,
        sku: line.sku,
        contractPrice: line.contractPrice ?? line.price ?? 0,
        price: line.price ?? line.contractPrice ?? 0,
        stock: 'Arkitektforslag',
        leadTime: 'Avtales etter prosjekt',
        minOrder: 1,
      };
    addToCart(product, line.qty, { silent: true });
  });
  renderCart();
  showToast(`"${collection.name}" lagt i kurv for tilbud`);
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
      const customer = customers[state.customerKey];
      state.role = btn.dataset.role;
      renderRoleControls();
      renderCart();
      renderApprovals(customer);
      renderQuickActions(customer);
      renderArchitectTools(customer);
    })
  );

  elements.approvalRole.innerHTML = roles.map((role) => `<option value="${role}">${role}</option>`).join('');
  elements.approvalRole.value = state.role;
  elements.approvalRole.onchange = (e) => {
    const customer = customers[state.customerKey];
    state.role = e.target.value;
    renderRoleControls();
    renderCart();
    renderApprovals(customer);
    renderQuickActions(customer);
    renderArchitectTools(customer);
  };
}

function renderAll() {
  const customer = customers[state.customerKey];
  elements.productSearch.value = '';
  elements.sortSelect.value = 'relevance';
  elements.availabilityFilter.value = 'all';
  renderContractSection(customer);
  renderInsights(customer);
  renderStatus(customer);
  renderQuickActions(customer);
  renderArchitectTools(customer);
  renderProducts(customer);
  renderLists(customer);
  renderPackages(customer);
  renderApprovals(customer);
  renderSupport(customer);
  renderProjectSales(customer);
  renderProjectDeliveries(customer);
  renderCart();
  renderRoleControls();
}

function renderTrackingModal() {
  elements.trackingTitle.textContent = `Ordre ${orderTracking.orderNumber}`;
  elements.trackingMeta.innerHTML = `Din referanse: <strong>${orderTracking.customerReference}</strong> · Ordrenavn: <span class="muted">${orderTracking.orderName}</span>`;

  elements.trackingTimeline.innerHTML = orderTracking.steps
    .map(
      (step) => `
        <div class="tracking-step ${step.state === 'done' ? 'completed' : 'pending'}">
          <div class="tracking-node"></div>
          <div>
            <strong>${step.label}</strong>
            <p class="small">${step.date}</p>
            ${step.note ? `<p class="hint">${step.note}</p>` : ''}
          </div>
        </div>
      `
    )
    .join('');

  elements.trackingShipping.textContent = `Estimert leveringsdato: ${orderTracking.shippingDate} · Dummyflyt for ordrenivå`;
  elements.trackingAddress.innerHTML = orderTracking.address.join('<br />');
  elements.trackingBuyer.innerHTML = `<strong>${orderTracking.buyer}</strong><p class="small">Kontraktskunde</p>`;
  elements.trackingSummary.innerHTML = orderTracking.summary
    .map(
      (row) => `
        <div class="summary-row${row.emphasize ? ' emphasize' : ''}">
          <span>${row.label}</span>
          <strong>${row.value}</strong>
        </div>
      `
    )
    .join('');
}

function toggleTrackingModal(show) {
  if (show) {
    renderTrackingModal();
  }
  elements.trackingModal.classList.toggle('show', show);
  elements.trackingModal.setAttribute('aria-hidden', (!show).toString());
}

// Event bindings
navButtons.forEach((btn) => {
  btn.addEventListener('click', () => setActiveSection(btn.dataset.target));
});

elements.availabilityFilter.addEventListener('change', () => renderProducts(customers[state.customerKey]));
elements.productSearch.addEventListener('input', () => renderProducts(customers[state.customerKey]));
elements.sortSelect.addEventListener('change', () => renderProducts(customers[state.customerKey]));

elements.orderTracking.addEventListener('click', () => toggleTrackingModal(true));
elements.trackingClose.addEventListener('click', () => toggleTrackingModal(false));
elements.trackingModal.addEventListener('click', (event) => {
  if (event.target === elements.trackingModal) {
    toggleTrackingModal(false);
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && elements.trackingModal.classList.contains('show')) {
    toggleTrackingModal(false);
  }
});

elements.trackingAddToCart.addEventListener('click', () => {
  showToast('Hele ordren lagt til i kurv (demo)');
  toggleTrackingModal(false);
});

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
