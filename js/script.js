const product = document.querySelector('._product');
const burger = document.querySelector('.header__burger');
const productMenu = document.querySelector('.product');
product.addEventListener('click', function (e) {

    productMenu.classList.toggle('_active');
    product.classList.toggle('_active');
})
burger.addEventListener('click', function (e) {
    const headerMenu = document.querySelector('.header__menu');
    headerMenu.classList.toggle('_active');
})

const countryList = document.querySelector('.form-registration__cities');

;

var cities = [
    'Афганистан',
    'Албания',
    'Антарктика',
    'Алжир',
    'Американское Самоа',
    'Андора',
    'Ангола',
    'Антигуа и Барбуда',
    'Азербайджан',
    'Аргентина',
    'Австралия',
    'Австрия',
    'Багамские Острова',
    'Бахрейн',
    'Бангладеш',
    'Армения',
    'Барбадос',
    'Бельгия',
    'Бермудские Острова',
    'Бутан',
    'Боливия',
    'Босния и Герцеговина',
    'Ботсвана',
    'Остров Буве',
    'Бразилия',
    'Белиз',
    'Британская территория в Индийском океане',
    'Соломоновы Острова',
    'Британские Виргинские острова',
    'Бруней',
    'Болгария',
    'Мьянма',
    'Бурунди',
    'Белоруссия',
    'Камбоджа',
    'Камерун',
    'Канада',
    'Кабо-Верде',
    'Каймановы острова',
    'Центральноафриканская Республика',
    'Шри-Ланка',
    'Чад',
    'Чили',
    'Китайская Народная Республика',
    'Остров Рождества',
    'Кокосовые острова',
    'Колумбия',
    'Коморы',
    'Майотта',
    'Республика Конго',
    'Демократическая Республика Конго',
    'Острова Кука',
    'Коста-Рика',
    'Хорватия',
    'Куба',
    'Кипр',
    'Чехия',
    'Бенин',
    'Дания',
    'Доминика',
    'Доминиканская Республика',
    'Эквадор',
    'Сальвадор',
    'Экваториальная Гвинея',
    'Эфиопия',
    'Эритрея',
    'Эстония',
    'Фарерские острова',
    'Фолклендские острова',
    'Южная Георгия и Южные Сандвичевы острова',
    'Фиджи',
    'Финляндия',
    'Аландские острова',
    'Франция',
    'Французская Гвиана',
    'Французская Полинезия',
    'Французские Южные и Антарктические территории',
    'Джибути',
    'Габон',
    'Грузия',
    'Гамбия',
    'Палестина',
    'Германия',
    'Гана',
    'Гибралтар',
    'Кирибати',
    'Греция',
    'Гренландия',
    'Гренада',
    'Гваделупа',
    'Гуам',
    'Гватемала',
    'Гвинея',
    'Гайана',
    'Республика Гаити',
    'Остров Херд и острова Макдональд',
    'Ватикан',
    'Гондурас',
    'Гонконг',
    'Венгрия',
    'Исландия',
    'Индия',
    'Индонезия',
    'Иран',
    'Ирак',
    'Ирландия',
    'Израиль',
    'Италия',
    'Кот-д’Ивуар',
    'Ямайка',
    'Япония',
    'Казахстан',
    'Иордания',
    'Кения',
    'КНДР',
    'Республика Корея',
    'Кувейт',
    'Киргизия',
    'Лаос',
    'Ливан',
    'Лесото',
    'Латвия',
    'Либерия',
    'Ливия',
    'Лихтенштейн',
    'Литва',
    'Люксембург',
    'Макао',
    'Мадагаскар',
    'Малави',
    'Малайзия',
    'Мальдивы',
    'Мали',
    'Мальта',
    'Мартиника',
    'Мавритания',
    'Маврикий',
    'Мексика',
    'Монако',
    'Монголия',
    'Молдавия',
    'Черногория',
    'Монтсеррат',
    'Марокко',
    'Мозамбик',
    'Оман',
    'Намибия',
    'Науру',
    'Непал',
    'Нидерланды',
    'Кюрасао',
    'Аруба',
    'Синт-Мартен',
    'Бонэйр, Синт-Эстатиус и Саба',
    'Новая Каледония',
    'Вануату',
    'Новая Зеландия',
    'Никарагуа',
    'Нигер',
    'Нигерия',
    'Ниуэ',
    'Норфолк',
    'Норвегия',
    'Северные Марианские острова',
    'Внешние малые острова США',
    'Микронезия',
    'Маршалловы Острова',
    'Палау',
    'Пакистан',
    'Панама',
    'Папуа — Новая Гвинея',
    'Парагвай',
    'Перу',
    'Филиппины',
    'Острова Питкэрн',
    'Польша',
    'Португалия',
    'Гвинея-Бисау',
    'Восточный Тимор',
    'Пуэрто-Рико',
    'Катар',
    'Реюньон',
    'Румыния',
    'Россия',
    'Руанда',
    'Сен-Бартелеми',
    'Острова Святой Елены, Вознесения и Тристан-да-Кунья',
    'Сент-Китс и Невис',
    'Ангилья',
    'Сент-Люсия',
    'Сен-Мартен (Франция)',
    'Сен-Пьер и Микелон',
    'Сент-Винсент и Гренадины',
    'Сан-Марино',
    'Сан-Томе и Принсипи',
    'Саудовская Аравия',
    'Сенегал',
    'Сербия',
    'Сейшельские Острова',
    'Сьерра-Леоне',
    'Сингапур',
    'Словакия',
    'Словения',
    'Сомали',
    'Южно-Африканская Республика',
    'Зимбабве',
    'Испания',
    'Южный Судан',
    'Судан',
    'Западная Сахара',
    'Суринам',
    'Шпицберген и Ян-Майен',
    'Свазиленд',
    'Швеция',
    'Швейцария',
    'Сирия',
    'Таджикистан',
    'Таиланд',
    'Того',
    'Токелау',
    'Тонга',
    'Тринидад и Тобаго',
    'Объединённые Арабские Эмираты',
    'Тунис',
    'Турция',
    'Туркмения',
    'Теркс и Кайкос',
    'Тувалу',
    'Уганда',
    'Украина',
    'Республика Македония',
    'Египет',
    'Великобритания',
    'Гернси',
    'Джерси',
    'Остров Мэн',
    'Танзания',
    'Соединённые Штаты Америки',
    'Виргинские Острова',
    'Буркина-Фасо',
    'Уругвай',
    'Узбекистан',
    'Венесуэла',
    'Уоллис и Футуна',
    'Самоа',
    'Йемен',
    'Замбия',
];

