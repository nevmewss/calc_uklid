const extrasCatalog = [
  { key: "trouba", label: "Vyčistíme troubu", price: 349, icon: "🧯" },
  { key: "digestor", label: "Vyčistíme digestoř", price: 349, icon: "🌬️" },
  { key: "skrinky", label: "Vyčistíme kuchyňské skříňky", price: 349, icon: "🧰" },
  { key: "nadobi", label: "Umyjeme nádobí", price: 209, icon: "🍽️" },
  { key: "lednice", label: "Vyčistíme lednici", price: 349, icon: "🧊" },
  { key: "mikrovlnka", label: "Umyjeme mikrovlnnou troubu", price: 179, icon: "📦" },
  { key: "balkon", label: "Uklidíme na balkoně", price: 225, icon: "🪟" },
  { key: "okna", label: "Mytí okna", price: 229, icon: "🪟" },
  { key: "zehleni", label: "Žehlení", price: 349, icon: "🧺" },
  { key: "zvirata", label: "Uklizení podestýlky pro zvířata", price: 100, icon: "🐈" },
  { key: "hodiny", label: "Hodiny navíc", price: 349, icon: "🕘" },
  { key: "skrini", label: "Uklidit ve skříni", price: 349, icon: "🚪" },
];

const upholsteryCatalog = [
  { key: "sofa2", label: "Čištění dvoulůžkové pohovky", price: 895, icon: "🛋️" },
  { key: "sofa3", label: "Čištění třímístné pohovky", price: 1190, icon: "🛋️" },
  { key: "corner4", label: "Čištění rohové sedací soupravy (4 místa)", price: 1490, icon: "🪑" },
  { key: "corner6", label: "Čištění rohové sedací soupravy (5-6 míst)", price: 1790, icon: "🪑" },
  { key: "corner7", label: "Čištění rohové sedací soupravy (7+ míst)", price: 2090, icon: "🪑" },
  { key: "mattress1a", label: "Čištění matrací (Jednolůžko z jedné strany)", price: 615, icon: "🛏️" },
  { key: "mattress1b", label: "Čištění matrací (Jednolůžko z obou stran)", price: 845, icon: "🛏️" },
  { key: "mattress2a", label: "Čištění matrací (Dvoulůžko z jedné strany)", price: 1230, icon: "🛏️" },
  { key: "mattress2b", label: "Čištění matrací (Dvoulůžko z obou stran)", price: 1690, icon: "🛏️" },
  { key: "koberec", label: "Čištění koberců", price: 99, icon: "🧶" },
  { key: "krytina", label: "Čištění kobercová krytina", price: 95, icon: "🧶" },
  { key: "kreslo", label: "Čištění křesla", price: 615, icon: "🪑" },
  { key: "office", label: "Čištění kancelářských židlí", price: 365, icon: "💺" },
  { key: "stolicky", label: "Chemické čištění židlí, stoliček", price: 280, icon: "🪑" },
  { key: "postele", label: "Čištění čalouněných postelí", price: 895, icon: "🛏️" },
  { key: "puf", label: "Čištění pufu nebo otomanu (1 místo)", price: 295, icon: "🧸" },
  { key: "kocarek", label: "Čištění čalounění kočárku", price: null, badge: "Cena na dotaz", icon: "🌼" },
  { key: "pachy", label: "Odstraňovač pachů", price: null, note: "Dle počtu jednotek nabídka", icon: "〰️" },
];

const cityOptions = [
  { value: "prague-1-10", label: "Prague 1-10", surcharge: 0 },
  { value: "benice", label: "Benice", surcharge: 200 },
  { value: "bechovice", label: "Běchovice", surcharge: 250 },
  { value: "cakovice", label: "Čakovice", surcharge: 250 },
  { value: "dablice", label: "Ďáblice", surcharge: 200 },
  { value: "dolni-chabry", label: "Dolní Chabry", surcharge: 250 },
  { value: "kralovice", label: "Královice", surcharge: 300 },
  { value: "kunratice", label: "Kunratice", surcharge: 200 },
  { value: "petrovice", label: "Petrovice", surcharge: 250 },
  { value: "reporyje", label: "Řeporyje", surcharge: 200 },
  { value: "uhrineves", label: "Uhříněves", surcharge: 250 },
  { value: "vinor", label: "Vinoř", surcharge: 300 },
];

