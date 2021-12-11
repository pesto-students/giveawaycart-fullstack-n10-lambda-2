
const products = [
  {
    name: 'Plain Shirt Full',
    imageSrc: 'https://i.ibb.co/qgNHMCv/White-Shirt.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    sex: "Men",
    size: 'XL',
    sizes: [
      { name: 'XXS', inStock:false, isSelected: false },
      { name: 'XS', inStock:false, isSelected: false },
      { name: 'S', inStock:false, isSelected: false },
      { name: 'M', inStock:false, isSelected: false },
      { name: 'L', inStock:false, isSelected: false },
      { name: 'XL', inStock:true, isSelected: true },
    ],
    color: 'White',
    description: "This is a sample description, which will be used for all clothes. Later this needs to be changed",
    category: 'Shirt',
    isVisible: true,
    brand: 'Arrow',
    pickupTime: 'Between 10am to 5pm',
    dropLocation: '#123, DummyStreet 2, DummyRoad, DummyCity, Pincode - 999999'
  },  
  {
    name: 'Jean Jacket',
    imageSrc: 'https://i.ibb.co/kXhskVQ/Jean-Jacket.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    sex: 'Women',
    size: 'M',

    sizes: [
      { name: 'XXS', inStock:false, isSelected: false },
      { name: 'XS', inStock:false, isSelected: false },
      { name: 'S', inStock:false, isSelected: false },
      { name: 'M', inStock:true, isSelected: true },
      { name: 'L', inStock:false, isSelected: false },
      { name: 'XL', inStock:false, isSelected: false },
    ],
    color: 'Blue',
    description: "This is a sample description, which will be used for all clothes. Later this needs to be changed",
    category: 'Jacket',
    isVisible: true,
    brand: 'Denim',
    pickupTime: 'Between 10am to 5pm',
    dropLocation: '#123, DummyStreet 2, DummyRoad, DummyCity, Pincode - 999999'
  },
  {
    name: 'Jean Shirt Full',
    imageSrc: 'https://i.ibb.co/8KQsD0v/Blue-Jean-Shirt.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    sex: "Men",
    size: 'XL',
    sizes: [
      { name: 'XXS', inStock:false, isSelected: false },
      { name: 'XS', inStock:false, isSelected: false },
      { name: 'S', inStock:false, isSelected: false },
      { name: 'M', inStock:false, isSelected: false },
      { name: 'L', inStock:false, isSelected: false },
      { name: 'XL', inStock:true, isSelected: true },
    ],
    color: 'Dark Blue',
    description: "This is a sample description, which will be used for all clothes. Later this needs to be changed",
    category: 'Shirt',
    isVisible: true,
    brand: 'Levis',
    pickupTime: 'Between 10am to 5pm',
    dropLocation: '#123, DummyStreet 3, DummyRoad, DummyCity, Pincode - 999999'
  },
  {
    name: 'Blazer',
    imageSrc: 'https://i.ibb.co/RTF77sD/Blazer.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    sex: "Men",
    size: 'XL',
    sizes: [
      { name: 'XXS', inStock:false, isSelected: false },
      { name: 'XS', inStock:true, isSelected: true },
      { name: 'S', inStock:false, isSelected: false },
      { name: 'M', inStock:false, isSelected: false },
      { name: 'L', inStock:false, isSelected: false },
      { name: 'XL', inStock:false, isSelected: false },
    ],
    color: 'Black',
    description: "This is a sample description, which will be used for all clothes. Later this needs to be changed",
    category: 'Blazer',
    isVisible: true,
    brand: 'Raymond',
    pickupTime: 'Between 10am to 5pm',
    dropLocation: '#123, DummyStreet 3, DummyRoad, DummyCity, Pincode - 999999'
  },
  {
    name: 'Jacket Full',
    imageSrc: 'https://i.ibb.co/zXnpVbq/Jacket.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    sex: "Women",
    size: 'S',

    sizes: [
        { name: 'XXS', inStock:false, isSelected: false },
        { name: 'XS', inStock:false, isSelected: false },
        { name: 'S', inStock:true, isSelected: true },
        { name: 'M', inStock:false, isSelected: false },
        { name: 'L', inStock:false, isSelected: false },
        { name: 'XL', inStock:false, isSelected: false },
    ],
    color: 'Green',
    description: "This is a sample description, which will be used for all clothes. Later this needs to be changed",
    category: 'Jacket',
    isVisible: true,
    brand: 'Levis',
    pickupTime: 'Between 10am to 5pm',
    dropLocation: '#123, DummyStreet, DummyRoad, DummyCity, Pincode - 999999'
  },
  {
    name: 'Checks Shirt Full',
    imageSrc: 'https://i.ibb.co/5cHSDzf/Black-Grey-Checks-Shirt.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    sex: "Men",
    size: 'XL',
    sizes: [
      { name: 'XXS', inStock:false, isSelected: false },
      { name: 'XS', inStock:false, isSelected: false },
      { name: 'S', inStock:false, isSelected: false },
      { name: 'M', inStock:false, isSelected: false },
      { name: 'L', inStock:false, isSelected: false },
      { name: 'XL', inStock:true, isSelected: true },
    ],
    color: 'Black & Grey',
    description: "This is a sample description, which will be used for all clothes. Later this needs to be changed",
    category: 'Shirt',
    isVisible: true,
    brand: 'Polo',
    pickupTime: 'Between 10am to 5pm',
    dropLocation: '#123, DummyStreet, DummyRoad, DummyCity, Pincode - 999999'
  },
  {
    name: 'Basic Tee',
    imageSrc: 'https://i.ibb.co/C7qgJwm/Basic-Tee-White.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    sex: 'Women',
    size: 'L',

    sizes: [
        { name: 'XXS', inStock:false, isSelected: false },
        { name: 'XS', inStock:false, isSelected: false },
        { name: 'S', inStock:false, isSelected: false },
        { name: 'M', inStock:false, isSelected: false },
        { name: 'L', inStock:true, isSelected: true },
        { name: 'XL', inStock:false, isSelected: false },
    ],
    color: 'White',
    description: "This is a sample description, which will be used for all clothes. Later this needs to be changed",
    category: 'T-Shirt',
    isVisible: true,
    brand: 'Nike',
    pickupTime: 'Between 10am to 5pm',
    dropLocation: '#456, DummyStreet, DummyRoad, DummyCity, Pincode - 999999'
  },
  {
    name: 'Basic Tee',
    imageSrc: 'https://i.ibb.co/nsCTQtL/Basic-Tee-Yellow.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    sex: 'Women',
    size: 'L',

    sizes: [
        { name: 'XXS', inStock:false, isSelected: false },
        { name: 'XS', inStock:false, isSelected: false },
        { name: 'S', inStock:false, isSelected: false },
        { name: 'M', inStock:false, isSelected: false },
        { name: 'L', inStock:true, isSelected: true },
        { name: 'XL', inStock:false, isSelected: false },
    ],
    color: 'Yellow',
    description: "This is a sample description, which will be used for all clothes. Later this needs to be changed",
    category: 'Tee',
    isVisible: true,
    brand: 'adidas',
    pickupTime: 'Between 10am to 5pm',
    dropLocation: '#456, DummyStreet, DummyRoad, DummyCity, Pincode - 999999'
  },
  {
    name: 'Baby Clothes',
    imageSrc: 'https://i.ibb.co/1n8gjLZ/Baby-Clothes.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    sex: 'infants',
    size: '0-12 months',
    sizes: [
      { name: 'XXS', inStock:true, isSelected: true },
      { name: 'XS', inStock:false, isSelected: false },
      { name: 'S', inStock:false, isSelected: false },
      { name: 'M', inStock:false, isSelected: false },
      { name: 'L', inStock:false, isSelected: false },
      { name: 'XL', inStock:false, isSelected: false },
    ], 
    color: 'White',
    description: "This is a sample description, which will be used for all clothes. Later this needs to be changed",
    category: 'infantClothes',
    isVisible: true,
    brand: 'babyshop',
    pickupTime: 'Between 10am to 5pm',
    dropLocation: '#456, DummyStreet, DummyRoad, DummyCity, Pincode - 999999'
  },
  // More products...
]

export default products;