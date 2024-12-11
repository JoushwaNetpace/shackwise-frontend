import { FramImg, UserPic } from "../config/Images";
import { IPriorityOption, IProperty, IPropertyRating } from "../types/types";
import { getRandomPercentage } from "../utils/commonUtils";

export const priortiesList: IPriorityOption[] = [
  {
    label: "Affordability",
    name: "affordability",
    placeHolder:
      "What is your price range? How imperative is it that a given home is listed at or below that range?",
  },
  {
    label: "List Price vs Market Value",
    name: "listPMarketV",
    placeHolder:
      "How important is it that the list price is below market value?",
  },
  {
    label: "Location",
    name: "location",
    placeHolder:
      "Describe the important aspects of location to you, for example, proximity to work, public transportation, amenities, etc.",
  },
  {
    label: "Kitchen Size",
    name: "kitchenSize",
    placeHolder: "Do you need a large kitchen and what is the ideal size?",
  },
  {
    label: "Kitchen Design",
    name: "kitchenDesign",
    placeHolder:
      "What are the ideal traits of your ideal kitchen design and the ideal level of upgrades and updates?",
  },
  {
    label: "Master Bedroom",
    name: "masterBedroom",
    placeHolder: "What are the ideal traits of your master bedroom?",
  },
  {
    label: "Master Bath",
    name: "masterBathroom",
    placeHolder: "What are the ideal traits of your master bathroom?",
  },
  {
    label: "Secondary Bedroom(s)",
    name: "secondaryBedroom",
    placeHolder:
      "How many secondary bedrooms do you need and what are any ideal traits?",
  },
  {
    label: "Secondary Bath(s)",
    name: "secondaryBathroom",
    placeHolder:
      "How many secondary baths do you need and what do they need to have, such as a full shower-tub combo, half bath, etc.?",
  },
  {
    label: "Living/Entertaining",
    name: "livingEntertainment",
    placeHolder:
      "What are your needs with regard to spaces for your daily living and entertaining guests?",
  },
  {
    label: "Basement",
    name: "basement",
    placeHolder: "If you need a basement, what does the ideal one look like?",
  },
  {
    label: "Outdoor/Yard Space",
    name: "outdoorYardSpace",
    placeHolder: "What do you want or need in outdoor space, if anything?",
  },
  {
    label: "Parking/Garage",
    name: "parkingGarage",
    placeHolder:
      "What is your ideal parking situation? None needed, outdoor, covered, heated garage?",
  },
  {
    label: "Overall Condition",
    name: "overallCondition",
    placeHolder:
      "What do you consider the ideal condition? Everything perfect, updates needed, a fixer-upper, etc.?",
  },
];

export const propertyDataList: IProperty[] = [
  {
    _id: "1",
    price: 1350.0,
    address: "742 Evergreen Terrace, Springfield, IL 62704",
    bedrooms: 4,
    bathrooms: 3,
    sqft_area: 180,
    description:
      "Beautiful family home in a quiet neighborhood with spacious living areas and a well-maintained garden.",
    images: [
      FramImg, // Replace with actual image paths if available
    ],
  },
  {
    _id: "2",
    price: 950.0,
    address: "221B Baker Street, London, NW1 6XE",
    bedrooms: 2,
    bathrooms: 1,
    sqft_area: 120,
    description:
      "Charming flat located in the heart of the city, ideal for professionals. Close to all amenities.",
    images: [
      FramImg, // Replace with actual image paths if available
    ],
  },
  {
    _id: "3",
    price: 2250.0,
    address: "1600 Pennsylvania Ave NW, Washington, DC 20500",
    bedrooms: 5,
    bathrooms: 4,
    sqft_area: 300,
    description:
      "A luxurious estate with a modern interior and spacious outdoor area. Perfect for hosting guests.",
    images: [
      FramImg, // Replace with actual image paths if available
    ],
  },
  {
    _id: "4",
    price: 1175.0,
    address: "10 Downing Street, London, SW1A 2AA",
    bedrooms: 3,
    bathrooms: 2,
    sqft_area: 160,
    description:
      "Cozy townhome with a blend of traditional and modern touches. Recently renovated kitchen and bathrooms.",
    images: [
      FramImg, // Replace with actual image paths if available
    ],
  },
];

export const propertyRatingList: IPropertyRating[] = [
  {
    percentage: getRandomPercentage(),
    userPic: UserPic,
    title: "Affordability",
  },
  {
    percentage: getRandomPercentage(),
    userPic: UserPic,
    title: "List Price vs Market Value",
  },
  { percentage: getRandomPercentage(), userPic: UserPic, title: "Location" },
  {
    percentage: getRandomPercentage(),
    userPic: UserPic,
    title: "Kitchen Size",
  },
  {
    percentage: getRandomPercentage(),
    userPic: UserPic,
    title: "Kitchen Design",
  },
  {
    percentage: getRandomPercentage(),
    userPic: UserPic,
    title: "Master Bedroom",
  },
  { percentage: getRandomPercentage(), userPic: UserPic, title: "Master Bath" },
  {
    percentage: getRandomPercentage(),
    userPic: UserPic,
    title: "Secondary Bedroom(s)",
  },
  {
    percentage: getRandomPercentage(),
    userPic: UserPic,
    title: "Secondary Bath(s)",
  },
  {
    percentage: getRandomPercentage(),
    userPic: UserPic,
    title: "Living/Entertaining",
  },
  { percentage: getRandomPercentage(), userPic: UserPic, title: "Basement" },
  {
    percentage: getRandomPercentage(),
    userPic: UserPic,
    title: "Outdoor/Yard Space",
  },
  {
    percentage: getRandomPercentage(),
    userPic: UserPic,
    title: "Parking/Garage",
  },
  {
    percentage: getRandomPercentage(),
    userPic: UserPic,
    title: "Overall Condition",
  },
];