const discountCycle = ["-10%", "-20%", "-15%", "-18%", "-13%", "-18%", "-18%"];

function formatTime(hour, minute) {
  return `${hour}:${String(minute).padStart(2, "0")}`;
}

function createMonth({ key, label, year, monthIndex, blockedUntil = 0, specials = {} }) {
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const leadingEmpty = (new Date(year, monthIndex, 1).getDay() + 6) % 7;
  const cells = [];

  for (let index = 0; index < leadingEmpty; index += 1) {
    cells.push({ empty: true, key: `${key}-empty-${index}` });
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const special = specials[day] ?? {};

    if (day <= blockedUntil && !special.label && !special.discount) {
      cells.push({ key: `${key}-${day}`, day, blocked: true });
      continue;
    }

    cells.push({
      key: `${key}-${day}`,
      day,
      label: special.label ?? "",
      discount:
        special.label || Object.prototype.hasOwnProperty.call(special, "discount")
          ? special.discount ?? ""
          : discountCycle[(day - 1) % discountCycle.length],
    });
  }

  return { key, label, cells };
}

const calendarMonths = [
  createMonth({
    key: "2026-06",
    label: "Červen",
    year: 2026,
    monthIndex: 5,
    blockedUntil: 24,
    specials: {
      25: { label: "dnes", discount: "" },
      26: { discount: "-10%" },
      27: { discount: "-15%" },
      28: { discount: "-13%" },
      29: { discount: "-10%" },
      30: { discount: "-20%" },
    },
  }),
  createMonth({
    key: "2026-07",
    label: "Červenec",
    year: 2026,
    monthIndex: 6,
  }),
  createMonth({
    key: "2026-08",
    label: "Srpen",
    year: 2026,
    monthIndex: 7,
  }),
];

const timeOptions = [
  { base: "7:30", choices: ["7:45"] },
  ...Array.from({ length: 13 }, (_, index) => {
    const hour = index + 8;
    return {
      base: formatTime(hour, 0),
      choices: [15, 30, 45].map((minute) => formatTime(hour, minute)),
    };
  }),
];

const promoCodes = {
  SLEVA15: { type: "percent", value: 15 },
  CLEAN10: { type: "percent", value: 10 },
  PARTNER50: { type: "fixed", value: 50 },
};

const state = {
  customerType: "person",
  rooms: 1,
  bathrooms: 2,
  kitchenType: "kitchenette",
  privateHouse: false,
  frequency: "once",
  frequencyDiscount: 0,
  extras: new Set(),
  upholsteryExtras: new Set(),
  vacuumNeeded: false,
  promo: null,
  currentMonth: 0,
  selectedDay: "2026-06-25",
  selectedTime: "9:00",
  payment: "cash",
  upholsteryOpen: false,
  city: cityOptions[0].value,
};

const currency = new Intl.NumberFormat("cs-CZ", {
  style: "currency",
  currency: "CZK",
  maximumFractionDigits: 0,
});

const COMPANY_SURCHARGE = 175;

