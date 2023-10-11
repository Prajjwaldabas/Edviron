import keyImage from "./Assets/images/key.svg";

import squareImage from "./Assets/images/square.svg";
import userImage from "./Assets/images/user.svg";
import walletImage from "./Assets/images/wallet.svg";
import promoteImage from "./Assets/images/promote.svg";
import helpImage from "./Assets/images/help.svg";

export const navList = [
  {
    image: keyImage,
    title: "Dashboard",
  },
  {
    image: squareImage,
    title: "Fee Management",
  },
  {
    image: userImage,
    title: "Students",
  },
  {
    image: walletImage,
    title: "Disbursal",
  },
  {
    image: promoteImage,
    title: "Promote",
  },
  {
    image: helpImage,
    title: "Help",
  },
];

export const collectionInfo = [

    {
title:"Students",
quantity:"1049"
    },

    {
title:"Sections",
quantity:"1049"
    },

    {
title:"Collection this month",
quantity:"₹90.56L"
    },

    {
title:"FIne Collected till date",
quantity:"₹11.20L"
    },
]


export   function formatNumber(num) {
  const lakh = 100000;
  const crore = 10000000;
  const arab = 1000000000;
  const kharab = 100000000000;
  const padma = 10000000000000;
  const neel = 1000000000000000;

  if (num >= neel) {
    return (num / neel).toFixed(2) + " Neel";
  } else if (num >= padma) {
    return (num / padma).toFixed(2) + " Padma";
  } else if (num >= kharab) {
    return (num / kharab).toFixed(2) + " Kharab";
  } else if (num >= arab) {
    return (num / arab).toFixed(2) + " Arab";
  } else if (num >= crore) {
    return (num / crore).toFixed(2) + " Cr";
  } else if (num >= lakh) {
    return (num / lakh).toFixed(2) + " L";
  }
  return num.toFixed(2);
}