// Твои данные
const dealers = [
  {
    "id": 1,
    "name": "Эко Септик",
    "city": "Архангельск",
    "address": "ул. Красных Партизан, 12 корпус 1, офис 212",
    "phone": "+7 8182 47-18-86",
    "email": "eptik29@mail.ru",
    "coords": [64.582224, 40.506581]
  },
  {
    "id": 2,
    "name": "ЭкоЛик",
    "city": "Великие Луки",
    "address": "проспект Ленина, 36/31",
    "phone": "+7 911 892-00-02",
    "email": "ekolik60@yandex.ru",
    "coords": [56.342336, 30.523541]
  },
  {
    "id": 3,
    "name": "KAESYAMBO",
    "city": "Великий Новгород",
    "address": "",
    "phone": "+7 905 207-27-56",
    "email": "ksmb-rus@yandex.ru",
    "coords": [58.522857, 31.269816]
  },
  {
    "id": 4,
    "name": "Key House",
    "city": "Великий Новгород",
    "address": "Большая Санкт Петербургская 56, стр 1, этаж 2",
    "phone": "+7 816 255-64-60",
    "email": "septik_vn@mail.ru",
    "coords": [58.542940, 31.265881]
  },
  {
    "id": 5,
    "name": "Волга-Септик (ООО «Торговый Дом Юпитер»)",
    "city": "Волгоград",
    "address": "ул. Горького, 41Р, Волжский",
    "phone": "+7 917 338-86-53",
    "email": "vlg-septik@yandex.ru",
    "coords": [48.804413, 44.764704]
  },
  {
    "id": 6,
    "name": "Акватехник",
    "city": "Вологда",
    "address": "ул. Северная д 7а (ТЦ КИТ офис 515 (5 этаж)",
    "phone": "+7 8172 700-717",
    "email": "501711@mail.ru",
    "coords": [59.216807, 39.929117]
  },
  {
    "id": 7,
    "name": "ЭкосСтрой",
    "city": "Вологда",
    "address": "ул. Вологодская Слобода, д. 2",
    "phone": "+7 911 508-24-42",
    "email": "ekosstroy35@mail.ru",
    "coords": [59.218640, 39.908941]
  },
  {
    "id": 8,
    "name": "АЙКО",
    "city": "Воронеж",
    "address": "ул. Холмистая, 1Г, ТЦ Афанасьевский, павильон 19",
    "phone": "+7 473 291-38-67",
    "email": "3886@aiko36.ru",
    "coords": [51.672416, 39.123284]
  },
  {
    "id": 9,
    "name": "Септик Life",
    "city": "Екатеринбург",
    "address": "ул. Хохрякова, 33",
    "phone": "+7 965 527-61-21",
    "email": "razvedos1712@gmail.com",
    "coords": [56.831910, 60.593315]
  },
  {
    "id": 10,
    "name": "Лоссептик",
    "city": "Екатеринбург",
    "address": "ул. Учителей, 46",
    "phone": "+7 343 382-12-13",
    "email": "buc-66@mail.ru",
    "coords": [56.872398, 60.634225]
  },
  {
    "id": 11,
    "name": "EKBSeptic",
    "city": "Екатеринбург",
    "address": "ул. Академика Шварца, д. 17, ТЦ Дирижабль, 2 этаж, офис ЖЛ 10",
    "phone": "+7 343 382-55-88",
    "email": "nfo@ekb-septic.ru",
    "coords": [56.796954, 60.626840]
  },
  {
    "id": 12,
    "name": "GreenTech",
    "city": "Казань",
    "address": "ул. Леваневского, 2А ",
    "phone": "+7 903 061-02-13",
    "email": "smr-kazan@yandex.ru",
    "coords": [55.845062, 49.082079]
  },
  {
    "id": 13,
    "name": "Купи Септик",
    "city": "Калуга",
    "address": "ул. Кирова, 39",
    "phone": "+7 910 523-88-99",
    "email": "zakaz@kupiseptiki.ru",
    "coords": [54.513704, 36.266030]
  },
  {
    "id": 13,
    "name": "Комфортная загородная жизнь",
    "city": "Калуга",
    "address": "ул. Тульская 189 строение 5, офис - 1",
    "phone": "+7 910 608-23-43",
    "email": "",
    "coords": [54.514927, 36.298603]
  },
  {
    "id": 14,
    "name": "KZS",
    "city": "Королев",
    "address": "г. Москва, проспект Андропова, дом 22, на 15-м этаже, комната № 28д в Помещении № 1",
    "phone": "+7 936 525-32-65",
    "email": "septik@kzs.group",
    "coords": [55.682640, 37.661787]
  },
  {
    "id": 15,
    "name": "Евросток",
    "city": "Краснодар",
    "address": "ул. Кирилла Россинского, 12",
    "phone": "+7 918 099-53-00",
    "email": "9385144436@mail.ru",
    "coords": [45.088064, 39.023660]
  },
  {
    "id": 16,
    "name": "Академия Воды",
    "city": "Краснодар",
    "address": "ул. Народная, 504",
    "phone": "+7 908 228-74-79",
    "email": "info@ak-wa.ru",
    "coords": [45.088064, 39.023660]
  },
  {
    "id": 17,
    "name": "Москва",
    "city": "Нептун-Пласт",
    "address": "",
    "phone": "+7 495 106-35-66",
    "email": "montazhneptun@yandex.ru",
    "coords": [55.755864, 37.617698]
  },
  {
    "id": 18,
    "name": "Москва",
    "city": "Ёмкости Онлайн",
    "address": "ул. Люблинcкaя, 141, oфиc 411",
    "phone": "+7 499 130-82-21",
    "email": "nfo@emkosti-online.ru",
    "coords": [55.665802, 37.741549]
  },
  {
    "id": 19,
    "name": "Москва",
    "city": "ДВ Септ",
    "address": "",
    "phone": "+7 499 955-90-07",
    "email": "dvsept78@gmail.com",
    "coords": [55.755864, 37.617698]
  },
  {
    "id": 20,
    "name": "Москва",
    "city": "НепСтройМонтаж",
    "address": "",
    "phone": "+7 495 162-69-49",
    "email": "nepstroymontazh@gmail.com",
    "coords": [55.755864, 37.617698]
  },
  {
    "id": 21,
    "name": "Москва",
    "city": "Септик Хаус",
    "address": "ул. Строительный проезд, 7Ак3",
    "phone": "+7 495 646-00-42",
    "email": "nfo@septikimoskva.com",
    "coords": [55.834340, 37.425881]
  },
  {
    "id": 22,
    "name": "Москва",
    "city": "Эконом-Септик",
    "address": "ул. Брусилова 27к3 Склад: Подольск, ул. Правды 38",
    "phone": "+7 495 101-02-55",
    "email": "info@ekonom-septik.ru",
    "coords": [55.502248, 37.589311]
  },
  {
    "id": 23,
    "name": "Москва",
    "city": "Септик Комфорт",
    "address": "ул. Большие Каменщики, 1, офис 377",
    "phone": "+7 499 372-16-48",
    "email": "ibiz@septikus.ru",
    "coords": [55.739640, 37.654215]
  },
  {
    "id": 24,
    "name": "Москва",
    "city": "Септик Эксперт",
    "address": " Ленинский пр-т, д.146, оф.612",
    "phone": "+7 800 555-78-44",
    "email": "info@septik-expert.ru",
    "coords": [55.657408, 37.497656]
  },
  {
    "id": 25,
    "name": "Москва",
    "city": "Rus Septik",
    "address": " Ленинский пр-т, д.146, оф.612",
    "phone": "+7 495 120-14-03",
    "email": "info@rus-septik.ru",
    "coords": [55.947974, 37.852931]
  },
  {
    "id": 26,
    "name": "Москва",
    "city": "Юнис-Парк",
    "address": "",
    "phone": "+7 925 743-42-42",
    "email": "ok@unispark.ru",
    "coords": [55.755864, 37.617698]
  },
  {
    "id": 27,
    "name": "БОРИСОВ",
    "city": "Нижний Новгород",
    "address": "проспект Победы, 14",
    "phone": "+7 904 784-88-68",
    "email": "dmitrii_borisov@list.ru",
    "coords": [56.155658, 44.217216]
  },
  {
    "id": 28,
    "name": "ДЭСТ ЭКО",
    "city": "Нижний Тагил",
    "address": "ЧЕРНОИСТОЧИНСКОЕ ШОССЕ 58А, ОФИС 30",
    "phone": "+7 953 047-35-47",
    "email": "desteko@mail.ru",
    "coords": [57.887038, 59.936844]
  },
  {
    "id": 29,
    "name": "Септик Эксперт",
    "city": "Новосибирск",
    "address": "ул. Писемского, 24/13",
    "phone": "+7 953 775-50-61",
    "email": "septickexpert@yandex.ru",
    "coords": [55.081828, 82.979898]
  },
  {
    "id": 30,
    "name": "Е-Ларец",
    "city": "Петрозаводск",
    "address": "ул. Сулажгорского кирпичного завода д.62",
    "phone": "+7 981 406-08-90",
    "email": "SBf-service@mail.ru",
    "coords": [61.838330, 34.212571]
  },
  {
    "id": 31,
    "name": "KAESYAMBO",
    "city": "Псков",
    "address": "",
    "phone": "+7 905 207-27-56",
    "email": "ksmb-rus@yandex.ru",
    "coords": [58.522857, 31.269816]
  },
  {
    "id": 32,
    "name": "Дубовицкий и Партнеры",
    "city": "Ростов-на-Дону",
    "address": "микрорайон Мясникован, улица Атарбекова, 1",
    "phone": "+7 909 426-54-61",
    "email": "2477079@mail.ru",
    "coords": [47.293242, 39.726394]
  },
  {
    "id": 33,
    "name": "Чистный дон",
    "city": "Ростов-на-Дону",
    "address": "ул. Темерницкая 53, офис 607",
    "phone": "+7 903 401-14-26",
    "email": "septik61@mail.ru",
    "coords": [47.218645, 39.711204]
  },
  {
    "id": 34,
    "name": "Техно Пром Сервис",
    "city": "Рязань",
    "address": "ул. Ситниковская , дом 69А, офис 28",
    "phone": "+7 4912 997-775",
    "email": "tpsrzn@mail.ru",
    "coords": [54.612540, 39.645456]
  },
  {
    "id": 35,
    "name": "Нептун-Пласт",
    "city": "Санкт-Петербург",
    "address": "ул. Караваевская, 23",
    "phone": "+7 812 635-26-26",
    "email": "montazhneptun@yandex.ru",
    "coords": [59.831924, 30.507551]
  },
  {
    "id": 36,
    "name": "ДВ Септ",
    "city": "Санкт-Петербург",
    "address": "",
    "phone": "+7 812 200-40-28",
    "email": "dvsept78@gmail.com",
    "coords": [59.938784, 30.314997]
  },
  {
    "id": 37,
    "name": "НепСтройМонтаж",
    "city": "Санкт-Петербург",
    "address": "",
    "phone": "+7 812 509-89-49",
    "email": "nepstroymontazh@gmail.com",
    "coords": [59.938784, 30.314997]
  },
  {
    "id": 38,
    "name": "Компания «Наш монтаж»",
    "city": "Санкт-Петербург",
    "address": "",
    "phone": "+7 965 780-91-89",
    "email": "nnashmontazh.ru",
    "coords": [59.938784, 30.314997]
  },
  {
    "id": 39,
    "name": "Ecobion»",
    "city": "Санкт-Петербург",
    "address": "Шлиссельбургский просп., 5, корп. 1 БЦ Эврика, 2 эт., офис 61",
    "phone": "+7 812 214-79-11",
    "email": "infoecobion@gmail.com",
    "coords": [59.840849, 30.489683]
  },
  {
    "id": 40,
    "name": "Септик Центр»",
    "city": "Саратов",
    "address": "",
    "phone": "+7 845 265-00-66",
    "email": "info@septik.center",
    "coords": [51.533338, 46.034176]
  },
  {
    "id": 41,
    "name": "Строй Маркет»",
    "city": "Тамбов",
    "address": "г. Тамбов, ул. Волжская, 69",
    "phone": "+7 4752 739-345",
    "email": "stroimarket-tambov@yandex.ru",
    "coords": [52.726979, 41.389131]
  },
  {
    "id": 42,
    "name": "KSV TVER",
    "city": "Тверь",
    "address": "Октябрьский проспект, 70",
    "phone": "+7 952 092-62-12",
    "email": "ksv_tver@mail.ru",
    "coords": [56.814035, 35.876134]
  },
  {
    "id": 43,
    "name": "AQUA PURA",
    "city": "Тула",
    "address": "",
    "phone": "+7 902 903-64-63",
    "email": "aquapura71@ya.ru",
    "coords": [54.193122, 37.617348]
  },
  {
    "id": 44,
    "name": "Юникорн Аква",
    "city": "Уфа",
    "address": "",
    "phone": "+7 999 652-69-62",
    "email": "UnicornAqua@yandex.ru",
    "coords": [54.735152, 55.958736]
  },
  {
    "id": 45,
    "name": "ДВС Хабаровск",
    "city": "Хабаровск",
    "address": "",
    "phone": "+7 996 390-65-90",
    "email": "UnicornAqua@yandex.ru",
    "coords": [48.480229, 135.071917]
  },
  {
    "id": 46,
    "name": "Эко-Че",
    "city": "Чебоксары",
    "address": "",
    "phone": "+7 927 668-69-97",
    "email": "info@ecoche.ru",
    "coords": [56.138028, 47.244832]
  },
  {
    "id": 47,
    "name": "УралСептик",
    "city": "Челябинск",
    "address": "Комсомольский проспект 10/2, 3 этаж, офис 302",
    "phone": "+7 351 700-93-20",
    "email": "uralseptik@mail.ru",
    "coords": [55.192281, 61.374796]
  },
  {
    "id": 48,
    "name": "ЧЕЛСЕПТИК",
    "city": "Челябинск",
    "address": "проспект Ленина, 13А, 2 этаж, офис 7",
    "phone": "+7 351 220-57-40",
    "email": "chelseptik@mail.ru",
    "coords": [55.159408, 61.441118]
  },
  {
    "id": 49,
    "name": "Септик Плюс",
    "city": "Ярославль",
    "address": "",
    "phone": "+7 916 387 71 18",
    "email": "Septikplyus@bk.ru",
    "coords": [57.626559, 39.893813]
  }
];

