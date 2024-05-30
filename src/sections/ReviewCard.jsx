import { star } from "../assets/icons";
const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <img
        src={imgURL}
        alt={customerName}
        className="rounded-full 
      object-contain w-[120px] h-[120px]"
      />
      <p className="mt-6 max-w-sm font-montserrat info-text text-center">
        {feedback}
      </p>
      <div className="mt-6 flex  items-center justify-center gap-2.5">
        <img
          src={star}
          alt="rating"
          width={24}
          height={24}
          className="object-contain "
        />
        <p className="text-slate-gray font-montserrat leading-normal text-xl">
          ({rating})
        </p>
      </div>
      <h3 className="mt-1 font-palanquin font-bold text-3xl text-center">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
