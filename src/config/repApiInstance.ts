import realestateapi from "@api/realestateapi";

const realEstateApiKey: any = process.env.REACT_APP_REAL_ESTATE_API_KEY;
const reApiInstance = realestateapi.auth(realEstateApiKey);

export default reApiInstance;
