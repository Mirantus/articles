const getYear = date => date.getUTCFullYear();
const getMonth = date => String(date.getUTCMonth() + 1).padStart(2, '0');
const getDay = date => String(date.getUTCDate()).padStart(2, '0');

// format a date to YYYY-MM-DD
module.exports.ymd = date => (
    date instanceof Date
        ? `${getYear(date)}-${getMonth(date)}-${getDay(date)}`
        : ''
);

// format a date to DD.MM.YYYY
module.exports.dmy = date => (
    date instanceof Date
        ? `${getDay(date)}.${getMonth(date)}.${ getYear(date)}`
        : ''
);