// Инициализация VK Mini Apps
VK.init();

let map;
let clusterer;
let placemarks = [];

function initMap() {
  ymaps.ready(() => {
    // Средняя точка по России
    map = new ymaps.Map("map", {
      center: [55.75, 37.62],
      zoom: 4,
      controls: ['zoomControl', 'fullscreenControl']
    });

    clusterer = new ymaps.Clusterer({
      preset: 'islands#blueCircleIcon',
      groupByCoordinates: false
    });

    // Заполняем список городов
    const cities = [...new Set(dealers.map(d => d.city))].sort();
    const datalist = document.getElementById('cities');
    cities.forEach(city => {
      const option = document.createElement('option');
      option.value = city;
      datalist.appendChild(option);
    });

    createPlacemarks();

    // Фильтр
    document.getElementById('cityFilter').addEventListener('input', filterByCity);
    document.getElementById('clearFilter').addEventListener('click', () => {
      document.getElementById('cityFilter').value = '';
      filterByCity();
    });
  });
}

function createPlacemarks() {
  if (placemarks.length) {
    clusterer.removeAll();
    placemarks = [];
  }

  dealers.forEach(dealer => {
    const balloonContent = `
      <div style="font-size: 14px; max-width: 250px;">
        <strong>${dealer.name}</strong><br/>
        ${dealer.city}${dealer.address ? ', ' + dealer.address : ''}<br/>
        <a href="tel:${dealer.phone.replace(/\s/g, '')}" style="color: #5181b8;">${dealer.phone}</a><br/>
        ${dealer.email ? `<a href="mailto:${dealer.email}" style="color: #5181b8;">${dealer.email}</a>` : ''}
      </div>
    `;

    const placemark = new ymaps.Placemark(
      dealer.coords,
      { balloonContent },
      { preset: 'islands#blueCircleIcon' }
    );

    placemarks.push(placemark);
  });

  clusterer.add(placemarks);
  map.geoObjects.add(clusterer);
}

function filterByCity() {
  const filterValue = document.getElementById('cityFilter').value.trim().toLowerCase();
  const filtered = filterValue
    ? dealers.filter(d => d.city.toLowerCase().includes(filterValue))
    : dealers;

  clusterer.removeAll();
  const filteredPlacemarks = placemarks.filter(pm => {
    const coords = pm.geometry.getCoordinates();
    return filtered.some(d => d.coords[0] === coords[0] && d.coords[1] === coords[1]);
  });
  clusterer.add(filteredPlacemarks);

  if (filtered.length > 0) {
    const first = filtered[0];
    map.setCenter(first.coords, 10);
  }
}

// Запуск
initMap();
