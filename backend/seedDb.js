const mongoose = require("mongoose");
require("dotenv").config({ path: "./config.env" });

// Define schema for a product
const productSchema = new mongoose.Schema({
  category: String,
  title: String,
  productImg: [String],
  price: Number,
  rating: Number,
  bought: Number,
  manufacturer: String,
});

const Product = mongoose.model("instruments", productSchema);

const products = [
  // Guitars
  {
    category: "guitar",
    title: "Fender American Professional II Stratocaster",
    productImg: ["https://images.static-thomann.de/pics/bdb/500319.jpg"],
    price: 1500,
    rating: 9,
    bought: 120,
    manufacturer: "Fender",
  },
  {
    category: "guitar",
    title: "Gibson Les Paul Standard '50s",
    productImg: ["https://images.static-thomann.de/pics/bdb/486948.jpg"],
    price: 2499,
    rating: 10,
    bought: 90,
    manufacturer: "Gibson",
  },
  {
    category: "guitar",
    title: "Ibanez RG550",
    productImg: ["https://images.static-thomann.de/pics/bdb/439277.jpg"],
    price: 999,
    rating: 8,
    bought: 110,
    manufacturer: "Ibanez",
  },
  {
    category: "guitar",
    title: "Jackson Pro Series Soloist SL2Q MAH",
    productImg: ["https://images.static-thomann.de/pics/bdb/435440.jpg"],
    price: 1299,
    rating: 8,
    bought: 45,
    manufacturer: "Jackson",
  },
  {
    category: "guitar",
    title: "PRS SE Custom 24",
    productImg: ["https://images.static-thomann.de/pics/bdb/453523.jpg"],
    price: 849,
    rating: 9,
    bought: 60,
    manufacturer: "PRS",
  },

  // Drums
  {
    category: "drums",
    title: "Yamaha Stage Custom Birch",
    productImg: ["https://images.static-thomann.de/pics/bdb/420540.jpg"],
    price: 649,
    rating: 8,
    bought: 85,
    manufacturer: "Yamaha",
  },
  {
    category: "drums",
    title: "Pearl Export EXX",
    productImg: ["https://images.static-thomann.de/pics/bdb/428573.jpg"],
    price: 749,
    rating: 9,
    bought: 95,
    manufacturer: "Pearl",
  },
  {
    category: "drums",
    title: "DW Design Series",
    productImg: ["https://images.static-thomann.de/pics/bdb/454610.jpg"],
    price: 1599,
    rating: 9,
    bought: 50,
    manufacturer: "DW Drums",
  },
  {
    category: "drums",
    title: "Tama Superstar Classic",
    productImg: ["https://images.static-thomann.de/pics/bdb/423485.jpg"],
    price: 899,
    rating: 8,
    bought: 65,
    manufacturer: "Tama",
  },
  {
    category: "drums",
    title: "Ludwig Breakbeats",
    productImg: ["https://images.static-thomann.de/pics/bdb/466442.jpg"],
    price: 449,
    rating: 7,
    bought: 120,
    manufacturer: "Ludwig",
  },

  // Keys
  {
    category: "keys",
    title: "Roland Fantom-6",
    productImg: ["https://images.static-thomann.de/pics/bdb/475698.jpg"],
    price: 3300,
    rating: 10,
    bought: 40,
    manufacturer: "Roland",
  },
  {
    category: "keys",
    title: "Yamaha MODX8",
    productImg: ["https://images.static-thomann.de/pics/bdb/451011.jpg"],
    price: 1499,
    rating: 9,
    bought: 70,
    manufacturer: "Yamaha",
  },
  {
    category: "keys",
    title: "Nord Stage 3 Compact",
    productImg: ["https://images.static-thomann.de/pics/bdb/461065.jpg"],
    price: 3699,
    rating: 10,
    bought: 30,
    manufacturer: "Nord",
  },
  {
    category: "keys",
    title: "Korg Kronos 2 88",
    productImg: ["https://images.static-thomann.de/pics/bdb/430781.jpg"],
    price: 4000,
    rating: 10,
    bought: 25,
    manufacturer: "Korg",
  },
  {
    category: "keys",
    title: "Casio Privia PX-160",
    productImg: ["https://images.static-thomann.de/pics/bdb/450702.jpg"],
    price: 499,
    rating: 8,
    bought: 90,
    manufacturer: "Casio",
  },

  // Studio
  {
    category: "studio",
    title: "Focusrite Scarlett 2i2",
    productImg: ["https://images.static-thomann.de/pics/bdb/456265.jpg"],
    price: 169,
    rating: 9,
    bought: 350,
    manufacturer: "Focusrite",
  },
  {
    category: "studio",
    title: "AKG C214 Condenser Microphone",
    productImg: ["https://images.static-thomann.de/pics/bdb/391907.jpg"],
    price: 399,
    rating: 9,
    bought: 70,
    manufacturer: "AKG",
  },
  {
    category: "studio",
    title: "KRK Rokit 5 G4",
    productImg: ["https://images.static-thomann.de/pics/bdb/454728.jpg"],
    price: 169,
    rating: 8,
    bought: 120,
    manufacturer: "KRK",
  },
  {
    category: "studio",
    title: "Behringer X32 Compact Mixer",
    productImg: ["https://images.static-thomann.de/pics/bdb/352893.jpg"],
    price: 1999,
    rating: 9,
    bought: 40,
    manufacturer: "Behringer",
  },
  {
    category: "studio",
    title: "Neumann TLM 103",
    productImg: ["https://images.static-thomann.de/pics/bdb/456221.jpg"],
    price: 1299,
    rating: 10,
    bought: 35,
    manufacturer: "Neumann",
  },

  // DJ
  {
    category: "dj",
    title: "Pioneer DJ DDJ-400",
    productImg: ["https://images.static-thomann.de/pics/bdb/453456.jpg"],
    price: 250,
    rating: 8,
    bought: 200,
    manufacturer: "Pioneer",
  },
  {
    category: "dj",
    title: "Numark Mixtrack Platinum FX",
    productImg: ["https://images.static-thomann.de/pics/bdb/455327.jpg"],
    price: 239,
    rating: 8,
    bought: 150,
    manufacturer: "Numark",
  },
  {
    category: "dj",
    title: "Denon DJ Prime 4",
    productImg: ["https://images.static-thomann.de/pics/bdb/448651.jpg"],
    price: 1899,
    rating: 9,
    bought: 80,
    manufacturer: "Denon",
  },
  {
    category: "dj",
    title: "Native Instruments Traktor Kontrol S4 MK3",
    productImg: ["https://images.static-thomann.de/pics/bdb/444813.jpg"],
    price: 899,
    rating: 9,
    bought: 95,
    manufacturer: "Native Instruments",
  },
  {
    category: "dj",
    title: "Hercules DJControl Inpulse 500",
    productImg: ["https://images.static-thomann.de/pics/bdb/454314.jpg"],
    price: 299,
    rating: 7,
    bought: 100,
    manufacturer: "Hercules",
  },
];

// Insert data into MongoDB
async function seedDatabase() {
  await mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB Atlas");

  await Product.deleteMany({});
  const result = await Product.insertMany(products);
  console.log("Inserted documents:", result);

  console.log("Database seeded with product data");
  mongoose.connection.close();
}

seedDatabase().catch((error) => console.error(error));
