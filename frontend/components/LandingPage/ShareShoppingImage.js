const ShareShoppingImage = () => {
  return (
    <div className ="hidden lg:block lg:max-w-7xl lg:mx-auto">
      <div className="m-2  h-96 grid grid-cols-4  gap-1">
        <div className="col-start-1 col-span-2 ml-10">
          <img className="object-cover h-96 w-full" src="https://hope-product-profile-images.s3.ap-southeast-1.amazonaws.com/donate.JPG" alt="Share Your Clothes" />
        </div>
        <div className="col-start-3 col-span-4 ml-10">
          <img className="object-cover h-96 w-full" src="https://hope-product-profile-images.s3.ap-southeast-1.amazonaws.com/start+Shopping.jpg" alt="Start Shopping" />
        </div>
      </div>
    </div>
  );
}

export default ShareShoppingImage;