const extrasGrid = document.getElementById("extras-grid");
const upholsteryGrid = document.getElementById("upholstery-grid");
const calendarGrid = document.getElementById("calendar-grid");
const timeGrid = document.getElementById("time-grid");
const monthLabel = document.getElementById("month-label");
const monthPrev = document.getElementById("month-prev");
const monthNext = document.getElementById("month-next");
const monthTip = document.querySelector(".month-tip");
const roomsValue = document.getElementById("rooms-value");
const bathroomsValue = document.getElementById("bathrooms-value");
const privateHouseInput = document.getElementById("private-house");
const vacuumInput = document.getElementById("vacuum-needed");
const promoForm = document.getElementById("promo-form");
const promoCodeInput = document.getElementById("promo-code");
const summaryTitle = document.getElementById("summary-title");
const summaryDuration = document.getElementById("summary-duration");
const summaryTotalPrice = document.getElementById("summary-total-price");
const summaryOriginalPrice = document.getElementById("summary-original-price");
const finalOrderPrice = document.getElementById("final-order-price");
const finalOrderOriginal = document.getElementById("final-order-original");
const finalOrderButton = document.getElementById("final-order-button");
const summaryOrderButton = document.getElementById("summary-order-button");
const upholsteryToggle = document.getElementById("upholstery-toggle");
const upholsteryPanel = document.getElementById("upholstery-panel");
const progressBar = document.querySelector(".page-progress");
const progressSteps = [...document.querySelectorAll(".progress-step")];
const stepSections = progressSteps
  .map((step) => document.getElementById(step.dataset.target))
  .filter(Boolean);
const citySelect = document.getElementById("city");
const phoneInput = document.getElementById("phone-input");

function formatCurrency(value) {
  return currency.format(Math.round(value)).replace(/\s?Kč/, " Kč");
}

function pluralizeRooms(value) {
  if (value === 1) return "1 pokoj";
  if (value >= 2 && value <= 4) return `${value} pokoje`;
  return `${value} pokojů`;
}

function pluralizeBathrooms(value) {
  if (value === 1) return "1 koupelna";
  if (value >= 2 && value <= 4) return `${value} koupelny`;
  return `${value} koupelen`;
}

function getSelectedCity() {
  return cityOptions.find((option) => option.value === state.city) ?? cityOptions[0];
}

function getFirstAvailableDay(monthIndex) {
  const month = calendarMonths[monthIndex];
  return month.cells.find((cell) => !cell.empty && !cell.blocked) ?? null;
}

function ensureSelectedDayForMonth(monthIndex) {
  const month = calendarMonths[monthIndex];
  if (state.selectedDay.startsWith(`${month.key}-`)) {
    return;
  }

  const fallbackDay = getFirstAvailableDay(monthIndex);
  if (fallbackDay) {
    state.selectedDay = fallbackDay.key;
  }
}

function populateCitySelect() {
  citySelect.innerHTML = cityOptions
    .map((option) => {
      const suffix = option.surcharge ? ` (+${formatCurrency(option.surcharge)})` : "";
      return `<option value="${option.value}">${option.label}${suffix}</option>`;
    })
    .join("");
  citySelect.value = state.city;
}

function renderServiceCards(target, items, selectedSet) {
  target.innerHTML = items
    .map((item) => {
      const selected = selectedSet.has(item.key) ? " selected" : "";
      const badge =
        item.price !== null
          ? `<span class="service-card__price">${formatCurrency(item.price)}</span>`
          : item.badge
            ? `<span class="service-card__price">${item.badge}</span>`
            : "";
      const note = item.note ? `<small class="service-card__note">${item.note}</small>` : "";

      return `
        <button
          class="service-card${selected}"
          type="button"
          data-card-key="${item.key}"
          data-card-group="${target.id === "upholstery-grid" ? "upholstery" : "extras"}"
        >
          <span class="service-card__icon">${item.icon}</span>
          <span class="service-card__title">${item.label}</span>
          ${badge}
          ${note}
        </button>
      `;
    })
    .join("");
}