let output = '';
for (i of cities) {
    output += `<li class="form-registration__city" data-value="${i}">${i}</li>`;
    countryList.innerHTML = output;
}

const where = document.querySelector('#where');
const whereCity = document.querySelectorAll('.form-registration__city');
const people = document.querySelector('.form-registration__people');
const count = document.querySelector('.form-registration__body')
const countInput = document.querySelector('.form-registration__count')
const plus = document.querySelectorAll('.people__plus');
const minus = document.querySelectorAll('.people__minus');
const num = document.querySelectorAll('.people__num')
let pluses = [];
let minuses = [];
let nums = [];

whereCity.forEach(function (e) {
    e.addEventListener('click', function () {
        where.value = e.innerHTML;
        countryList.classList.remove('_active');
    })
})

document.onclick = function (e) {
    if (e.target.className != "form-registration__where more" && e.target.className != "form-registration__city" && e.target.className != "form-registration__count more" && e.target.className != "people__plus" && e.target.className != "people__minus" && e.target.className != "people__num" && e.target.className != "form-registration__body" && e.target.className != "people__item" && e.target.className != "people__title" && e.target.className != "people__subtitle" && e.target.className != "people__items" && e.target.className != "form-registration__people people" && e.target.className != "people__items" && e.target.className != "header__link _product _active") {
        countryList.classList.remove('_active');
        people.classList.remove('_active');
        productMenu.classList.remove('_active');

        let sum = 0;
        for (i of nums) {
            sum += Number(i.value);
        }
        if (sum >= 2 && sum <= 4) {
            countInput.value = `${sum} человека`;
        }
        else if (sum > 4) {
            countInput.value = `${sum} человек`;
        }
    };
};
where.addEventListener('focus', function (e) {
    city = document.querySelector('.form-registration__cities');
    city.classList.add('_active');
})
count.addEventListener('click', function () {
    people.classList.toggle('_active');
})
document.querySelector('#where').oninput = function () {
    let val = this.value.trim();
    const city = document.querySelectorAll('.form-registration__cities li');
    if (val != '') {
        city.forEach(function (e) {
            if (e.innerText.search(val) == -1) {
                e.classList.add('_hide');
            }
            else {
                e.classList.remove('_hide');
            }
        })
    }
    else {
        city.forEach(function (e) {
            e.classList.remove('_hide');
        })
    }
    let hideCities = document.querySelectorAll('.form-registration__cities li._hide');
    if (hideCities.length == 247) {
        countryList.style.height = '1px';
    }
    else {
        countryList.style.height = '211px';
    }
}
i = 0
plus.forEach(function (e) {
    pluses.push(e);
})
minus.forEach(function (e) {
    minuses.push(e);
})
num.forEach(function (e) {
    nums.push(e);
})
for (i = 0; i < 4; i++) {
    let l = i
    pluses[i].addEventListener('click', function () {
        nums[l].value = Number(nums[l].value) + 1;
    });
    minuses[i].addEventListener('click', function () {
        if (Number(nums[l].value) > 0) {
            nums[l].value = Number(nums[l].value) - 1;
        }
    });
}
