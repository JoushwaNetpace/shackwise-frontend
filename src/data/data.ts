import { FramImg } from "../config/Images";
import { IPriorityOption, IProperty } from "../types/types";

export const priortiesList: IPriorityOption[] = [
  {
    label: "Affordability",
    placeHolder:
      "What is your price range? How imperative is it that a given home is listed at or below that range?",
  },
  {
    label: "List Price vs Market Value",
    placeHolder:
      "How important is it that the list price is below market value?",
  },
  {
    label: "Location",
    placeHolder:
      "Describe the important aspects of location to you, for example, proximity to work, public transportation, amenities, etc.",
  },
  {
    label: "Kitchen Size",
    placeHolder: "Do you need a large kitchen and what is the ideal size?",
  },
  {
    label: "Kitchen Design",
    placeHolder:
      "What are the ideal traits of your ideal kitchen design and the ideal level of upgrades and updates?",
  },
  {
    label: "Master Bedroom",
    placeHolder: "What are the ideal traits of your master bedroom?",
  },
  {
    label: "Master Bath",
    placeHolder: "What are the ideal traits of your master bathroom?",
  },
  {
    label: "Secondary Bedroom(s)",
    placeHolder:
      "How many secondary bedrooms do you need and what are any ideal traits?",
  },
  {
    label: "Secondary Bath(s)",
    placeHolder:
      "How many secondary baths do you need and what do they need to have, such as a full shower-tub combo, half bath, etc.?",
  },
  {
    label: "Living/Entertaining",
    placeHolder:
      "What are your needs with regard to spaces for your daily living and entertaining guests?",
  },
  {
    label: "Basement",
    placeHolder: "If you need a basement, what does the ideal one look like?",
  },
  {
    label: "Outdoor/Yard Space",
    placeHolder: "What do you want or need in outdoor space, if anything?",
  },
  {
    label: "Parking/Garage",
    placeHolder:
      "What is your ideal parking situation? None needed, outdoor, covered, heated garage?",
  },
  {
    label: "Overall Condition",
    placeHolder:
      "What do you consider the ideal condition? Everything perfect, updates needed, a fixer-upper, etc.?",
  },
];

export const propertyDataList: IProperty[] = [
  {
    _id: "1",
    price: "1,350.00 USD",
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
    price: "950.00 USD",
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
    price: "2,250.00 USD",
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
    price: "1,175.00 USD",
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
