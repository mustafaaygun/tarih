import moment from 'moment';
moment.locale('tr');

/**
 * Gönderilen tarihin dogrulugunu kontrol eder
 * @param {string, Date}  date - YYYY-MM-DD
 * @returns {boolean}
 */
const isValidDate = (date) => {
    return moment(date).isValid()
}

/**
 * Gönderilen Türkiye tarih tipini momente çevirir
 * @param {string, Date}  date - DD-MM-YYYY
 * @returns {string}
 */
const toTurkishFormat = (date) =>{
    return moment(date,'DD-MM-YYYY')
}

/**
 * Gönderilen tarihe bir gün ekler
 * @param {string, Date}  date - YYYY-MM-DD
 * @param {number} day - Default = 1
 * @returns {moment}
 */
const addDays = (date,day=1) =>{
    return moment(date).add(day,'days');
}

/**
 * Gönderilen tarihden bir gün çıkarır
 * @param {string, Date}  date - YYYY-MM-DD
 * @param {number} day - Default = 1
 * @returns {moment}
 */
const removeDays = (date,day=1) =>{
    return moment(date).subtract(day,'days');
}

/**
 * Gönderilen iki tarihin farkını gün cinsinden alır
 * @param {string, Date}  dateStart - YYYY-MM-DD
 * @param {string, Date}  dateEnd - YYYY-MM-DD
 * @returns {number}
 */
const diffDays = (dateStart,dateEnd) =>{
    return moment(dateStart).diff(moment(dateEnd),'days')
}

/**
 * Gönderilen yıl ve ay içerisinde kaç gün olduğunu döndürür 
 * @param {string} date - YYYY-MM
 * @returns {number}
 */
const daysInMonth = (yearAndMonth)=>{
    return moment(yearAndMonth,"YYYY-MM").daysInMonth();
}

/**
 * Gönderilen iki "tarih" eşit mi kontrol eder
 * @param {string, Date}  dateFirst - YYYY-MM-DD
 * @param {string, Date}  dateSecond - YYYY-MM-DD
 * @returns {boolean}
 */
const isEqualDate = (dateFirst,dateSecond) =>{
    return moment(dateFirst).isSame(dateSecond);
}

/**
 * Gönderilen iki "yıl" eşit mi kontrol eder
 * @param {string, Date}  dateFirst - YYYY-MM-DD
 * @param {string, Date}  dateSecond - YYYY-MM-DD
 */
const isEqualYear = (dateFirst,dateSecond) =>{
    return moment(dateFirst).isSame(dateSecond,'year');
}

/**
 * Gönderilen tarihin gün adını döndürür
 * @param {string, Date}  date - YYYY-MM-DD
 * @returns {string}
 */
const dayName = (date) =>{
    return moment(date).format('dddd');
}

console.log(addDays(new Date())); 