function renderCalendar() {
  const activeMonth = calendarMonths[state.currentMonth];
  const nextMonth = calendarMonths[state.currentMonth + 1];

  monthLabel.textContent = activeMonth.label;
  monthPrev.disabled = state.currentMonth === 0;
  monthNext.disabled = state.currentMonth === calendarMonths.length - 1;

  if (monthTip) {
    monthTip.hidden = !nextMonth;
    monthTip.textContent = nextMonth ? `Další měsíc: ${nextMonth.label}` : "";
  }

  calendarGrid.innerHTML = activeMonth.cells
    .map((item) => {
      if (item.empty) {
        return `<span class="calendar-empty" aria-hidden="true"></span>`;
      }

      if (item.blocked) {
        return `
          <button class="calendar-cell calendar-cell--blocked" type="button" disabled>
            <span class="calendar-card">
              <small>&nbsp;</small>
              <strong>${item.day}</strong>
            </span>
          </button>
        `;
      }

      const cellClasses = [
        "calendar-cell",
        item.discount ? "calendar-cell--discount" : "",
        item.label ? "calendar-cell--today" : "",
        state.selectedDay === item.key ? "selected" : "",
      ]
        .filter(Boolean)
        .join(" ");

      return `
        <button class="${cellClasses}" type="button" data-day-key="${item.key}">
          <span class="calendar-card">
            <small>${item.label || item.discount || "&nbsp;"}</small>
            <strong>${item.day}</strong>
          </span>
        </button>
      `;
    })
    .join("");
}

function slotContainsTime(slot, time) {
  return time === slot.base || slot.choices.includes(time);
}

function getMinuteLabel(time) {
  return `:${time.split(":")[1]}`;
}

function renderTimeSlots() {
  timeGrid.innerHTML = timeOptions
    .map((slot) => {
      const selected = slotContainsTime(slot, state.selectedTime) ? " selected" : "";
      const selectedMinute =
        slotContainsTime(slot, state.selectedTime) && state.selectedTime !== slot.base
          ? `<span class="time-slot__selected-minute">${getMinuteLabel(state.selectedTime)}</span>`
          : "";
      const minuteChoices = slot.choices
        .map((time) => {
          const minuteSelected = state.selectedTime === time ? " selected" : "";
          return `
            <button class="time-minute${minuteSelected}" type="button" data-time="${time}">
              ${getMinuteLabel(time)}
            </button>
          `;
        })
        .join("");

      return `
        <div class="time-slot-wrap">
          <button class="time-slot${selected}" type="button" data-time="${slot.base}">
            <span class="time-slot__label">${slot.base}</span>
            ${selectedMinute}
          </button>
          <div class="time-slot-minutes">
            ${minuteChoices}
          </div>
        </div>
      `;
    })
    .join("");
}

function getExtraPrice(items, selectedSet) {
  return items.reduce((sum, item) => {
    if (!selectedSet.has(item.key) || item.price === null) {
      return sum;
    }

    return sum + item.price;
  }, 0);
}

function getBasePrice() {
  return 1049 + (state.rooms - 1) * 290 + (state.bathrooms - 1) * 359 - (state.kitchenType === "kitchenette" ? 50 : 0);
}

function getHouseMultiplier() {
  return state.privateHouse ? 1.2 : 1;
}

function getPromoDiscount(subtotal) {
  if (!state.promo) {
    return 0;
  }

  if (state.promo.type === "percent") {
    return subtotal * (state.promo.value / 100);
  }

  return state.promo.value;
}

function getDurationMinutes() {
  let minutes = 180 + (state.rooms - 1) * 45 + (state.bathrooms - 1) * 50;

  if (state.privateHouse) {
    minutes += 35;
  }

  if (state.vacuumNeeded) {
    minutes += 10;
  }

  if (state.extras.has("hodiny")) {
    minutes += 60;
  }

  minutes += state.extras.size * 12;
  minutes += state.upholsteryExtras.size * 18;

  return minutes;
}

function formatDuration(minutes) {
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;

  if (!rest) {
    return `${hours} Hodiny`;
  }

  return `${hours} Hodiny ${rest} minuty`;
}

