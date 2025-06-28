const URL = "https://openholidaysapi.org/PublicHolidays";

const getHolidays = async (countryCode) => {
    const res = await fetch(`${URL}?countryIsoCode=${countryCode}&validFrom=2025-01-01&validTo=2025-12-31&languageIsoCode=EN`)
    const data = await res.json();
    console.log("APi", data);
    
    return data;
}
export {getHolidays}