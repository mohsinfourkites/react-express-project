// // Example usage in a parent component
// import React from "react";
// import PackageCardMohsin from "./PackageCardMohsin";

// const packages = [
//   {
//     slideshowImages: [
//       { src: "/images/slide1.jpg", alt: "Slide 1" },
//       { src: "/images/slide2.jpg", alt: "Slide 2" },
//     ],
//     location: "Wooden Hut, Gulmarg",
//     features: [
//       { src: "/icons/hotel.png", alt: "Hotel", label: "Hotel" },
//       { src: "/icons/bed.png", alt: "Bed", label: "1 Bed" },
//     ],
//     ratings: [
//       { src: "/icons/star.png", alt: "Star" },
//       { src: "/icons/star.png", alt: "Star" },
//     ],
//     ratingValue: 4.9,
//     reviews: 23,
//     description: "Experience the beauty of Gulmarg.",
//     price: "₹5999",
//   },
//   {
//     slideshowImages: [
//       { src: "/images/slide3.jpg", alt: "Slide 3" },
//       { src: "/images/slide4.jpg", alt: "Slide 4" },
//     ],
//     location: "Luxury Stay, Manali",
//     features: [
//       { src: "/icons/bathroom.png", alt: "Bathroom", label: "1 Bath" },
//       { src: "/icons/parking.png", alt: "Parking", label: "Parking" },
//     ],
//     ratings: [
//       { src: "/icons/star.png", alt: "Star" },
//       { src: "/icons/star.png", alt: "Star" },
//     ],
//     ratingValue: 4.7,
//     reviews: 18,
//     description: "Relax in the serene valleys of Manali.",
//     price: "₹6999",
//   },
// ];

// const PackageCardsList = () => {
//   return (
//     <div>
//       {packages.map((pkg, index) => (
//         <PackageCardMohsin key={index} {...pkg} />
//       ))}
//     </div>
//   );
// };

// export default PackageCardsList;