function getTotals() {
  const extrasPrice = getExtraPrice(extrasCatalog, state.extras);
  const upholsteryPrice = getExtraPrice(upholsteryCatalog, state.upholsteryExtras);
  const vacuumPrice = state.vacuumNeeded ? 200 : 0;
  const citySurcharge = getSelectedCity().surcharge;
  const companySurcharge = state.customerType === "company" ? COMPANY_SURCHARGE : 0;
  const original =
    (getBasePrice() + extrasPrice + upholsteryPrice + vacuumPrice) * getHouseMultiplier() +
    citySurcharge +
    companySurcharge;
  const frequencyDiscount = original * (state.frequencyDiscount / 100);
  const subtotal = original - frequencyDiscount;
  const promoDiscount = Math.min(getPromoDiscount(subtotal), subtotal);
  const total = subtotal - promoDiscount;

  return {
    original: Math.round(original),
    total: Math.round(total),
  };
}

function renderSummary() {
  const totals = getTotals();
  const propertyType = state.privateHouse ? "Úklid domu" : "Úklid bytu";

  summaryTitle.textContent = `${propertyType} s ${pluralizeRooms(state.rooms)} a ${pluralizeBathrooms(
    state.bathrooms
  )}, kuchyně, chodba ${formatCurrency(totals.original)}`;

  summaryDuration.textContent = formatDuration(getDurationMinutes());
  summaryTotalPrice.textContent = formatCurrency(totals.total);
  finalOrderPrice.textContent = formatCurrency(totals.total);

  if (totals.total !== totals.original) {
    summaryOriginalPrice.textContent = formatCurrency(totals.original);
    finalOrderOriginal.textContent = formatCurrency(totals.original);
    summaryOriginalPrice.style.display = "";
    finalOrderOriginal.style.display = "";
  } else {
    summaryOriginalPrice.style.display = "none";
    finalOrderOriginal.style.display = "none";
  }
}

function renderCounts() {
  roomsValue.textContent = pluralizeRooms(state.rooms);
  bathroomsValue.textContent = pluralizeBathrooms(state.bathrooms);
}

function renderKitchenChoices() {
  document.querySelectorAll(".mini-choice").forEach((item) => {
    item.classList.toggle("selected", item.dataset.kitchen === state.kitchenType);
  });
}

function renderAccordion() {
  upholsteryToggle.setAttribute("aria-expanded", String(state.upholsteryOpen));
  upholsteryPanel.hidden = !state.upholsteryOpen;
}

function updateActiveStep() {
  const nearBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4;
  const focusLine = progressBar.offsetHeight + 56;
  let activeId = stepSections[0]?.id;

  stepSections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= focusLine && rect.bottom > focusLine) {
      activeId = section.id;
    }
  });

  if (nearBottom && stepSections.length) {
    activeId = stepSections[stepSections.length - 1].id;
  }

  progressSteps.forEach((step) => {
    step.classList.toggle("active", step.dataset.target === activeId);
  });
}

function renderAll() {
  renderCounts();
  renderKitchenChoices();
  renderCalendar();
  renderTimeSlots();
  renderServiceCards(extrasGrid, extrasCatalog, state.extras);
  renderServiceCards(upholsteryGrid, upholsteryCatalog, state.upholsteryExtras);
  renderAccordion();
  renderSummary();
  updateActiveStep();
}

function setMonth(monthIndex) {
  state.currentMonth = Math.max(0, Math.min(monthIndex, calendarMonths.length - 1));
  ensureSelectedDayForMonth(state.currentMonth);
  renderAll();
}

function normalizePhoneDigits(value) {
  let digits = value.replace(/\D/g, "");

  if (digits.startsWith("420")) {
    digits = digits.slice(3);
  }

  return digits.slice(0, 9);
}

function formatPhoneInput(value) {
  const digits = normalizePhoneDigits(value);
  return digits.replace(/(\d{3})(?=\d)/g, "$1 ").trim();
}

populateCitySelect();

