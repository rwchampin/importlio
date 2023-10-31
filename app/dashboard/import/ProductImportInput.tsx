"use client";
import { useState, useMemo } from "react";
import { useDropzone } from "react-dropzone";

import Empty from "./Empty";
import Link from "next/link";
import { BsQuestionCircleFill, BsSearch, BsXCircleFill } from "react-icons/bs";

import toast from "react-hot-toast";
import { useInput, Button, Checkbox } from "@nextui-org/react";
import Spinner from "@/app/components/Spinner";
const styles = {
  label: "flex text-black/50 dark:text-white/90 hidden",
  input: [
    "h-input p-2 border-0 outline-none ring-0 shadow-none",
    "focus:bg-transparent focus:border-none focus:outline-none focus:ring-0",
    // "placeholder:text-gray-800",
    "group-hover:placeholder:text-white",
    // "h-input",
  ],
  innerWrapper: ["flex gap-2 justify-around md p-1"],
  inputWrapper: ["main-inner-wrapper bg-input flex", "mt-10"],
};

const s =
  "bg-button text-sm text-white rounded-md flex flex-1 items-center justify-center h-input";

const errors = {
  INVALID_URL: "Please enter a valid URL.",
  DUPLICATE_URL: "This URL is already in the list.",
};

export default function ProductImportInput() {

  const data = [
    {
      title:
        "Fisher-Price Baby Bouncer Rainforest Jumperoo Activity Center with Music Lights Sounds and Developmental Toys",
      url: "/sspa/click?ie=UTF8&spc=MTo2OTY3NTYzNDIxNDQ2NjE6MTY5ODE2OTY4NDpzcF9hdGY6MjAwMDk2ODA0MzcxNDk4OjowOjo&url=%2FFisher-Price-K6070-Rainforest-Jumperoo%2Fdp%2FB000LXQVA4%2Fref%3Dsr_1_1_sspa%3Fkeywords%3Dnew-releases%252Fbaby-products%26qid%3D1698169684%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
      rating: "4.8 out of 5 stars",
      reviews: "20,067",
      price: "$117.33",
      image: "https://m.media-amazon.com/images/I/61862azmaPL._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title:
        "Little Remedies Gas Relief Drops | Natural Berry Flavor | 1 oz. | Pack of 1 | Gently Works in Minutes | Safe for Newborns",
      url: "/Little-Remedies-Relief-Flavor-Newborns/dp/B001B2PU7Y/ref=sr_1_2?keywords=new-releases%2Fbaby-products&qid=1698169684&sr=8-2",
      rating: "4.8 out of 5 stars",
      reviews: "27,040",
      price: "$7.66",
      image: "https://m.media-amazon.com/images/I/71ZqiBKEQcL._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title: "Frida Baby Windi Gas and Colic Reliever for Babies (10 Count)",
      url: "/Windi-Colic-Reliever-Babies-Count/dp/B007RAGALO/ref=sr_1_3?keywords=new-releases%2Fbaby-products&qid=1698169684&sr=8-3",
      rating: "4.5 out of 5 stars",
      reviews: "21,859",
      price: "$12.74",
      image: "https://m.media-amazon.com/images/I/71ij4t1vaGL._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title:
        "Tommee Tippee Closer To Nature Anti-Colic Baby Bottle, 5oz, Slow-Flow Breast-Like Nipple For A Natural Latch, Anti-Colic Valve, Pack Of 4",
      url: "/Tommee-Tippee-Nature-Baby-Anti-Colic-Breast-like/dp/B00K5KVC98/ref=sr_1_4?keywords=new-releases%2Fbaby-products&qid=1698169684&sr=8-4",
      rating: "4.6 out of 5 stars",
      reviews: "10,124",
      price: "$19.90",
      image: "https://m.media-amazon.com/images/I/51S2NspId0L._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title:
        "UnbuckleMe Car Seat Buckle Release Tool - Easy Opener Aid for Arthritis, Long Nails, Older Kids - Button Pusher for Infant, Toddler, Convertible 5 pt Harness car Seats - As Seen on Shark Tank (Lime)",
      url: "/UnbuckleMe-Seat-Buckle-Release-Tool/dp/B0C32QHM3K/ref=sr_1_5?keywords=new-releases%2Fbaby-products&qid=1698169684&sr=8-5",
      rating: "4.6 out of 5 stars",
      reviews: "11,612",
      price: "$14.99",
      image: "https://m.media-amazon.com/images/I/71weKi+5BFL._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title: "Safety 1st Baby Care Basics",
      url: "/Safety-1st-Baby-Care-Basics/dp/B00HZO6ZVC/ref=sr_1_6?keywords=new-releases%2Fbaby-products&qid=1698169684&sr=8-6",
      rating: "4.7 out of 5 stars",
      reviews: "6,089",
      price: "$4.99",
      image: "https://m.media-amazon.com/images/I/41-rQ2Vor3L._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title:
        "2 Pcs Baby Safety Soft Hair Brush Set Infant Comb Grooming Shower Kit New Released",
      url: "/Safety-Infant-Grooming-Shower-Released/dp/B0C2BNY54J/ref=sr_1_7?keywords=new-releases%2Fbaby-products&qid=1698169684&sr=8-7",
      rating: null,
      reviews: null,
      price: "$2.61",
      image: "https://m.media-amazon.com/images/I/31cdwZrF-3L._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title:
        "Boudreaux's Butt Paste Maximum Strength Diaper Rash Cream, Ointment for Baby, 2 oz Tube",
      url: "/Boudreauxs-Butt-Paste-Ointment-Preservative/dp/B004XFUSRI/ref=sr_1_8?keywords=new-releases%2Fbaby-products&qid=1698169684&sr=8-8",
      rating: "4.8 out of 5 stars",
      reviews: "8,199",
      price: "$4.93",
      image: "https://m.media-amazon.com/images/I/71mxwcwb5bL._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title:
        "Burt's Bees Baby Baby Girls' Mittens, No-Scratch Mitts, 100% Organic Cotton, Set of 3",
      url: "/Burts-Bees-Baby-Scratch-Mittens/dp/B072HFXMM7/ref=sr_1_9?keywords=new-releases%2Fbaby-products&qid=1698169684&sr=8-9",
      rating: "4.4 out of 5 stars",
      reviews: "6,345",
      price: "$12.95",
      image: "https://m.media-amazon.com/images/I/81xkoWQfJyL._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title: "Baby najariya Black and Silver Baby Nazariya Set 1",
      url: "/Baby-najariya-Black-Silver-Nazariya/dp/B0BDF8WRWY/ref=sr_1_10?keywords=new-releases%2Fbaby-products&qid=1698169684&sr=8-10",
      rating: null,
      reviews: null,
      price: "$6.03",
      image: "https://m.media-amazon.com/images/I/31+cqIoUhfL._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title:
        "Johnson's Baby Curl Defining Tear-Free Kids' Leave-in Conditioner with Shea Butter, Paraben-, Sulfate- & Dye-Free Formula, Hypoallergenic & Gentle for Toddlers' Hair, 6.8 fl. Oz",
      url: "/Johnsons-Defining-Tear-Free-Conditioner-Hypoallergenic/dp/B07S89SL7D/ref=sr_1_11?keywords=new-releases%2Fbaby-products&qid=1698169684&sr=8-11",
      rating: "4.6 out of 5 stars",
      reviews: "23,050",
      price: "$5.28",
      image: "https://m.media-amazon.com/images/I/71wsHEoW2gL._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title:
        "Cetaphil Baby Daily Lotion with Organic Calendula, NEW 13.5 fl oz, Vitamin E, Sweet Almond & Sunflower Oils, Mineral Oil Free, Paraben Free, Dermatologist Tested, Clinically Proven for Sensitive Skin",
      url: "/Cetaphil-Baby-Calendula-Dermatologist-Clinically/dp/B09JLBDDLD/ref=sr_1_12?keywords=new-releases%2Fbaby-products&qid=1698169684&sr=8-12",
      rating: "4.6 out of 5 stars",
      reviews: "1,633",
      price: "$9.97",
      image: "https://m.media-amazon.com/images/I/618NLOywbGL._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title:
        "5-Pack Organic Burp Cloths for Baby Boys and Girls - Ultra Absorbent Burping Cloth, Burp Clothes, Newborn Towel - Milk Spit Up Rags - Burpy Cloth Bib for Unisex, Boy, Girl - Burp Cloths (Grayscape)",
      url: "/Burp-Cloth-Baby-Milk-Cloths/dp/B07GPG4H93/ref=sr_1_13?keywords=new-releases%2Fbaby-products&qid=1698169684&sr=8-13",
      rating: "4.8 out of 5 stars",
      reviews: "8,043",
      price: "$21.96",
      image: "https://m.media-amazon.com/images/I/81QwbQ+rUNL._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title:
        "Aveeno Baby Daily Moisture Gentle Bath Wash & Shampoo with Natural Oat Extract, Hypoallergenic, Tear-Free & Paraben-Free Formula For Sensitive Hair & Skin, Lightly Scented, 12 fl. oz",
      url: "/Aveeno-Baby-Shampoo-Natural-Tear-Free/dp/B071HF4CL6/ref=sr_1_14?keywords=new-releases%2Fbaby-products&qid=1698169684&sr=8-14",
      rating: "5.0 out of 5 stars",
      reviews: "3",
      price: "$8.79",
      image: "https://m.media-amazon.com/images/I/71aVulPM6vL._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title:
        "Frida Baby Fart Freeing Essentials | Includes Windi and Gassy Belly Rub for Safe, Natural, and Instant Gas and Colic Relief for Infants and Babies",
      url: "/Frida-Baby-Freeing-Essentials-Natural/dp/B0BXV8QBD4/ref=sr_1_15?keywords=new-releases%2Fbaby-products&qid=1698169684&sr=8-15",
      rating: "4.4 out of 5 stars",
      reviews: "175",
      price: "$19.25",
      image: "https://m.media-amazon.com/images/I/71IqO-ha2mL._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title:
        "Frida Baby 4-in-1 Grow-with-Me Bath Tub| Transforms Infant Bathtub to Toddler Bath Seat with Backrest for Assisted Sitting in Tub",
      url: "/Transforms-Bathtub-Toddler-Backrest-Assisted/dp/B099FM4W4H/ref=sr_1_16?keywords=new-releases%2Fbaby-products&qid=1698169684&sr=8-16",
      rating: "4.5 out of 5 stars",
      reviews: "4,771",
      price: "$49.97",
      image: "https://m.media-amazon.com/images/I/711UqAaS+pL._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title: "The Grandparent Gift Frame Wall Decor, Grandsons",
      url: "/sspa/click?ie=UTF8&spc=MTo2OTY3NTYzNDIxNDQ2NjE6MTY5ODE2OTY4NDpzcF9tdGY6MjAwMDU2MTY4ODQ3NDcxOjowOjo&url=%2FGrandparent-Gift-Frame-Decor-Grandsons%2Fdp%2FB00BM71GKI%2Fref%3Dsr_1_17_sspa%3Fkeywords%3Dnew-releases%252Fbaby-products%26qid%3D1698169684%26sr%3D8-17-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
      rating: "4.5 out of 5 stars",
      reviews: "30",
      price: "$29.99",
      image: "https://m.media-amazon.com/images/I/71PWAQ85vML._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title:
        'The Stair Barrier Baby and Pet Gate: Banister to Wall Baby Gate - Safety Gates for Kids or Dogs - Fabric Baby Gate for Stairs with Banisters- 36" - 43" Wide, 32" Height - Made in The USA, New 2019',
      url: "/sspa/click?ie=UTF8&spc=MTo2OTY3NTYzNDIxNDQ2NjE6MTY5ODE2OTY4NDpzcF9tdGY6MjAwMDkzNzgxNjIzMTk4OjowOjo&url=%2FStair-Barrier-Baby-Pet-Gate%2Fdp%2FB07NDMHG7H%2Fref%3Dsr_1_18_sspa%3Fkeywords%3Dnew-releases%252Fbaby-products%26qid%3D1698169684%26sr%3D8-18-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
      rating: "4.2 out of 5 stars",
      reviews: "565",
      price: "$189.99",
      image: "https://m.media-amazon.com/images/I/81uQE84K8cL._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title:
        "Johnson's Baby CottonTouch Newborn Body Wash & Shampoo, Gentle & Tear-Free, Made with Real Cotton, Gently Washes Away Dirt & Germs, Sulfate- & Paraben-Free for Sensitive Skin, 13.6 Fl Oz",
      url: "/Johnsons-CottonTouch-Newborn-Baby-Shampoo/dp/B07DGPHZ6F/ref=sr_1_19?keywords=new-releases%2Fbaby-products&qid=1698169684&sr=8-19",
      rating: "4.8 out of 5 stars",
      reviews: "8,872",
      price: "$6.28",
      image: "https://m.media-amazon.com/images/I/71O7z7Wjo+S._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title:
        "Premium Baby Sheepskin Rug Babycare Nursery Rug 100% Natural Lambskin Blanket Short-Shorn Wool Sleep Pad Medical Sheepskin Hospital Bed Mattress Topper (Ivory White, Single Pelt 2.5ft x 3.5ft)",
      url: "/Premium-Sheepskin-Babycare-Short-Shorn-Underlay/dp/B07D76RFCG/ref=sr_1_20?keywords=new-releases%2Fbaby-products&qid=1698169684&sr=8-20",
      rating: "4.6 out of 5 stars",
      reviews: "14",
      price: "$59.90",
      image: "https://m.media-amazon.com/images/I/61L2togaEKL._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title:
        "Baby Colic, Gas and Upset Stomach Relief, Baby Heated Tummy Wrap, Infant Swaddling Belly Belt with Soothing Warmth (Lion)",
      url: "/Stomach-Relief-Heated-Swaddling-Soothing/dp/B09L4YD3YM/ref=sr_1_21?keywords=new-releases%2Fbaby-products&qid=1698169684&sr=8-21",
      rating: "4.5 out of 5 stars",
      reviews: "1,139",
      price: "$13.98",
      image: "https://m.media-amazon.com/images/I/71Ru7cChgvL._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title:
        "Baby Colic and Gas Relief - Heigoeost Heated Tummy Wrap for Newborns Belly Relief by Soothing Warmth, Baby Heating Pad Swaddling Belt Relief & Soothe Gas, Colic and Upset Stomach for Fussy Infants",
      url: "/Baby-Colic-Gas-Relief-Heigoeost/dp/B0B5H7M9WS/ref=sr_1_22?keywords=new-releases%2Fbaby-products&qid=1698169684&sr=8-22",
      rating: "4.5 out of 5 stars",
      reviews: "690",
      price: "$13.99",
      image: "https://m.media-amazon.com/images/I/71xorIXrYnL._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title:
        "Hooshing 2PCS Kids Baby Safety Seat Belt Adjustable Supermarket Shopping Cart Belt Chair Seat Belts Red",
      url: "/sspa/click?ie=UTF8&spc=MTo2OTY3NTYzNDIxNDQ2NjE6MTY5ODE2OTY4NDpzcF9tdGY6MjAwMDE4MDM5MTcxMTIxOjowOjo&url=%2FHooshing-Safety-Supermarket-Shopping-Strap%2Fdp%2FB07VFB4N3K%2Fref%3Dsr_1_23_sspa%3Fkeywords%3Dnew-releases%252Fbaby-products%26qid%3D1698169684%26sr%3D8-23-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
      rating: "4.3 out of 5 stars",
      reviews: "158",
      price: "$10.99",
      image: "https://m.media-amazon.com/images/I/519TXdI3IOL._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title:
        "Fish Baby Books Toys, Touch and Feel Cloth Soft Crinkle Books for Babies,Toddlers,Infants,Kids Activity Early Education Toy, Shark Tails Teething Toys Teether Ring, Baby Book Octopus, Ocean Sea Animal",
      url: "/sspa/click?ie=UTF8&spc=MTo2OTY3NTYzNDIxNDQ2NjE6MTY5ODE2OTY4NDpzcF9tdGY6MjAwMDIwMDI2Mjg0NTUxOjowOjo&url=%2FActivity-Crinkle-Education-Toddlers-Teething%2Fdp%2FB0838177ZX%2Fref%3Dsr_1_24_sspa%3Fkeywords%3Dnew-releases%252Fbaby-products%26qid%3D1698169684%26sr%3D8-24-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
      rating: "4.8 out of 5 stars",
      reviews: "2,736",
      price: "$15.99",
      image: "https://m.media-amazon.com/images/I/81PLBXgfU+L._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title:
        "Frida Baby Baby Basics Kit|Includes NoseFrida, NailFrida, Windi, DermaFrida + Silicone Carry Case",
      url: "/sspa/click?ie=UTF8&spc=MTo2OTY3NTYzNDIxNDQ2NjE6MTY5ODE2OTY4NDpzcF9tdGY6MjAwMDI0NTMyNDY0NzUxOjowOjo&url=%2FBasics-NoseFrida-NailFrida-DermaFrida-Silicone%2Fdp%2FB07BYLG8R8%2Fref%3Dsr_1_25_sspa%3Fkeywords%3Dnew-releases%252Fbaby-products%26qid%3D1698169684%26sr%3D8-25-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
      rating: "4.8 out of 5 stars",
      reviews: "3,573",
      price: "$39.97",
      image: "https://m.media-amazon.com/images/I/716sf4-1leL._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title:
        "Jasmyn & Greene New Mom Gifts Basket - 9 Luxury Baby Shower Gifts for New Mom to Be. Pregnant Mom Spa Kit Care Package. New Baby Gift Set with Spa Gifts for Women and Newborn Baby Essentials.",
      url: "/sspa/click?ie=UTF8&spc=MTo2OTY3NTYzNDIxNDQ2NjE6MTY5ODE2OTY4NDpzcF9tdGY6MjAwMTcyMTAxOTUyOTk4OjowOjo&url=%2FNew-Mom-Gift-Basket-Essentials%2Fdp%2FB0B2N35QCT%2Fref%3Dsr_1_26_sspa%3Fkeywords%3Dnew-releases%252Fbaby-products%26qid%3D1698169684%26sr%3D8-26-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
      rating: "4.7 out of 5 stars",
      reviews: "204",
      price: "$39.95",
      image: "https://m.media-amazon.com/images/I/815EgAhTZWL._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title:
        "Tommee Tippee Closer to Nature Baby Bottles, Fiesta Collection Slow Flow Breast-Like Nipple with Anti-Colic Valve (9oz, 6 Count)",
      url: "/Tommee-Tippee-Closer-Feeding-Bottles/dp/B00K5KVC52/ref=sr_1_27?keywords=new-releases%2Fbaby-products&qid=1698169684&sr=8-27",
      rating: "4.7 out of 5 stars",
      reviews: "14,460",
      price: "$23.99",
      image: "https://m.media-amazon.com/images/I/61b+QZ1iYwL._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title:
        "20 Count Gas and Colic Reliever for Babies, Baby Gas Colic Passer, Natural Solution for Baby Colic and Gas Relief, Safe & Effective Instant Constipation Relief for Babies\u2026",
      url: "/Reliever-Natural-Solution-Effective-Constipation/dp/B0C2Y7ZG3J/ref=sr_1_28?keywords=new-releases%2Fbaby-products&qid=1698169684&sr=8-28",
      rating: "4.8 out of 5 stars",
      reviews: "8",
      price: "$9.99",
      image: "https://m.media-amazon.com/images/I/61c5bPwXxNL._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title:
        "Johnson's Baby Tear Free Gentle Baby Shampoo, Free of Parabens, Phthalates, Sulfates and Dyes, Yellow, 6.76 Fl Oz",
      url: "/Johnsons-Baby-Parabens-Phthalates-Sulfates/dp/B07DGKWFJK/ref=sr_1_29?keywords=new-releases%2Fbaby-products&qid=1698169684&sr=8-29",
      rating: "4.4 out of 5 stars",
      reviews: "2,838",
      price: "$4.59",
      image: "https://m.media-amazon.com/images/I/71yUdpHXCAL._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title:
        "CeraVe Baby Wash & Shampoo | Fragrance, Paraben, & Sulfate Free Shampoo for Tear-Free Baby Bath Time | 8 Ounce",
      url: "/CeraVe-30187222001-Baby-Wash-Shampoo/dp/B00JF3S29Y/ref=sr_1_30?keywords=new-releases%2Fbaby-products&qid=1698169684&sr=8-30",
      rating: "4.7 out of 5 stars",
      reviews: "8,025",
      price: "$9.42",
      image: "https://m.media-amazon.com/images/I/51TN9MKCOiS._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title:
        "Portable Diaper Changing Pad, Portable Changing pad for Newborn Girl & Boy - Baby Changing Pad with Smart Wipes Pocket \u2013 Waterproof Travel Changing Kit - Baby Gift by Kopi Baby",
      url: "/sspa/click?ie=UTF8&spc=MTo2OTY3NTYzNDIxNDQ2NjE6MTY5ODE2OTY4NDpzcF9tdGY6MjAwMDY2MTk3MDU2Mzk4OjowOjo&url=%2FPortable-Diaper-Changing-Newborn-Girl%2Fdp%2FB07RX5BD32%2Fref%3Dsr_1_31_sspa%3Fkeywords%3Dnew-releases%252Fbaby-products%26qid%3D1698169684%26sr%3D8-31-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
      rating: "4.8 out of 5 stars",
      reviews: "5,675",
      price: "$27.99",
      image: "https://m.media-amazon.com/images/I/91fLS5YlYqL._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title:
        "Amplim Hospital Medical Grade Non Contact Clinical Forehead Thermometer for Baby and Adults, Blue Turquoise",
      url: "/sspa/click?ie=UTF8&spc=MTo2OTY3NTYzNDIxNDQ2NjE6MTY5ODE2OTY4NDpzcF9tdGY6MjAwMTc0ODQwMzMxMjk4OjowOjo&url=%2FAmplim-Non-Contact-Touchless-Thermometer-Temperature%2Fdp%2FB086MBNLF2%2Fref%3Dsr_1_32_sspa%3Fkeywords%3Dnew-releases%252Fbaby-products%26qid%3D1698169684%26sr%3D8-32-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
      rating: "4.5 out of 5 stars",
      reviews: "721",
      price: "$15.11",
      image: "https://m.media-amazon.com/images/I/51O7MxO10aL._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title:
        "Lambs & Ivy Oceania 6-Piece Baby Crib Bedding Set - Blue Ocean, Nautical, Aquatic, Whale, Octopus Theme",
      url: "/sspa/click?ie=UTF8&spc=MTo2OTY3NTYzNDIxNDQ2NjE6MTY5ODE2OTY4NDpzcF9tdGY6MjAwMDI1NTMxODE5MDcxOjowOjo&url=%2FLambs-Ivy-Oceania-6-Piece-Bedding%2Fdp%2FB07BNTBFXX%2Fref%3Dsr_1_33_sspa%3Fkeywords%3Dnew-releases%252Fbaby-products%26qid%3D1698169684%26sr%3D8-33-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1%26smid%3DAOEBAYGPB9FPM",
      rating: "4.9 out of 5 stars",
      reviews: "513",
      price: "$159.99",
      image: "https://m.media-amazon.com/images/I/81p8MGrvRIL._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title:
        "Fleece Baby Bunting Bodysuit \u2013 Infant One Piece Kids Hooded Romper Outerwear Toddler Jacket",
      url: "/sspa/click?ie=UTF8&spc=MTo2OTY3NTYzNDIxNDQ2NjE6MTY5ODE2OTY4NDpzcF9tdGY6MjAwMDgzNTcyMzIzMzMxOjowOjo&url=%2FCuddle-Club-Fleece-Bunting-Bodysuit%2Fdp%2FB087F246VY%2Fref%3Dsr_1_34_sspa%3Fkeywords%3Dnew-releases%252Fbaby-products%26qid%3D1698169684%26sr%3D8-34-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
      rating: "4.7 out of 5 stars",
      reviews: "17,684",
      price: "$29.99",
      image: "https://m.media-amazon.com/images/I/61WuvJJJD7L._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title:
        "Baby Formula Dispenser On The Go, Non-Spill Rotating Four-Compartment Formula Container for Travel, Milk Powder Snack Storage Container for Infant Toddler Travel Outdoor, Green, 2 Pack",
      url: "/Dispenser-Non-Spill-Rotating-Four-Compartment-Container/dp/B0C3QHCX86/ref=sr_1_35?keywords=new-releases%2Fbaby-products&qid=1698169684&sr=8-35",
      rating: "4.6 out of 5 stars",
      reviews: "1,406",
      price: "$8.99",
      image: "https://m.media-amazon.com/images/I/51rokFbtPtL._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title:
        "Bucklebee Easy Car Seat Buckle Release Aid for Children Unbuckle Car Seat Release Tool - Car Seat Button Pusher - Car Seat Opener for Nails - Car Seat Buckle Release Tool Buddy Me (1 Pack Gray)",
      url: "/Bucklebee-Buckle-Release-Children-Unbuckle/dp/B09RX4L9D1/ref=sr_1_36?keywords=new-releases%2Fbaby-products&qid=1698169684&sr=8-36",
      rating: "4.6 out of 5 stars",
      reviews: "2,236",
      price: "$12.75",
      image: "https://m.media-amazon.com/images/I/718xwbLwe8L._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title:
        "To My Husband, Boyfriend, Son, Grandson, Dad, Grandpa, Papa, Daddy, Brother, Man, Stepdad, Uncle, Fiance, Soulmate, Nephew, Godfather Gifts, Elastic Rope Bracelet for Men Teen Boys",
      url: "/Expectant-Bracelet-Pregnancy-Announcement-Christmas/dp/B0C5RF2MQT/ref=sr_1_37?keywords=new-releases%2Fbaby-products&qid=1698169684&sr=8-37",
      rating: "4.6 out of 5 stars",
      reviews: "504",
      price: "$14.99",
      image: "https://m.media-amazon.com/images/I/81VPjQQz9GL._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title:
        "Coconut Baby Oil for Hair & Skin - Organic Moisturizer - All Natural - Massage - Sensitive Skin, Infant Scalp Thick, Dry Hair - with Sunflower & Grape Seed oils - 2 fl oz",
      url: "/Coconut-Baby-Oil-Organic-Moisturizer/dp/B07JH2V3PP/ref=sr_1_38?keywords=new-releases%2Fbaby-products&qid=1698169684&sr=8-38",
      rating: "4.4 out of 5 stars",
      reviews: "4,743",
      price: "$14.99",
      image: "https://m.media-amazon.com/images/I/71ZD7p6DaSL._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title:
        "ezpz Happy Mat (Blue) New Version - 100% Silicone Suction Plate with Built-in Placemat for Toddlers + Preschoolers - Divided Plate - Dishwasher Safe",
      url: "/sspa/click?ie=UTF8&spc=MTo2OTY3NTYzNDIxNDQ2NjE6MTY5ODE2OTY4NDpzcF9tdGY6MjAwMDcxNjYwNTM3MDk4OjowOjo&url=%2Fezpz-Happy-Mat-Blue-Size%2Fdp%2FB010VVTVIY%2Fref%3Dsr_1_39_sspa%3Fkeywords%3Dnew-releases%252Fbaby-products%26qid%3D1698169684%26sr%3D8-39-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1%26smid%3DA2XRFRZ34J5G19",
      rating: "4.6 out of 5 stars",
      reviews: "89",
      price: "$25.99",
      image: "https://m.media-amazon.com/images/I/61lWt+tdrgL._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title:
        "Organic Nipple Cream, Nipple Crack Lanolin Free Nipple Butter, Balm for Breastfeeding Mother, No Need to Wash Off, Safe for Baby and Mama",
      url: "/Nipple-Organic-Lanolin-Breastfeeding-Therapy/dp/B07MWDCQPB/ref=sr_1_40?keywords=new-releases%2Fbaby-products&qid=1698169684&sr=8-40",
      rating: "4.7 out of 5 stars",
      reviews: "4,958",
      price: "$12.95",
      image: "https://m.media-amazon.com/images/I/71hU8LRS0wL._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title:
        "Johnson's Baby Shampoo with Tear-Free Formula, Shampoo for Baby's Delicate Scalp & Skin, Gently Washes Away Dirt & Germs, Paraben-, Phthalate-, Sulfate- & Dye-Free, 20.3 fl. oz",
      url: "/Johnsons-Tear-Free-Baby-Phthalate-Sulfate-Free/dp/B07DGKWFJM/ref=sr_1_41?keywords=new-releases%2Fbaby-products&qid=1698169684&sr=8-41",
      rating: "4.7 out of 5 stars",
      reviews: "743",
      price: "$5.90",
      image: "https://m.media-amazon.com/images/I/71gSCoZkVoL._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title: "Safety 1st, Wide Grip Latches, 14 Count (Pack of 1)",
      url: "/Safety-1st-Pack-Wide-Latches/dp/B00192OI2E/ref=sr_1_42?keywords=new-releases%2Fbaby-products&qid=1698169684&sr=8-42",
      rating: "4.2 out of 5 stars",
      reviews: "3,588",
      price: "$3.98",
      image: "https://m.media-amazon.com/images/I/81ks6+beiHL._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title:
        "Baby Dove Sensitive Skin Care Baby Wash For Baby Bath Time Fragrance Free Moisture Fragrance Free and Hypoallergenic, Washes Away Bacteria 20 oz",
      url: "/Baby-Dove-Wash-Sensitive-Moisture/dp/B06X3SD4VC/ref=sr_1_43?keywords=new-releases%2Fbaby-products&qid=1698169684&sr=8-43",
      rating: "4.8 out of 5 stars",
      reviews: "11,447",
      price: "$8.60",
      image: "https://m.media-amazon.com/images/I/61O6aquKKNL._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title:
        "modern-twist Bucket Bib 100% plastic free silicone, waterproof, adjustable, dishwasher safe, Green Foxes",
      url: "/MODERN-TWIST-Bucket-Bib-Foxes-Lime-Green/dp/B01CL9GIA8/ref=sr_1_44?keywords=new-releases%2Fbaby-products&qid=1698169684&sr=8-44",
      rating: "4.5 out of 5 stars",
      reviews: "532",
      price: "$9.90",
      image: "https://m.media-amazon.com/images/I/81oEsAmehpL._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title:
        "10 Pack Furniture Anchors for Baby Proofing, Anti-Tip Wall Anchors Straps for Furniture Protect Toddler Children and Pet from Falling Furniture Cabinet Bookshelf Dresser, Earthquake Proof",
      url: "/Furniture-Proofing-Anti-Tip-Bookshelf-Earthquake/dp/B0C1C3H68Y/ref=sr_1_45?keywords=new-releases%2Fbaby-products&qid=1698169684&sr=8-45",
      rating: "4.8 out of 5 stars",
      reviews: "22",
      price: "$7.29",
      image: "https://m.media-amazon.com/images/I/61h8fJGK2kL._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title:
        "GROWNSY Gas and Colic Reliever for Babies, 12pcs Natural Baby Colic and Gas Relief, Colic Relief for Newborns, Infant Gas Colic Relievers",
      url: "/GROWNSY-Reliever-Natural-Newborns-Relievers/dp/B0C4GKKM1F/ref=sr_1_46?keywords=new-releases%2Fbaby-products&qid=1698169684&sr=8-46",
      rating: "4.5 out of 5 stars",
      reviews: "99",
      price: "$9.99",
      image: "https://m.media-amazon.com/images/I/61mKCGJpq6L._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title:
        "4Pcs Universal Baby Gate Threaded Spindle Rod, M8 (8mm) Replacement Bolt Part for Baby & Pet Pressure Mounted Safety Gates, Extra Long Baby Tension Gate Extender (Black)",
      url: "/Threaded-Spindle-Replacement-Pressure-Extender/dp/B09BMZHFX1/ref=sr_1_47?keywords=new-releases%2Fbaby-products&qid=1698169684&sr=8-47",
      rating: "4.7 out of 5 stars",
      reviews: "1,563",
      price: "$7.99",
      image: "https://m.media-amazon.com/images/I/61MsdrsU-lL._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title:
        "CeraVe Baby Lotion | Gentle Baby Skin Care with Ceramides, Niacinamide & Vitamin E | Fragrance, Paraben, Dye & Phthalates Free | Lightweight Baby Moisturizer | 8 Ounce | Packaging May Vary",
      url: "/CeraVe-Essential-Ceramides-Protecting-Maintaining/dp/B00JF3RYPM/ref=sr_1_48?keywords=new-releases%2Fbaby-products&qid=1698169684&sr=8-48",
      rating: "4.7 out of 5 stars",
      reviews: "9,219",
      price: "$8.97",
      image: "https://m.media-amazon.com/images/I/617Amokf7sL._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title:
        "Burt's Bees Mama Belly Butter Skin Care, Pregnancy Lotion & Stretch Mark Cream, with Shea Butter and Vitamin E, 99% Natural, 6.5 Ounce",
      url: "/Burts-Bees-Butter-Butter-Vitamin/dp/B00DM14TYC/ref=sr_1_49?keywords=new-releases%2Fbaby-products&qid=1698169684&sr=8-49",
      rating: "4.6 out of 5 stars",
      reviews: "29,894",
      price: "$10.99",
      image: "https://m.media-amazon.com/images/I/81n0b-GkvCL._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title:
        "Boon NURSH Reusable Silicone Baby Bottles with Collapsible Silicone Pouch Design \u2014 Everyday Baby Essentials \u2014 3 Count \u2014 Stage 2 Medium Flow \u2014 8 Oz \u2014 Gray",
      url: "/Boon-NURSH-Silicone-Pouch-Bottle/dp/B07BL7ZXW9/ref=sr_1_50?keywords=new-releases%2Fbaby-products&qid=1698169684&sr=8-50",
      rating: "4.7 out of 5 stars",
      reviews: "18,926",
      price: "$22.99",
      image: "https://m.media-amazon.com/images/I/71-wvAd+Y4L._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title:
        "Dr. Talbot's Nasal Aspirator for Babies - BPA-Free Silicone - with Storage Case - Blue Elephant",
      url: "/Dr-Talbots-Nasal-Aspirator-Babies/dp/B0BSVG8RGR/ref=sr_1_51?keywords=new-releases%2Fbaby-products&qid=1698169684&sr=8-51",
      rating: "4.5 out of 5 stars",
      reviews: "330",
      price: "$7.99",
      image: "https://m.media-amazon.com/images/I/61dl5HPJjZL._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title:
        "Airship Pregnancy Gift Box - Pregnancy Must Haves for Expecting Moms - Essentials Kit with Bath Bomb, 12\u201d Water Bottle, 12 Stickers, Countdown Time Clock, Journal Book - Self Care Baby Shower Gifts",
      url: "/Airship-Pregnancy-Gift-Box-Essentials/dp/B0BDSHK8JH/ref=sr_1_52?keywords=new-releases%2Fbaby-products&qid=1698169684&sr=8-52",
      rating: "3.5 out of 5 stars",
      reviews: "15",
      price: "$29.99",
      image: "https://m.media-amazon.com/images/I/71stYZlE3WL._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title:
        "Johnson's Baby CottonTouch Newborn Baby Face and Body Lotion, Hypoallergenic Moisturization for Baby's Skin, Made with Real Cotton, Paraben-Free, Dye-Free, 13.6 fl. oz",
      url: "/Johnsons-CottonTouch-Newborn-Baby-Lotion/dp/B07DGK9DSK/ref=sr_1_53?keywords=new-releases%2Fbaby-products&qid=1698169684&sr=8-53",
      rating: "4.7 out of 5 stars",
      reviews: "810",
      price: "$6.28",
      image: "https://m.media-amazon.com/images/I/71+Wu-Q51qL._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title:
        "Baby Teething Toys, 3 PCS Teethers Set for 0-6, 3-6 Months & 6-12 Months, Baby Essentials, Infant Toys, Baby Chew Toys Set Food Grade Silicone, Bear Shape Teething Toy Fruit Shape Teether Set",
      url: "/Teething-Teethers-Essentials-Silicone-Teether/dp/B0BW436GF6/ref=sr_1_54?keywords=new-releases%2Fbaby-products&qid=1698169684&sr=8-54",
      rating: "4.6 out of 5 stars",
      reviews: "145",
      price: "$7.99",
      image: "https://m.media-amazon.com/images/I/61x3FFvrFzL._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title:
        "Lansinoh Breastfeeding Starter Set for Nursing Mothers, Breastfeeding Gift for Baby Showers and New Moms, Contains Nursing Essentials and Breast Therapy",
      url: "/Lansinoh-Breastfeeding-Starter-Contains-Essentials/dp/B00PK3WFJ6/ref=sr_1_55?keywords=new-releases%2Fbaby-products&qid=1698169684&sr=8-55",
      rating: "4.7 out of 5 stars",
      reviews: "5,162",
      price: "$25.32",
      image: "https://m.media-amazon.com/images/I/71VUh7lzA-L._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title:
        "Earth Baby Aromatherapy Calming Mist+, Hypoallergenic for Sensitive Skin, Natural and Organic, For Babies Toddlers and Kids, 2.0 Fl Oz",
      url: "/Earth-Baby-Organics-Mommy-Refreshing/dp/B001JQBVPW/ref=sr_1_56?keywords=new-releases%2Fbaby-products&qid=1698169684&sr=8-56",
      rating: "4.2 out of 5 stars",
      reviews: "222",
      price: "$6.00",
      image: "https://m.media-amazon.com/images/I/41vdH2i4CGL._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title:
        "Toy Straps for Baby - 3 Pack Toy Straps for Stroller - Silicone Adjustable Toy Holder for Stroller - Pacifier Holder, Sippy Cup Straps - Baby Toy Holder Straps for Teether Toys, Bottle - BPA Free",
      url: "/Toy-Straps-Baby-Stroller-Adjustable/dp/B0BWRCYH7B/ref=sr_1_57?keywords=new-releases%2Fbaby-products&qid=1698169684&sr=8-57",
      rating: "4.6 out of 5 stars",
      reviews: "612",
      price: "$7.99",
      image: "https://m.media-amazon.com/images/I/61+o+cLxdFL._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title:
        "2 Pieces Baby Carseat Head Support Band Strap Headrest Stroller Seat Sleeping Headrest Neck Relief Head Strap Headband for Kids Children Toddler Infant (Dinosaur and Bear)",
      url: "/Headrest-Stroller-Sleeping-Headband-Children/dp/B09B2CVYQH/ref=sr_1_58?keywords=new-releases%2Fbaby-products&qid=1698169684&sr=8-58",
      rating: "4.0 out of 5 stars",
      reviews: "1,261",
      price: "$5.99",
      image: "https://m.media-amazon.com/images/I/71hK-dXn-4L._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title:
        "First Fathers Day Keychain Gifts, New Daddy to be Gifts for Men, New Expecting Dad First Time Father's Day, New Daddy Mommy to be Pregnancy Baby Announcement Gifts for Him Husband Soon to be Daddy",
      url: "/Fathers-Keychain-Expecting-Pregnancy-Announcement/dp/B0C5382CJ6/ref=sr_1_59?keywords=new-releases%2Fbaby-products&qid=1698169684&sr=8-59",
      rating: "5.0 out of 5 stars",
      reviews: "2",
      price: "$7.99",
      image: "https://m.media-amazon.com/images/I/61A-a8Bnp3L._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
    {
      title:
        "RaZbaby RaZbuddy JollyPop Pacifier Holder w/Removable Baby Pacifier - 0m+ - BPA Free (Bear)",
      url: "/RaZbaby-RaZbuddy-JollyPop-Pacifier-Removable/dp/B0CJD81LMM/ref=sr_1_60?keywords=new-releases%2Fbaby-products&qid=1698169684&sr=8-60",
      rating: "4.6 out of 5 stars",
      reviews: "17,848",
      price: "$13.95",
      image: "https://m.media-amazon.com/images/I/71xu-mi8h0L._AC_UL320_.jpg",
      search_url: "https://www.amazon.com/s?k=new-releases/baby-products",
    },
  ];

  const [inputState, setInputState] = useState<any>({
    loading: false,
    value: "https://www.amazon.com/gp/new-releases/?ref_=nav_cs_newreleases",
    errors: [],
    urls: [],
    scrapeAttempts: 0,
    results: [],
  });
  const dropzone = useDropzone({
    noClick: true,
  });
  const open = dropzone.open;
  const getRootDropProps = dropzone.getRootProps;
  const getDropProps = dropzone.getInputProps;

 


  const setErrors = (error: any) => {
    if (inputState.errors.indexOf(error) === -1) {
      setInputState({ ...inputState, errors: [...inputState.errors, error] });
    }
  };

  const setValue = (value: any) => {
    // if no value is passed, clear the input and errors
    if (!value) {
      setInputState({ ...inputState, value: "", errors: [] });
      return;
    }
    setInputState({ ...inputState, value });
  };

  const setUrls = (url: any) => {
    if (inputState.urls.indexOf(url) === -1) {
      setInputState({ ...inputState, urls: [...inputState.urls, url] });
    }
  };

  const validateInputValue = (value: any) => {
    // Use a regular expression to validate URLs
    const urlRegex =
      /^(https?:\/\/)?([a-zA-Z0-9.-]+(\.[a-zA-Z]{2,})+)(\/\S*)?$/;
    return urlRegex.test(value);
  };

  // const handleInputChange = (val:string) => {debugger
  //   // if (e.key === "Enter" || e.key === ",") {
  //   //   return
  //   // }
  //   if(val.length === 0) {
  //     setInputState({ ...inputState, errors: [] });
  //   }
  //   setValue(val);
  // };

  const handleInputKeyDown = (e: any) => {
    debugger;
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();

      const value = e.target.value;
      const trimmedValue: any = value.trim();

      if (trimmedValue) {
        // Check if the input is a valid URL
        if (validateInputValue(trimmedValue)) {
          setInputState({
            ...inputState,
            urls: [...inputState.urls, trimmedValue],
            value: trimmedValue,
            errors: [],
          });
        } else {
          setErrors(errors.INVALID_URL);
        }
      }
    } else {
      if (inputState.value.length === 0) {
        setInputState({ ...inputState, errors: [], value: "" });
      } else {
        setValue(e.target.value);
      }
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setInputState({ ...inputState, loading: true });

     const value = inputState.value || e.target.value;

    // Check if the input is a valid URL
    if (validateInputValue(value)) {
      setErrors(errors.INVALID_URL);
      toast.error("Please enter a valid url");
      return;
    }

    // send url to server to scrape
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/scrape/get-data/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
         url: "https://www.amazon.com/gp/new-releases/?ref_=nav_cs_newreleases"
      }),
    });

    debugger;
    const data = await response.json();
    debugger;
    if (data.errors) {
      setInputState({ ...inputState, errors: data.errors, loading: false });
      return;
    }

    debugger
    // const value = e.target.value;
    // const isValidUrl = validateInputValue(value);

    // if (!isValidUrl) {
    //   setErrors(["Please enter a valid url"]);
    //   return;
    // }

    // if (isValidUrl && value.length > 0) {
    //   setErrors([]);

    // }
    // return false;
  };

  const {
    Component,
    label,
    domRef,
    description,
    isClearable,
    startContent,
    endContent,
    shouldLabelBeOutside,
    shouldLabelBeInside,
    errorMessage,
    getBaseProps,
    getLabelProps,
    getInputProps,
    getInnerWrapperProps,
    getInputWrapperProps,
    getDescriptionProps,
    getErrorMessageProps,
    getClearButtonProps,
  }: any = useInput<any>({
    // this is just for the example, the props bellow should be passed by the parent component
    label: "Search",
    type: "search",
    placeholder: "Enter product sources",
    // onValueChange: handleInputChange,
    onClear: () => {
      setErrors([]);
      setValue([]);
    },
    isClearable: true,
    isRequired: true,
    size: "lg",
    variant: "bordered",
    startContent: (
      <BsSearch className="text-black/70  pointer-events-none flex-shrink-0 h-5 w-5" />
    ),
    endContent: (
      <BsXCircleFill className="text-black/70  pointer-events-none flex-shrink-0 h-5 w-5" />
    ),
    // custom styles
    classNames: {
      ...styles,
    },
  });

  const labelContent = <label {...getLabelProps()}>{label}</label>;

  const end = useMemo(() => {
    if (isClearable) {
      return (
        <span {...getClearButtonProps()}>
          {endContent || <BsXCircleFill />}
        </span>
      );
    }

    return endContent;
  }, [isClearable, getClearButtonProps]);

  const innerWrapper = useMemo(() => {
    // if (startContent || end) {
    return (
      <div {...getInnerWrapperProps()}>
        {startContent}
        <input {...getInputProps()} onKeyUp={handleInputKeyDown} />

        {end}
      </div>
    );
    // }
  }, [startContent, end, getInputProps, getInnerWrapperProps]);


  const handleAdd = () => {
    setInputState({
      ...inputState,
      results: [],
    })

    toast.success("Products added to Shopify successfully!")
  }
  if (inputState.loading) {
    return <Spinner lg />;
  }

  return (
    <div
      {...getRootDropProps()}
      className={`flex flex-col gap-3 w-full ${
        inputState.errors.length > 0 ? "error" : ""
      }`}
    >
      {inputState.results.length === 0 && (
      <form className="flex flex-col w-full" onSubmit={handleSubmit}>
        <label className="flex pb-2">
          Enter any Amazon product url(s) or choose a file of product urls.
          <BsQuestionCircleFill />
        </label>

        <div className="flex gap-2">
          <Component {...getBaseProps()}>
            {shouldLabelBeOutside ? labelContent : null}
            <div
              {...getInputWrapperProps()}
              role="button"
              onClick={() => {
                domRef.current?.focus();
              }}
            >
              {shouldLabelBeInside ? labelContent : null}
              {innerWrapper}
            </div>

            {description && <div {...getDescriptionProps()}>{description}</div>}
            {errorMessage && (
              <div {...getErrorMessageProps()}>{errorMessage}</div>
            )}
          </Component>
          <Button
            className="bg-button text-sm text-white rounded-lg flex w-full md:max-w-[150px] h-full items-center justify-center"
            onClick={() => {
              open();
            }}
          >
            Upload File
          </Button>
        </div>
        {inputState.errors.length > 0 && (
          <div className="flex flex-col gap-3 w-full">
            {inputState.errors.map((error: any, i: any) => (
              <div key={i} className="text-red-500">
                {error}
              </div>
            ))}
          </div>
        )}
        {/* {errors.length === 0 && (
          <div className="flex flex-col gap-3 w-full">
            {instructions}
          </div>
        )} */}
      </form>
      )}

      {inputState.results.length === 0 &&
        inputState.urls.length > 0 &&
        inputState.urls.map((url: any, i: any) => (
          <div
            key={i}
            className="p-5 mb-5 w-full h-full bg-offwhite shadow-xl rounded-xl flex flex-col items-center justify-start gap-5"
          >
            {url}
          </div>
        ))}

      {inputState.results.length === 0 && <Empty />}
      {inputState.results.length > 0 && (
        <>
          <Link
            href="#"
            onClick={handleAdd}
            className="bg-success-500 rounded-xl flex text-center items-center justify-center  text-white h-input max-w-[250px]"
          >
            Bulk Import Products to Shopify
          </Link>
          <table className="min-w-full divide-y divide-gray-300">
        
  <tbody className="divide-y divide-gray-200 bg-white">
    {inputState.results.map((result: any, i: any) => {
      return (
        <tr key={i}>
          <td className="whitespace-nowrap p-3 text-sm flex items-center justify-center">
            <Checkbox />
          </td>
          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
            <div className="flex items-center">
              <div className="h-10 w-10 flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src={result.image}
                  alt=""
                />
              </div>
              <div className="ml-4 flex flex-col">
                <div className="font-lg text-gray-900">{result.title}</div>
                <div className="text-gray-500">{result.price}</div>
              </div>
            </div>
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {result.reviews} 
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {result.rating}
          </td>
        </tr>
      );
    })}
  </tbody>
</table>

        </>
      )}
    </div>
  );
}
