import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(1),
    title: "Cargo",
    description: "",
    price: "1400",
    category: "Men",
    original_price: "1700",
    discount: "10",
    image: "https://assets.ajio.com/medias/sys_master/root/20210316/4vX7/6050ccfef997dd5c4013b7ab/-473Wx593H-460259760-blue-MARKETING.jpg",
    rating: {
      rate: "3",
      count: "10"
    }
  },
  {
    _id: uuid(2),
    title: "Striped Shirt",
    description: "",
    price: "1600",
    category: "Men",
    original_price: "1700",
    discount: "10",
    image: "https://assets.ajio.com/medias/sys_master/root/20211023/dEWu/61730697aeb2690110a3a43d/-473Wx593H-460453610-white-MODEL.jpg",
    rating: {
      rate: "4.5",
      count: "5"
    }
  },
  {
    _id: uuid(3),
    title: "Checked Shirt ",
    description: "",
    price: "2400",
    category: "Men",
    original_price: "2800",
    discount: "10",
    image: "https://assets.ajio.com/medias/sys_master/root/20210315/rcPG/604f2340aeb26969818602e0/-473Wx593H-462122101-grey-MODEL6.jpg",
    rating: {
      rate: "4.3",
      count: "10"
    }
  },
  {
    _id: uuid(4),
    title: "Slim Fit Jeans",
    description: "",
    price: "2400",
    category: "Men",
    original_price: "3800",
    discount: "10",
    image: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/5670018/2018/9/17/5d578199-2c1a-4001-8af6-570311ff43eb1537164174593-Roadster-Men-Blue-Skinny-Fit-Mid-Rise-Mildly-Distressed-Stre-1.jpg",
    rating: {
      rate: "4.3",
      count: "10"
    }
  },
  {
    _id: uuid(5),
    title: "Cotten T-Shirt",
    description: "",
    price: "700",
    category: "Men",
    original_price: "800",
    discount: "10",
    image: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/2475729/2018/4/30/11525066892165-Roadster-Men-Black-Printed-Round-Neck-T-shirt-4741525066891941-1.jpg",
    rating: {
      rate: "2.3",
      count: "10"
    }
  },
  {
    _id: uuid(6),
    title: "Knee Length Dress",
    description: "",
    price: "2700",
    category: "Women",
    original_price: "3800",
    discount: "10",
    image: "https://assets.ajio.com/medias/sys_master/root/20210404/YFbg/606a804c7cdb8c1f1499ba18/aks_rust_checked_knee_length_dress.jpg",
    rating: {
      rate: "4.3",
      count: "10"
    }
  },
  {
    _id: uuid(7),
    title: "Skater Dress",
    description: "",
    price: "3700",
    category: "Women",
    original_price: "4800",
    discount: "10",
    image: "https://assets.ajio.com/medias/sys_master/root/20211111/vzCx/618d56d9f997ddf8f1029f2d/kazo_navy_textured_skater_dress.jpg",
    rating: {
      rate: "4.3",
      count: "10"
    }
  },
  {
    _id: uuid(8),
    title: "Floral Crop Top",
    description: "",
    price: "1500",
    category: "Women",
    original_price: "1900",
    discount: "10",
    image: "https://assets.ajio.com/medias/sys_master/root/20211123/ILff/619d198aaeb2690110d35cfc/orchid_blues_pink_floral_print_crop_top.jpg",
    rating: {
      rate: "4.3",
      count: "10"
    }
  },
  {
    _id: uuid(9),
    title: "Slip Pocket Short",
    description: "",
    price: "1200",
    category: "Women",
    original_price: "1400",
    discount: "10",
    image: "https://assets.ajio.com/medias/sys_master/root/20210415/OjsT/60785b28aeb269a9e3927914/rio_pink_shorts_with_slip_pockets.jpg",
    rating: {
      rate: "3.8",
      count: "10"
    }
  },
  {
    _id: uuid(),
    title: "Cuffed Sleeves Shirt",
    description: "",
    price: "2500",
    category: "Women",
    original_price: "2800",
    discount: "10",
    image: "https://assets.ajio.com/medias/sys_master/root/20200806/zVKo/5f2b07c6aeb2693e045f93b1/levis_blue_washed_shirt_with_cuffed_sleeves.jpg",
    rating: {
      rate: "5",
      count: "10"
    }
  }
];