document.querySelectorAll(".segment-button").forEach((button) => {
  button.addEventListener("click", () => {
    state.customerType = button.dataset.customer;
    document.querySelectorAll(".segment-button").forEach((item) => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-selected", String(active));
    });
    renderAll();
  });
});

document.querySelectorAll(".counter-controls").forEach((control) => {
  control.addEventListener("click", (event) => {
    const actionButton = event.target.closest("[data-action]");
    if (!actionButton) {
      return;
    }

    const key = control.dataset.counter;
    const direction = actionButton.dataset.action === "increase" ? 1 : -1;
    state[key] = Math.max(1, state[key] + direction);
    renderAll();
  });
});

document.querySelectorAll(".mini-choice").forEach((choice) => {
  choice.addEventListener("click", () => {
    state.kitchenType = choice.dataset.kitchen;
    renderAll();
  });
});

privateHouseInput.addEventListener("change", () => {
  state.privateHouse = privateHouseInput.checked;
  renderAll();
});

vacuumInput.addEventListener("change", () => {
  state.vacuumNeeded = vacuumInput.checked;
  renderAll();
});

citySelect.addEventListener("change", () => {
  state.city = citySelect.value;
  renderAll();
});

phoneInput.addEventListener("input", () => {
  phoneInput.value = formatPhoneInput(phoneInput.value);
});

document.addEventListener("click", (event) => {
  const serviceCard = event.target.closest(".service-card");
  if (!serviceCard) {
    return;
  }

  const key = serviceCard.dataset.cardKey;
  const selectedSet = serviceCard.dataset.cardGroup === "upholstery" ? state.upholsteryExtras : state.extras;

  if (selectedSet.has(key)) {
    selectedSet.delete(key);
  } else {
    selectedSet.add(key);
  }

  renderAll();
});

document.addEventListener("click", (event) => {
  const dayButton = event.target.closest("[data-day-key]");
  if (dayButton) {
    state.selectedDay = dayButton.dataset.dayKey;
    renderAll();
    return;
  }

  const timeButton = event.target.closest("[data-time]");
  if (timeButton) {
    state.selectedTime = timeButton.dataset.time;
    renderAll();
  }
});

document.querySelectorAll(".frequency-card").forEach((card) => {
  card.addEventListener("click", () => {
    document.querySelectorAll(".frequency-card").forEach((item) => item.classList.remove("selected"));
    card.classList.add("selected");
    state.frequency = card.dataset.frequency;
    state.frequencyDiscount = Number(card.dataset.discount);
    renderAll();
  });
});

document.querySelectorAll(".payment-card").forEach((card) => {
  card.addEventListener("click", () => {
    document.querySelectorAll(".payment-card").forEach((item) => item.classList.remove("selected"));
    card.classList.add("selected");
    state.payment = card.dataset.payment;
  });
});

upholsteryToggle.addEventListener("click", () => {
  state.upholsteryOpen = !state.upholsteryOpen;
  renderAll();
});

promoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const code = promoCodeInput.value.trim().toUpperCase();

  if (!code) {
    state.promo = null;
    renderAll();
    return;
  }

  state.promo = promoCodes[code] ?? null;

  if (!state.promo) {
    promoCodeInput.value = "";
    promoCodeInput.placeholder = "Kód nebyl nalezen";
  }

  renderAll();
});

progressSteps.forEach((step) => {
  step.addEventListener("click", () => {
    const target = document.getElementById(step.dataset.target);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

monthPrev.addEventListener("click", () => {
  setMonth(state.currentMonth - 1);
});

monthNext.addEventListener("click", () => {
  setMonth(state.currentMonth + 1);
});

summaryOrderButton.addEventListener("click", () => {
  document.getElementById("payment-section").scrollIntoView({ behavior: "smooth", block: "start" });
});

finalOrderButton.addEventListener("click", () => {
  finalOrderPrice.textContent = formatCurrency(getTotals().total);
});

window.addEventListener("scroll", updateActiveStep, { passive: true });
window.addEventListener("resize", updateActiveStep);

renderAll();
