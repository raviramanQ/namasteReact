
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";


// const Header = () =>{
//      return(
//           <div className="header">
//                <div className="logo-container">
//                <img 
//                className="logo"
//                src="https://cdn.textstudio.com/output/studio/template/preview/stamped/r/d/f/p/evepfdr.webp"
//                />
//                </div>
//                <div className="nav-items">
//                     <ul>
//                          <li>Home</li>
//                          <li>About Us</li>
//                          <li>Contact Us</li>
//                          <li>Cart</li>
//                     </ul>
//                </div>
//           </div>
//      );
// };

// const styleCard = {
//      backgroundColor: "#f0f0f0",
// }




// const RestaurantCard = (props) => {
//      console.log("=======>>>>",props);
//      return (
// <div className="res-card" >
// <img 
// className="res-logo"
// alt = "res-logo"
//  src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+props.resData.info.cloudinaryImageId}></img>

//      <h3> {props.resData.info.name}</h3>
//      {/* <div className="cuisines-container">

//      <h4> {props.resData.info.cuisines.join(",")}</h4> 
//      </div> */}

//      <h4>{props.resData.info.cuisines.slice(0, 3).join(", ")}</h4>
//             {props.resData.info.cuisines.length > 3 &&
//                 <h4>And more...</h4>
//             }
//      <h4> {props.resData.info.avgRatingString} Stars</h4>
//      <h4> {props.resData.info.sla.slaString}</h4>

      
// </div>
//      );
// };

    // const data_json = 
    // [
    //     {
    //         "info": {
    //             "id": "44439",
    //             "name": "Kanha",
    //             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/10/80ca5dc0-7f83-4330-a52c-ec0eba46fb00_44439.jpg",
    //             "locality": "C Scheme",
    //             "areaName": "C Scheme",
    //             "costForTwo": "₹200 for two",
    //             "cuisines": [
    //                 "Sweets",
    //                 "Fast Food",
    //                 "South Indian",
    //                 "Chinese"
    //             ],
    //             "avgRating": 4.5,
    //             "veg": true,
    //             "parentId": "4650",
    //             "avgRatingString": "4.5",
    //             "totalRatingsString": "10K+",
    //             "sla": {
    //                 "deliveryTime": 31,
    //                 "lastMileTravel": 1.3,
    //                 "serviceability": "SERVICEABLE",
    //                 "slaString": "30-35 mins",
    //                 "lastMileTravelString": "1.3 km",
    //                 "iconType": "ICON_TYPE_EMPTY"
    //             },
    //             "availability": {
    //                 "nextCloseTime": "2024-04-29 22:40:00",
    //                 "opened": true
    //             },
    //             "badges": {
    //                 "imageBadges": [
    //                     {
    //                         "imageId": "Rxawards/_CATEGORY-Mithai.png",
    //                         "description": "Delivery!"
    //                     },
    //                     {
    //                         "imageId": "Rxawards/_CATEGORY-Thali.png",
    //                         "description": "Delivery!"
    //                     },
    //                     {
    //                         "imageId": "v1695133679/badges/Pure_Veg111.png",
    //                         "description": "pureveg"
    //                     }
    //                 ]
    //             },
    //             "isOpen": true,
    //             "type": "F",
    //             "badgesV2": {
    //                 "entityBadges": {
    //                     "imageBased": {
    //                         "badgeObject": [
    //                             {
    //                                 "attributes": {
    //                                     "description": "Delivery!",
    //                                     "imageId": "Rxawards/_CATEGORY-Mithai.png"
    //                                 }
    //                             },
    //                             {
    //                                 "attributes": {
    //                                     "description": "Delivery!",
    //                                     "imageId": "Rxawards/_CATEGORY-Thali.png"
    //                                 }
    //                             },
    //                             {
    //                                 "attributes": {
    //                                     "description": "pureveg",
    //                                     "imageId": "v1695133679/badges/Pure_Veg111.png"
    //                                 }
    //                             }
    //                         ]
    //                     },
    //                     "textBased": {},
    //                     "textExtendedBadges": {}
    //                 }
    //             },
    //             "aggregatedDiscountInfoV3": {
    //                 "header": "₹100 OFF",
    //                 "subHeader": "ABOVE ₹200",
    //                 "discountTag": "GET"
    //             },
    //             "differentiatedUi": {
    //                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //                 "differentiatedUiMediaDetails": {
    //                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //                     "lottie": {},
    //                     "video": {}
    //                 }
    //             },
    //             "reviewsSummary": {},
    //             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //             "restaurantOfferPresentationInfo": {}
    //         },
    //         "analytics": {},
    //         "cta": {
    //             "link": "https://www.swiggy.com/restaurants/kanha-c-scheme-jaipur-44439",
    //             "type": "WEBLINK"
    //         }
    //     },
    //     {
    //         "info": {
    //             "id": "587560",
    //             "name": "Barista Coffee",
    //             "cloudinaryImageId": "b64bf721e12e7b3df82c832898999c51",
    //             "locality": "C Scheme",
    //             "areaName": "C Scheme",
    //             "costForTwo": "₹200 for two",
    //             "cuisines": [
    //                 "Beverages",
    //                 "Snacks",
    //                 "Desserts"
    //             ],
    //             "avgRating": 4.1,
    //             "parentId": "416281",
    //             "avgRatingString": "4.1",
    //             "totalRatingsString": "500+",
    //             "sla": {
    //                 "deliveryTime": 25,
    //                 "lastMileTravel": 0.6,
    //                 "serviceability": "SERVICEABLE",
    //                 "slaString": "25-30 mins",
    //                 "lastMileTravelString": "0.6 km",
    //                 "iconType": "ICON_TYPE_EMPTY"
    //             },
    //             "availability": {
    //                 "nextCloseTime": "2024-04-29 23:59:00",
    //                 "opened": true
    //             },
    //             "badges": {},
    //             "isOpen": true,
    //             "type": "F",
    //             "badgesV2": {
    //                 "entityBadges": {
    //                     "imageBased": {},
    //                     "textBased": {},
    //                     "textExtendedBadges": {}
    //                 }
    //             },
    //             "aggregatedDiscountInfoV3": {
    //                 "header": "₹90 OFF",
    //                 "subHeader": "ABOVE ₹180",
    //                 "discountTag": "GET"
    //             },
    //             "differentiatedUi": {
    //                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //                 "differentiatedUiMediaDetails": {
    //                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //                     "lottie": {},
    //                     "video": {}
    //                 }
    //             },
    //             "reviewsSummary": {},
    //             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //             "restaurantOfferPresentationInfo": {}
    //         },
    //         "analytics": {},
    //         "cta": {
    //             "link": "https://www.swiggy.com/restaurants/barista-coffee-c-scheme-jaipur-587560",
    //             "type": "WEBLINK"
    //         }
    //     },
    //     {
    //         "info": {
    //             "id": "45809",
    //             "name": "Falahaar & Kota Kachori",
    //             "cloudinaryImageId": "3198495edc9215c39d001593cb9d6b10",
    //             "locality": "Trimurti Mall",
    //             "areaName": "C Scheme",
    //             "costForTwo": "₹200 for two",
    //             "cuisines": [
    //                 "Snacks",
    //                 "Indian"
    //             ],
    //             "avgRating": 4.5,
    //             "veg": true,
    //             "parentId": "7019",
    //             "avgRatingString": "4.5",
    //             "totalRatingsString": "10K+",
    //             "sla": {
    //                 "deliveryTime": 22,
    //                 "lastMileTravel": 1.6,
    //                 "serviceability": "SERVICEABLE",
    //                 "slaString": "20-25 mins",
    //                 "lastMileTravelString": "1.6 km",
    //                 "iconType": "ICON_TYPE_EMPTY"
    //             },
    //             "availability": {
    //                 "nextCloseTime": "2024-04-29 21:00:00",
    //                 "opened": true
    //             },
    //             "badges": {
    //                 "imageBadges": [
    //                     {
    //                         "imageId": "Rxawards/_CATEGORY-Kachori.png",
    //                         "description": "Delivery!"
    //                     },
    //                     {
    //                         "imageId": "v1695133679/badges/Pure_Veg111.png",
    //                         "description": "pureveg"
    //                     }
    //                 ]
    //             },
    //             "isOpen": true,
    //             "type": "F",
    //             "badgesV2": {
    //                 "entityBadges": {
    //                     "imageBased": {
    //                         "badgeObject": [
    //                             {
    //                                 "attributes": {
    //                                     "description": "Delivery!",
    //                                     "imageId": "Rxawards/_CATEGORY-Kachori.png"
    //                                 }
    //                             },
    //                             {
    //                                 "attributes": {
    //                                     "description": "pureveg",
    //                                     "imageId": "v1695133679/badges/Pure_Veg111.png"
    //                                 }
    //                             }
    //                         ]
    //                     },
    //                     "textBased": {},
    //                     "textExtendedBadges": {}
    //                 }
    //             },
    //             "aggregatedDiscountInfoV3": {
    //                 "header": "₹50 OFF",
    //                 "subHeader": "ABOVE ₹250",
    //                 "discountTag": "GET"
    //             },
    //             "differentiatedUi": {
    //                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //                 "differentiatedUiMediaDetails": {
    //                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //                     "lottie": {},
    //                     "video": {}
    //                 }
    //             },
    //             "reviewsSummary": {},
    //             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //             "restaurantOfferPresentationInfo": {}
    //         },
    //         "analytics": {},
    //         "cta": {
    //             "link": "https://www.swiggy.com/restaurants/falahaar-and-kota-kachori-trimurti-mall-c-scheme-jaipur-45809",
    //             "type": "WEBLINK"
    //         }
    //     },
    //     {
    //         "info": {
    //             "id": "706724",
    //             "name": "La Pino'z Pizza",
    //             "cloudinaryImageId": "5fe4444a065b60c4fe39ef975222c12b",
    //             "locality": "C Scheme",
    //             "areaName": "Ahinsa Circle",
    //             "costForTwo": "₹400 for two",
    //             "cuisines": [
    //                 "Pizzas",
    //                 "Pastas",
    //                 "Beverages",
    //                 "Fast Food",
    //                 "Italian",
    //                 "Desserts"
    //             ],
    //             "avgRating": 4,
    //             "parentId": "4961",
    //             "avgRatingString": "4.0",
    //             "totalRatingsString": "500+",
    //             "sla": {
    //                 "deliveryTime": 26,
    //                 "lastMileTravel": 1.4,
    //                 "serviceability": "SERVICEABLE",
    //                 "slaString": "25-30 mins",
    //                 "lastMileTravelString": "1.4 km",
    //                 "iconType": "ICON_TYPE_EMPTY"
    //             },
    //             "availability": {
    //                 "nextCloseTime": "2024-04-30 06:00:00",
    //                 "opened": true
    //             },
    //             "badges": {},
    //             "isOpen": true,
    //             "type": "F",
    //             "badgesV2": {
    //                 "entityBadges": {
    //                     "imageBased": {},
    //                     "textBased": {},
    //                     "textExtendedBadges": {}
    //                 }
    //             },
    //             "aggregatedDiscountInfoV3": {
    //                 "header": "₹90 OFF",
    //                 "subHeader": "ABOVE ₹180",
    //                 "discountTag": "GET"
    //             },
    //             "differentiatedUi": {
    //                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //                 "differentiatedUiMediaDetails": {
    //                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //                     "lottie": {},
    //                     "video": {}
    //                 }
    //             },
    //             "reviewsSummary": {},
    //             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //             "restaurantOfferPresentationInfo": {}
    //         },
    //         "analytics": {},
    //         "cta": {
    //             "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-c-scheme-ahinsa-circle-jaipur-706724",
    //             "type": "WEBLINK"
    //         }
    //     },
    //     {
    //         "info": {
    //             "id": "48348",
    //             "name": "The Belgian Waffle Co.",
    //             "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
    //             "locality": "C Scheme",
    //             "areaName": "C Scheme",
    //             "costForTwo": "₹200 for two",
    //             "cuisines": [
    //                 "Waffle",
    //                 "Desserts",
    //                 "Ice Cream",
    //                 "Beverages"
    //             ],
    //             "avgRating": 4.6,
    //             "parentId": "2233",
    //             "avgRatingString": "4.6",
    //             "totalRatingsString": "5K+",
    //             "sla": {
    //                 "deliveryTime": 32,
    //                 "lastMileTravel": 0.4,
    //                 "serviceability": "SERVICEABLE",
    //                 "slaString": "30-35 mins",
    //                 "lastMileTravelString": "0.4 km",
    //                 "iconType": "ICON_TYPE_EMPTY"
    //             },
    //             "availability": {
    //                 "nextCloseTime": "2024-04-30 00:00:00",
    //                 "opened": true
    //             },
    //             "badges": {
    //                 "imageBadges": [
    //                     {
    //                         "imageId": "v1695133679/badges/Pure_Veg111.png",
    //                         "description": "pureveg"
    //                     }
    //                 ]
    //             },
    //             "isOpen": true,
    //             "type": "F",
    //             "badgesV2": {
    //                 "entityBadges": {
    //                     "imageBased": {
    //                         "badgeObject": [
    //                             {
    //                                 "attributes": {
    //                                     "description": "pureveg",
    //                                     "imageId": "v1695133679/badges/Pure_Veg111.png"
    //                                 }
    //                             }
    //                         ]
    //                     },
    //                     "textBased": {},
    //                     "textExtendedBadges": {}
    //                 }
    //             },
    //             "aggregatedDiscountInfoV3": {
    //                 "header": "₹50 OFF",
    //                 "subHeader": "ABOVE ₹250",
    //                 "discountTag": "GET"
    //             },
    //             "differentiatedUi": {
    //                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //                 "differentiatedUiMediaDetails": {
    //                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //                     "lottie": {},
    //                     "video": {}
    //                 }
    //             },
    //             "reviewsSummary": {},
    //             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //             "restaurantOfferPresentationInfo": {}
    //         },
    //         "analytics": {},
    //         "cta": {
    //             "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-c-scheme-jaipur-48348",
    //             "type": "WEBLINK"
    //         }
    //     },
    //     {
    //         "info": {
    //             "id": "45602",
    //             "name": "Domino's Pizza",
    //             "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
    //             "locality": "C Scheme",
    //             "areaName": "C Scheme",
    //             "costForTwo": "₹400 for two",
    //             "cuisines": [
    //                 "Pizzas",
    //                 "Italian",
    //                 "Pastas",
    //                 "Desserts"
    //             ],
    //             "avgRating": 4.4,
    //             "parentId": "2456",
    //             "avgRatingString": "4.4",
    //             "totalRatingsString": "10K+",
    //             "sla": {
    //                 "deliveryTime": 35,
    //                 "lastMileTravel": 1.1,
    //                 "serviceability": "SERVICEABLE",
    //                 "slaString": "35 mins",
    //                 "lastMileTravelString": "1.1 km",
    //                 "iconType": "ICON_TYPE_EMPTY"
    //             },
    //             "availability": {
    //                 "nextCloseTime": "2024-04-30 02:59:00",
    //                 "opened": true
    //             },
    //             "badges": {
    //                 "imageBadges": [
    //                     {
    //                         "imageId": "Rxawards/_CATEGORY-Pizza.png",
    //                         "description": "Delivery!"
    //                     }
    //                 ]
    //             },
    //             "isOpen": true,
    //             "type": "F",
    //             "badgesV2": {
    //                 "entityBadges": {
    //                     "imageBased": {
    //                         "badgeObject": [
    //                             {
    //                                 "attributes": {
    //                                     "description": "Delivery!",
    //                                     "imageId": "Rxawards/_CATEGORY-Pizza.png"
    //                                 }
    //                             }
    //                         ]
    //                     },
    //                     "textBased": {},
    //                     "textExtendedBadges": {}
    //                 }
    //             },
    //             "aggregatedDiscountInfoV3": {
    //                 "header": "₹150 OFF",
    //                 "subHeader": "ABOVE ₹299",
    //                 "discountTag": "FLAT DEAL"
    //             },
    //             "differentiatedUi": {
    //                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //                 "differentiatedUiMediaDetails": {
    //                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //                     "lottie": {},
    //                     "video": {}
    //                 }
    //             },
    //             "reviewsSummary": {},
    //             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //             "restaurantOfferPresentationInfo": {}
    //         },
    //         "analytics": {},
    //         "cta": {
    //             "link": "https://www.swiggy.com/restaurants/dominos-pizza-c-scheme-jaipur-45602",
    //             "type": "WEBLINK"
    //         }
    //     },
    //     {
    //         "info": {
    //             "id": "45977",
    //             "name": "Burger Farm",
    //             "cloudinaryImageId": "nzcyy3dllok64io32kva",
    //             "locality": "Azad Marg",
    //             "areaName": "C Scheme",
    //             "costForTwo": "₹200 for two",
    //             "cuisines": [
    //                 "American",
    //                 "Continental",
    //                 "Italian-American",
    //                 "Snacks",
    //                 "Grill",
    //                 "Beverages",
    //                 "Bakery",
    //                 "Desserts",
    //                 "Barbecue"
    //             ],
    //             "avgRating": 4.5,
    //             "parentId": "4660",
    //             "avgRatingString": "4.5",
    //             "totalRatingsString": "10K+",
    //             "sla": {
    //                 "deliveryTime": 23,
    //                 "lastMileTravel": 1.5,
    //                 "serviceability": "SERVICEABLE",
    //                 "slaString": "20-25 mins",
    //                 "lastMileTravelString": "1.5 km",
    //                 "iconType": "ICON_TYPE_EMPTY"
    //             },
    //             "availability": {
    //                 "nextCloseTime": "2024-04-30 02:00:00",
    //                 "opened": true
    //             },
    //             "badges": {
    //                 "imageBadges": [
    //                     {
    //                         "imageId": "Rxawards/_CATEGORY-Burger.png",
    //                         "description": "Delivery!"
    //                     }
    //                 ]
    //             },
    //             "isOpen": true,
    //             "type": "F",
    //             "badgesV2": {
    //                 "entityBadges": {
    //                     "imageBased": {
    //                         "badgeObject": [
    //                             {
    //                                 "attributes": {
    //                                     "description": "Delivery!",
    //                                     "imageId": "Rxawards/_CATEGORY-Burger.png"
    //                                 }
    //                             }
    //                         ]
    //                     },
    //                     "textBased": {},
    //                     "textExtendedBadges": {}
    //                 }
    //             },
    //             "aggregatedDiscountInfoV3": {
    //                 "header": "₹100 OFF",
    //                 "subHeader": "ABOVE ₹349",
    //                 "discountTag": "FLAT DEAL"
    //             },
    //             "differentiatedUi": {
    //                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //                 "differentiatedUiMediaDetails": {
    //                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //                     "lottie": {},
    //                     "video": {}
    //                 }
    //             },
    //             "reviewsSummary": {},
    //             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //             "restaurantOfferPresentationInfo": {}
    //         },
    //         "analytics": {},
    //         "cta": {
    //             "link": "https://www.swiggy.com/restaurants/burger-farm-azad-marg-c-scheme-jaipur-45977",
    //             "type": "WEBLINK"
    //         }
    //     },
    //     {
    //         "info": {
    //             "id": "45216",
    //             "name": "Subway",
    //             "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
    //             "locality": "C Scheme",
    //             "areaName": "C Scheme",
    //             "costForTwo": "₹200 for two",
    //             "cuisines": [
    //                 "Fast Food",
    //                 "Healthy Food",
    //                 "Salads",
    //                 "Desserts",
    //                 "Beverages",
    //                 "Snacks",
    //                 "Continental",
    //                 "Italian",
    //                 "Italian-American",
    //                 "American"
    //             ],
    //             "avgRating": 4.1,
    //             "parentId": "2",
    //             "avgRatingString": "4.1",
    //             "totalRatingsString": "10K+",
    //             "sla": {
    //                 "deliveryTime": 30,
    //                 "lastMileTravel": 0.9,
    //                 "serviceability": "SERVICEABLE",
    //                 "slaString": "25-30 mins",
    //                 "lastMileTravelString": "0.9 km",
    //                 "iconType": "ICON_TYPE_EMPTY"
    //             },
    //             "availability": {
    //                 "nextCloseTime": "2024-04-30 03:30:00",
    //                 "opened": true
    //             },
    //             "badges": {},
    //             "isOpen": true,
    //             "aggregatedDiscountInfoV2": {},
    //             "type": "F",
    //             "badgesV2": {
    //                 "entityBadges": {
    //                     "imageBased": {},
    //                     "textBased": {},
    //                     "textExtendedBadges": {}
    //                 }
    //             },
    //             "differentiatedUi": {
    //                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //                 "differentiatedUiMediaDetails": {
    //                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //                     "lottie": {},
    //                     "video": {}
    //                 }
    //             },
    //             "reviewsSummary": {},
    //             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //             "restaurantOfferPresentationInfo": {}
    //         },
    //         "analytics": {},
    //         "cta": {
    //             "link": "https://www.swiggy.com/restaurants/subway-c-scheme-jaipur-45216",
    //             "type": "WEBLINK"
    //         }
    //     },
    //     {
    //         "info": {
    //             "id": "70425",
    //             "name": "Apsara Ice Creams",
    //             "cloudinaryImageId": "zorjpribbpfs67j7rfzo",
    //             "locality": "C Scheme",
    //             "areaName": "C Scheme",
    //             "costForTwo": "₹150 for two",
    //             "cuisines": [
    //                 "Ice Cream",
    //                 "Desserts"
    //             ],
    //             "avgRating": 4.7,
    //             "parentId": "35219",
    //             "avgRatingString": "4.7",
    //             "totalRatingsString": "1K+",
    //             "sla": {
    //                 "deliveryTime": 20,
    //                 "lastMileTravel": 0.8,
    //                 "serviceability": "SERVICEABLE",
    //                 "slaString": "20-25 mins",
    //                 "lastMileTravelString": "0.8 km",
    //                 "iconType": "ICON_TYPE_EMPTY"
    //             },
    //             "availability": {
    //                 "nextCloseTime": "2024-04-29 23:30:00",
    //                 "opened": true
    //             },
    //             "badges": {
    //                 "imageBadges": [
    //                     {
    //                         "imageId": "v1695133679/badges/Pure_Veg111.png",
    //                         "description": "pureveg"
    //                     }
    //                 ],
    //                 "textExtendedBadges": [
    //                     {
    //                         "iconId": "guiltfree/GF_Logo_android_3x",
    //                         "shortDescription": "options available",
    //                         "fontColor": "#7E808C"
    //                     }
    //                 ]
    //             },
    //             "isOpen": true,
    //             "type": "F",
    //             "badgesV2": {
    //                 "entityBadges": {
    //                     "imageBased": {
    //                         "badgeObject": [
    //                             {
    //                                 "attributes": {
    //                                     "description": "pureveg",
    //                                     "imageId": "v1695133679/badges/Pure_Veg111.png"
    //                                 }
    //                             }
    //                         ]
    //                     },
    //                     "textBased": {},
    //                     "textExtendedBadges": {
    //                         "badgeObject": [
    //                             {
    //                                 "attributes": {
    //                                     "description": "",
    //                                     "fontColor": "#7E808C",
    //                                     "iconId": "guiltfree/GF_Logo_android_3x",
    //                                     "shortDescription": "options available"
    //                                 }
    //                             }
    //                         ]
    //                     }
    //                 }
    //             },
    //             "aggregatedDiscountInfoV3": {
    //                 "header": "₹90 OFF",
    //                 "subHeader": "ABOVE ₹180",
    //                 "discountTag": "GET"
    //             },
    //             "differentiatedUi": {
    //                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //                 "differentiatedUiMediaDetails": {
    //                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //                     "lottie": {},
    //                     "video": {}
    //                 }
    //             },
    //             "reviewsSummary": {},
    //             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //             "restaurantOfferPresentationInfo": {}
    //         },
    //         "analytics": {},
    //         "cta": {
    //             "link": "https://www.swiggy.com/restaurants/apsara-ice-creams-c-scheme-jaipur-70425",
    //             "type": "WEBLINK"
    //         }
    //     },
    //     {
    //         "info": {
    //             "id": "44501",
    //             "name": "Tan-Sukh By Kanha",
    //             "cloudinaryImageId": "764ed3d5745ede9a507ad38afc80a543",
    //             "locality": "C Scheme",
    //             "areaName": "C Scheme",
    //             "costForTwo": "₹200 for two",
    //             "cuisines": [
    //                 "North Indian",
    //                 "Thalis",
    //                 "Chinese",
    //                 "Mughlai",
    //                 "Chaat",
    //                 "Punjabi",
    //                 "Desserts",
    //                 "Snacks",
    //                 "Rajasthani",
    //                 "Tandoor",
    //                 "Sweets",
    //                 "Indian",
    //                 "Beverages",
    //                 "Ice Cream",
    //                 "Italian",
    //                 "Pastas"
    //             ],
    //             "avgRating": 4.4,
    //             "veg": true,
    //             "parentId": "231081",
    //             "avgRatingString": "4.4",
    //             "totalRatingsString": "5K+",
    //             "sla": {
    //                 "deliveryTime": 32,
    //                 "lastMileTravel": 1.3,
    //                 "serviceability": "SERVICEABLE",
    //                 "slaString": "30-35 mins",
    //                 "lastMileTravelString": "1.3 km",
    //                 "iconType": "ICON_TYPE_EMPTY"
    //             },
    //             "availability": {
    //                 "nextCloseTime": "2024-04-29 22:40:00",
    //                 "opened": true
    //             },
    //             "badges": {
    //                 "imageBadges": [
    //                     {
    //                         "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
    //                         "description": "Delivery!"
    //                     },
    //                     {
    //                         "imageId": "newg.png",
    //                         "description": "Gourmet"
    //                     },
    //                     {
    //                         "imageId": "v1695133679/badges/Pure_Veg111.png",
    //                         "description": "pureveg"
    //                     }
    //                 ]
    //             },
    //             "isOpen": true,
    //             "type": "F",
    //             "badgesV2": {
    //                 "entityBadges": {
    //                     "imageBased": {
    //                         "badgeObject": [
    //                             {
    //                                 "attributes": {
    //                                     "description": "Delivery!",
    //                                     "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
    //                                 }
    //                             },
    //                             {
    //                                 "attributes": {
    //                                     "description": "Gourmet",
    //                                     "imageId": "newg.png"
    //                                 }
    //                             },
    //                             {
    //                                 "attributes": {
    //                                     "description": "pureveg",
    //                                     "imageId": "v1695133679/badges/Pure_Veg111.png"
    //                                 }
    //                             }
    //                         ]
    //                     },
    //                     "textBased": {},
    //                     "textExtendedBadges": {}
    //                 }
    //             },
    //             "aggregatedDiscountInfoV3": {
    //                 "header": "₹125 OFF",
    //                 "subHeader": "ABOVE ₹249",
    //                 "discountTag": "FLAT DEAL"
    //             },
    //             "differentiatedUi": {
    //                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //                 "differentiatedUiMediaDetails": {
    //                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //                     "lottie": {},
    //                     "video": {}
    //                 }
    //             },
    //             "reviewsSummary": {},
    //             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //             "restaurantOfferPresentationInfo": {}
    //         },
    //         "analytics": {},
    //         "cta": {
    //             "link": "https://www.swiggy.com/restaurants/tan-sukh-by-kanha-c-scheme-jaipur-44501",
    //             "type": "WEBLINK"
    //         }
    //     },
    //     {
    //         "info": {
    //             "id": "114514",
    //             "name": "Sagar Ratna",
    //             "cloudinaryImageId": "a6ipc6xi8w3mfs1mgbby",
    //             "locality": "C Scheme",
    //             "areaName": "C Scheme",
    //             "costForTwo": "₹350 for two",
    //             "cuisines": [
    //                 "North Indian",
    //                 "Thalis",
    //                 "Chinese",
    //                 "Mughlai",
    //                 "Chaat",
    //                 "Punjabi",
    //                 "Desserts",
    //                 "Snacks",
    //                 "Rajasthani",
    //                 "Tandoor",
    //                 "Sweets",
    //                 "Indian",
    //                 "Beverages",
    //                 "Ice Cream",
    //                 "Italian",
    //                 "Pastas"
    //             ],
    //             "avgRating": 4.3,
    //             "veg": true,
    //             "parentId": "793",
    //             "avgRatingString": "4.3",
    //             "totalRatingsString": "1K+",
    //             "sla": {
    //                 "deliveryTime": 28,
    //                 "lastMileTravel": 1.1,
    //                 "serviceability": "SERVICEABLE",
    //                 "slaString": "25-30 mins",
    //                 "lastMileTravelString": "1.1 km",
    //                 "iconType": "ICON_TYPE_EMPTY"
    //             },
    //             "availability": {
    //                 "nextCloseTime": "2024-04-29 22:30:00",
    //                 "opened": true
    //             },
    //             "badges": {
    //                 "imageBadges": [
    //                     {
    //                         "imageId": "v1695133679/badges/Pure_Veg111.png",
    //                         "description": "pureveg"
    //                     }
    //                 ]
    //             },
    //             "isOpen": true,
    //             "type": "F",
    //             "badgesV2": {
    //                 "entityBadges": {
    //                     "imageBased": {
    //                         "badgeObject": [
    //                             {
    //                                 "attributes": {
    //                                     "description": "pureveg",
    //                                     "imageId": "v1695133679/badges/Pure_Veg111.png"
    //                                 }
    //                             }
    //                         ]
    //                     },
    //                     "textBased": {},
    //                     "textExtendedBadges": {}
    //                 }
    //             },
    //             "aggregatedDiscountInfoV3": {
    //                 "header": "₹150 OFF",
    //                 "subHeader": "ABOVE ₹349",
    //                 "discountTag": "FLAT DEAL"
    //             },
    //             "differentiatedUi": {
    //                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //                 "differentiatedUiMediaDetails": {
    //                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //                     "lottie": {},
    //                     "video": {}
    //                 }
    //             },
    //             "reviewsSummary": {},
    //             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //             "restaurantOfferPresentationInfo": {}
    //         },
    //         "analytics": {},
    //         "cta": {
    //             "link": "https://www.swiggy.com/restaurants/sagar-ratna-c-scheme-jaipur-114514",
    //             "type": "WEBLINK"
    //         }
    //     },
    //     {
    //         "info": {
    //             "id": "48891",
    //             "name": "Natural Ice Cream",
    //             "cloudinaryImageId": "w7ndo1dkkk6kf4qfz2p1",
    //             "locality": "Suryavanshi Pearl, Show Room No. 2, Sardar Patel Marg",
    //             "areaName": "C Scheme",
    //             "costForTwo": "₹150 for two",
    //             "cuisines": [
    //                 "Ice Cream",
    //                 "Desserts"
    //             ],
    //             "avgRating": 4.8,
    //             "veg": true,
    //             "parentId": "2093",
    //             "avgRatingString": "4.8",
    //             "totalRatingsString": "10K+",
    //             "sla": {
    //                 "deliveryTime": 19,
    //                 "lastMileTravel": 1.4,
    //                 "serviceability": "SERVICEABLE",
    //                 "slaString": "15-20 mins",
    //                 "lastMileTravelString": "1.4 km",
    //                 "iconType": "ICON_TYPE_EMPTY"
    //             },
    //             "availability": {
    //                 "nextCloseTime": "2024-04-29 23:30:00",
    //                 "opened": true
    //             },
    //             "badges": {
    //                 "imageBadges": [
    //                     {
    //                         "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
    //                         "description": "Delivery!"
    //                     },
    //                     {
    //                         "imageId": "v1695133679/badges/Pure_Veg111.png",
    //                         "description": "pureveg"
    //                     }
    //                 ]
    //             },
    //             "isOpen": true,
    //             "type": "F",
    //             "badgesV2": {
    //                 "entityBadges": {
    //                     "imageBased": {
    //                         "badgeObject": [
    //                             {
    //                                 "attributes": {
    //                                     "description": "Delivery!",
    //                                     "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
    //                                 }
    //                             },
    //                             {
    //                                 "attributes": {
    //                                     "description": "pureveg",
    //                                     "imageId": "v1695133679/badges/Pure_Veg111.png"
    //                                 }
    //                             }
    //                         ]
    //                     },
    //                     "textBased": {},
    //                     "textExtendedBadges": {}
    //                 }
    //             },
    //             "aggregatedDiscountInfoV3": {
    //                 "header": "₹90 OFF",
    //                 "subHeader": "ABOVE ₹180",
    //                 "discountTag": "GET"
    //             },
    //             "differentiatedUi": {
    //                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //                 "differentiatedUiMediaDetails": {
    //                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //                     "lottie": {},
    //                     "video": {}
    //                 }
    //             },
    //             "reviewsSummary": {},
    //             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //             "restaurantOfferPresentationInfo": {}
    //         },
    //         "analytics": {},
    //         "cta": {
    //             "link": "https://www.swiggy.com/restaurants/natural-ice-cream-suryavanshi-pearl-show-room-no-2-sardar-patel-marg-c-scheme-jaipur-48891",
    //             "type": "WEBLINK"
    //         }
    //     },
    //     {
    //         "info": {
    //             "id": "44353",
    //             "name": "Molly Moo Ice Creams",
    //             "cloudinaryImageId": "zqyttxzqekxwyuwc6flr",
    //             "locality": "C Scheme",
    //             "areaName": "C Scheme",
    //             "costForTwo": "₹150 for two",
    //             "cuisines": [
    //                 "Desserts",
    //                 "Sweets",
    //                 "Beverages",
    //                 "Ice Cream"
    //             ],
    //             "avgRating": 4.7,
    //             "parentId": "137995",
    //             "avgRatingString": "4.7",
    //             "totalRatingsString": "5K+",
    //             "sla": {
    //                 "deliveryTime": 31,
    //                 "lastMileTravel": 1.1,
    //                 "serviceability": "SERVICEABLE",
    //                 "slaString": "30-35 mins",
    //                 "lastMileTravelString": "1.1 km",
    //                 "iconType": "ICON_TYPE_EMPTY"
    //             },
    //             "availability": {
    //                 "nextCloseTime": "2024-04-29 23:45:00",
    //                 "opened": true
    //             },
    //             "badges": {
    //                 "imageBadges": [
    //                     {
    //                         "imageId": "newg.png",
    //                         "description": "Gourmet"
    //                     }
    //                 ],
    //                 "textExtendedBadges": [
    //                     {
    //                         "iconId": "Ratnesh_Badges/test2.png",
    //                         "shortDescription": "Perfect ice cream delivery",
    //                         "fontColor": "#7E808C"
    //                     }
    //                 ]
    //             },
    //             "isOpen": true,
    //             "type": "F",
    //             "badgesV2": {
    //                 "entityBadges": {
    //                     "imageBased": {
    //                         "badgeObject": [
    //                             {
    //                                 "attributes": {
    //                                     "description": "Gourmet",
    //                                     "imageId": "newg.png"
    //                                 }
    //                             }
    //                         ]
    //                     },
    //                     "textBased": {},
    //                     "textExtendedBadges": {
    //                         "badgeObject": [
    //                             {
    //                                 "attributes": {
    //                                     "description": "",
    //                                     "fontColor": "#7E808C",
    //                                     "iconId": "Ratnesh_Badges/test2.png",
    //                                     "shortDescription": "Perfect ice cream delivery"
    //                                 }
    //                             }
    //                         ]
    //                     }
    //                 }
    //             },
    //             "aggregatedDiscountInfoV3": {
    //                 "header": "₹75 OFF",
    //                 "subHeader": "ABOVE ₹199",
    //                 "discountTag": "FLAT DEAL"
    //             },
    //             "differentiatedUi": {
    //                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //                 "differentiatedUiMediaDetails": {
    //                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //                     "lottie": {},
    //                     "video": {}
    //                 }
    //             },
    //             "reviewsSummary": {},
    //             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //             "restaurantOfferPresentationInfo": {}
    //         },
    //         "analytics": {},
    //         "cta": {
    //             "link": "https://www.swiggy.com/restaurants/molly-moo-ice-creams-c-scheme-jaipur-44353",
    //             "type": "WEBLINK"
    //         }
    //     },
    //     {
    //         "info": {
    //             "id": "63105",
    //             "name": "Little Italy",
    //             "cloudinaryImageId": "83120e45e8c96312526308960997e03f",
    //             "locality": "C Scheme",
    //             "areaName": "C Scheme",
    //             "costForTwo": "₹1200 for two",
    //             "cuisines": [
    //                 "Italian",
    //                 "Pizzas",
    //                 "Pastas",
    //                 "Salads",
    //                 "Desserts"
    //             ],
    //             "avgRating": 4.2,
    //             "parentId": "600",
    //             "avgRatingString": "4.2",
    //             "totalRatingsString": "1K+",
    //             "sla": {
    //                 "deliveryTime": 29,
    //                 "lastMileTravel": 1,
    //                 "serviceability": "SERVICEABLE",
    //                 "slaString": "25-30 mins",
    //                 "lastMileTravelString": "1.0 km",
    //                 "iconType": "ICON_TYPE_EMPTY"
    //             },
    //             "availability": {
    //                 "nextCloseTime": "2024-04-29 23:00:00",
    //                 "opened": true
    //             },
    //             "badges": {
    //                 "imageBadges": [
    //                     {
    //                         "imageId": "newg.png",
    //                         "description": "Gourmet"
    //                     }
    //                 ],
    //                 "textExtendedBadges": [
    //                     {
    //                         "iconId": "guiltfree/GF_Logo_android_3x",
    //                         "shortDescription": "options available",
    //                         "fontColor": "#7E808C"
    //                     }
    //                 ]
    //             },
    //             "isOpen": true,
    //             "type": "F",
    //             "badgesV2": {
    //                 "entityBadges": {
    //                     "imageBased": {
    //                         "badgeObject": [
    //                             {
    //                                 "attributes": {
    //                                     "description": "Gourmet",
    //                                     "imageId": "newg.png"
    //                                 }
    //                             }
    //                         ]
    //                     },
    //                     "textBased": {},
    //                     "textExtendedBadges": {
    //                         "badgeObject": [
    //                             {
    //                                 "attributes": {
    //                                     "description": "",
    //                                     "fontColor": "#7E808C",
    //                                     "iconId": "guiltfree/GF_Logo_android_3x",
    //                                     "shortDescription": "options available"
    //                                 }
    //                             }
    //                         ]
    //                     }
    //                 }
    //             },
    //             "aggregatedDiscountInfoV3": {
    //                 "header": "₹120 OFF",
    //                 "subHeader": "ABOVE ₹200",
    //                 "discountTag": "GET"
    //             },
    //             "differentiatedUi": {
    //                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //                 "differentiatedUiMediaDetails": {
    //                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //                     "lottie": {},
    //                     "video": {}
    //                 }
    //             },
    //             "reviewsSummary": {},
    //             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //             "restaurantOfferPresentationInfo": {}
    //         },
    //         "analytics": {},
    //         "cta": {
    //             "link": "https://www.swiggy.com/restaurants/little-italy-c-scheme-jaipur-63105",
    //             "type": "WEBLINK"
    //         }
    //     },
    //     {
    //         "info": {
    //             "id": "107916",
    //             "name": "Rominus Pizza and Burger",
    //             "cloudinaryImageId": "9ec9ffd900c24ef751e2f34ba3d2fd4b",
    //             "locality": "Tilak Nagar",
    //             "areaName": "Raja Park",
    //             "costForTwo": "₹200 for two",
    //             "cuisines": [
    //                 "Pizzas",
    //                 "Italian-American",
    //                 "American",
    //                 "Barbecue",
    //                 "Snacks",
    //                 "Italian",
    //                 "Pastas",
    //                 "Grill",
    //                 "Sweets",
    //                 "Desserts",
    //                 "Beverages"
    //             ],
    //             "avgRating": 4.4,
    //             "parentId": "8387",
    //             "avgRatingString": "4.4",
    //             "totalRatingsString": "10K+",
    //             "sla": {
    //                 "deliveryTime": 31,
    //                 "lastMileTravel": 2.4,
    //                 "serviceability": "SERVICEABLE",
    //                 "slaString": "30-35 mins",
    //                 "lastMileTravelString": "2.4 km",
    //                 "iconType": "ICON_TYPE_EMPTY"
    //             },
    //             "availability": {
    //                 "nextCloseTime": "2024-04-30 04:00:00",
    //                 "opened": true
    //             },
    //             "badges": {
    //                 "imageBadges": [
    //                     {
    //                         "imageId": "Rxawards/_CATEGORY-Pizza.png",
    //                         "description": "Delivery!"
    //                     }
    //                 ]
    //             },
    //             "isOpen": true,
    //             "type": "F",
    //             "badgesV2": {
    //                 "entityBadges": {
    //                     "imageBased": {
    //                         "badgeObject": [
    //                             {
    //                                 "attributes": {
    //                                     "description": "Delivery!",
    //                                     "imageId": "Rxawards/_CATEGORY-Pizza.png"
    //                                 }
    //                             }
    //                         ]
    //                     },
    //                     "textBased": {},
    //                     "textExtendedBadges": {}
    //                 }
    //             },
    //             "aggregatedDiscountInfoV3": {
    //                 "header": "₹120 OFF",
    //                 "subHeader": "ABOVE ₹200",
    //                 "discountTag": "GET"
    //             },
    //             "differentiatedUi": {
    //                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //                 "differentiatedUiMediaDetails": {
    //                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //                     "lottie": {},
    //                     "video": {}
    //                 }
    //             },
    //             "reviewsSummary": {},
    //             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //             "restaurantOfferPresentationInfo": {}
    //         },
    //         "analytics": {},
    //         "cta": {
    //             "link": "https://www.swiggy.com/restaurants/rominus-pizza-and-burger-tilak-nagar-raja-park-jaipur-107916",
    //             "type": "WEBLINK"
    //         }
    //     },
    //     {
    //         "info": {
    //             "id": "402635",
    //             "name": "Starbucks Coffee",
    //             "cloudinaryImageId": "2418209798927d733a50f5d2ebcc2aee",
    //             "locality": "SP Marg",
    //             "areaName": "C Scheme",
    //             "costForTwo": "₹400 for two",
    //             "cuisines": [
    //                 "Beverages",
    //                 "Cafe",
    //                 "Snacks",
    //                 "Desserts",
    //                 "Bakery",
    //                 "Ice Cream"
    //             ],
    //             "avgRating": 4.4,
    //             "parentId": "195515",
    //             "avgRatingString": "4.4",
    //             "totalRatingsString": "1K+",
    //             "sla": {
    //                 "deliveryTime": 26,
    //                 "lastMileTravel": 1.4,
    //                 "serviceability": "SERVICEABLE",
    //                 "slaString": "25-30 mins",
    //                 "lastMileTravelString": "1.4 km",
    //                 "iconType": "ICON_TYPE_EMPTY"
    //             },
    //             "availability": {
    //                 "nextCloseTime": "2024-04-29 23:00:00",
    //                 "opened": true
    //             },
    //             "badges": {},
    //             "isOpen": true,
    //             "type": "F",
    //             "badgesV2": {
    //                 "entityBadges": {
    //                     "imageBased": {},
    //                     "textBased": {},
    //                     "textExtendedBadges": {}
    //                 }
    //             },
    //             "aggregatedDiscountInfoV3": {
    //                 "header": "₹50 OFF",
    //                 "subHeader": "ABOVE ₹250",
    //                 "discountTag": "GET"
    //             },
    //             "differentiatedUi": {
    //                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //                 "differentiatedUiMediaDetails": {
    //                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //                     "lottie": {},
    //                     "video": {}
    //                 }
    //             },
    //             "reviewsSummary": {},
    //             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //             "restaurantOfferPresentationInfo": {}
    //         },
    //         "analytics": {},
    //         "cta": {
    //             "link": "https://www.swiggy.com/restaurants/starbucks-coffee-sp-marg-c-scheme-jaipur-402635",
    //             "type": "WEBLINK"
    //         }
    //     },
    //     {
    //         "info": {
    //             "id": "181302",
    //             "name": "Akss",
    //             "cloudinaryImageId": "ki8tqmwrehvitnkz7gei",
    //             "locality": "K K Square",
    //             "areaName": "C Scheme",
    //             "costForTwo": "₹250 for two",
    //             "cuisines": [
    //                 "Indian",
    //                 "North Indian",
    //                 "Sweets"
    //             ],
    //             "avgRating": 4.3,
    //             "veg": true,
    //             "parentId": "9983",
    //             "avgRatingString": "4.3",
    //             "totalRatingsString": "50+",
    //             "sla": {
    //                 "deliveryTime": 33,
    //                 "lastMileTravel": 1,
    //                 "serviceability": "SERVICEABLE",
    //                 "slaString": "30-35 mins",
    //                 "lastMileTravelString": "1.0 km",
    //                 "iconType": "ICON_TYPE_EMPTY"
    //             },
    //             "availability": {
    //                 "nextCloseTime": "2024-04-29 23:00:00",
    //                 "opened": true
    //             },
    //             "badges": {
    //                 "imageBadges": [
    //                     {
    //                         "imageId": "newg.png",
    //                         "description": "Gourmet"
    //                     },
    //                     {
    //                         "imageId": "v1695133679/badges/Pure_Veg111.png",
    //                         "description": "pureveg"
    //                     }
    //                 ]
    //             },
    //             "isOpen": true,
    //             "type": "F",
    //             "badgesV2": {
    //                 "entityBadges": {
    //                     "imageBased": {
    //                         "badgeObject": [
    //                             {
    //                                 "attributes": {
    //                                     "description": "Gourmet",
    //                                     "imageId": "newg.png"
    //                                 }
    //                             },
    //                             {
    //                                 "attributes": {
    //                                     "description": "pureveg",
    //                                     "imageId": "v1695133679/badges/Pure_Veg111.png"
    //                                 }
    //                             }
    //                         ]
    //                     },
    //                     "textBased": {},
    //                     "textExtendedBadges": {}
    //                 }
    //             },
    //             "aggregatedDiscountInfoV3": {
    //                 "header": "₹120 OFF",
    //                 "subHeader": "ABOVE ₹600",
    //                 "discountTag": "GET"
    //             },
    //             "differentiatedUi": {
    //                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //                 "differentiatedUiMediaDetails": {
    //                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //                     "lottie": {},
    //                     "video": {}
    //                 }
    //             },
    //             "reviewsSummary": {},
    //             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //             "restaurantOfferPresentationInfo": {}
    //         },
    //         "analytics": {},
    //         "cta": {
    //             "link": "https://www.swiggy.com/restaurants/akss-k-k-square-c-scheme-jaipur-181302",
    //             "type": "WEBLINK"
    //         }
    //     },
    //     {
    //         "info": {
    //             "id": "825804",
    //             "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
    //             "cloudinaryImageId": "5eac04c1f18b2231d62625344659dddc",
    //             "locality": "Lal Kothi",
    //             "areaName": "Lal Kothi",
    //             "costForTwo": "₹200 for two",
    //             "cuisines": [
    //                 "Ice Cream",
    //                 "Desserts",
    //                 "Ice Cream Cakes"
    //             ],
    //             "avgRating": 4.2,
    //             "veg": true,
    //             "parentId": "582",
    //             "avgRatingString": "4.2",
    //             "totalRatingsString": "20+",
    //             "sla": {
    //                 "deliveryTime": 22,
    //                 "lastMileTravel": 1.7,
    //                 "serviceability": "SERVICEABLE",
    //                 "slaString": "20-25 mins",
    //                 "lastMileTravelString": "1.7 km",
    //                 "iconType": "ICON_TYPE_EMPTY"
    //             },
    //             "availability": {
    //                 "nextCloseTime": "2024-04-29 23:00:00",
    //                 "opened": true
    //             },
    //             "badges": {},
    //             "isOpen": true,
    //             "type": "F",
    //             "badgesV2": {
    //                 "entityBadges": {
    //                     "imageBased": {},
    //                     "textBased": {},
    //                     "textExtendedBadges": {}
    //                 }
    //             },
    //             "aggregatedDiscountInfoV3": {
    //                 "header": "₹90 OFF",
    //                 "subHeader": "ABOVE ₹180",
    //                 "discountTag": "GET"
    //             },
    //             "differentiatedUi": {
    //                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //                 "differentiatedUiMediaDetails": {
    //                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //                     "lottie": {},
    //                     "video": {}
    //                 }
    //             },
    //             "reviewsSummary": {},
    //             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //             "isNewlyOnboarded": true,
    //             "restaurantOfferPresentationInfo": {}
    //         },
    //         "analytics": {},
    //         "cta": {
    //             "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-lal-kothi-jaipur-825804",
    //             "type": "WEBLINK"
    //         }
    //     },
    //     {
    //         "info": {
    //             "id": "47214",
    //             "name": "Bake Hut",
    //             "cloudinaryImageId": "rbkg6ag9nsg49j4fq1u5",
    //             "locality": "Mirza Ismail Road",
    //             "areaName": "C Scheme",
    //             "costForTwo": "₹200 for two",
    //             "cuisines": [
    //                 "Bakery",
    //                 "Desserts"
    //             ],
    //             "avgRating": 4.1,
    //             "parentId": "4667",
    //             "avgRatingString": "4.1",
    //             "totalRatingsString": "1K+",
    //             "sla": {
    //                 "deliveryTime": 24,
    //                 "lastMileTravel": 1.5,
    //                 "serviceability": "SERVICEABLE",
    //                 "slaString": "20-25 mins",
    //                 "lastMileTravelString": "1.5 km",
    //                 "iconType": "ICON_TYPE_EMPTY"
    //             },
    //             "availability": {
    //                 "nextCloseTime": "2024-04-29 23:00:00",
    //                 "opened": true
    //             },
    //             "badges": {},
    //             "isOpen": true,
    //             "aggregatedDiscountInfoV2": {},
    //             "type": "F",
    //             "badgesV2": {
    //                 "entityBadges": {
    //                     "imageBased": {},
    //                     "textBased": {},
    //                     "textExtendedBadges": {}
    //                 }
    //             },
    //             "differentiatedUi": {
    //                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //                 "differentiatedUiMediaDetails": {
    //                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //                     "lottie": {},
    //                     "video": {}
    //                 }
    //             },
    //             "reviewsSummary": {},
    //             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //             "restaurantOfferPresentationInfo": {}
    //         },
    //         "analytics": {},
    //         "cta": {
    //             "link": "https://www.swiggy.com/restaurants/bake-hut-mirza-ismail-road-c-scheme-jaipur-47214",
    //             "type": "WEBLINK"
    //         }
    //     },
    //     {
    //         "info": {
    //             "id": "560828",
    //             "name": "GetAWay-Ice Creams & Desserts",
    //             "cloudinaryImageId": "8194c8fed09497bce3714d2586653545",
    //             "locality": "C-Scheme",
    //             "areaName": "Ramesh marg",
    //             "costForTwo": "₹200 for two",
    //             "cuisines": [
    //                 "Ice Cream",
    //                 "Desserts",
    //                 "Healthy Food",
    //                 "Sweets"
    //             ],
    //             "avgRating": 4.5,
    //             "veg": true,
    //             "parentId": "354819",
    //             "avgRatingString": "4.5",
    //             "totalRatingsString": "100+",
    //             "sla": {
    //                 "deliveryTime": 21,
    //                 "lastMileTravel": 1.5,
    //                 "serviceability": "SERVICEABLE",
    //                 "slaString": "20-25 mins",
    //                 "lastMileTravelString": "1.5 km",
    //                 "iconType": "ICON_TYPE_EMPTY"
    //             },
    //             "availability": {
    //                 "nextCloseTime": "2024-04-29 23:45:00",
    //                 "opened": true
    //             },
    //             "badges": {
    //                 "textExtendedBadges": [
    //                     {
    //                         "iconId": "guiltfree/GF_Logo_android_3x",
    //                         "shortDescription": "brand",
    //                         "fontColor": "#7E808C"
    //                     }
    //                 ]
    //             },
    //             "isOpen": true,
    //             "type": "F",
    //             "badgesV2": {
    //                 "entityBadges": {
    //                     "imageBased": {},
    //                     "textBased": {},
    //                     "textExtendedBadges": {
    //                         "badgeObject": [
    //                             {
    //                                 "attributes": {
    //                                     "description": "",
    //                                     "fontColor": "#7E808C",
    //                                     "iconId": "guiltfree/GF_Logo_android_3x",
    //                                     "shortDescription": "brand"
    //                                 }
    //                             }
    //                         ]
    //                     }
    //                 }
    //             },
    //             "aggregatedDiscountInfoV3": {
    //                 "header": "ITEMS",
    //                 "subHeader": "AT ₹69"
    //             },
    //             "differentiatedUi": {
    //                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //                 "differentiatedUiMediaDetails": {
    //                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //                     "lottie": {},
    //                     "video": {}
    //                 }
    //             },
    //             "reviewsSummary": {},
    //             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //             "restaurantOfferPresentationInfo": {}
    //         },
    //         "analytics": {},
    //         "cta": {
    //             "link": "https://www.swiggy.com/restaurants/getaway-ice-creams-and-desserts-c-scheme-ramesh-marg-jaipur-560828",
    //             "type": "WEBLINK"
    //         }
    //     }
    // ]


// const Body = () => {
//      return (
//           <div className="body">
//                <div className="Search">Search</div>
//                <div className="res-container">
                    
//                     {/* <RestaurantCard
//                     resData = {data_json[0]}
//                     /> */}

//                     {
//                        data_json.map((datas)=>(<RestaurantCard key={datas.info.id}  resData={datas}/>))
//                     }
                    

                     
//                </div>
//           </div>
//      );
// };


const AppLayout = () => {

     return (
          <div className ="app">
<Header/>
<Body />
               {/* Header
                   Body
                     Footer */}
          </div>
     );

};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);   // render a function
