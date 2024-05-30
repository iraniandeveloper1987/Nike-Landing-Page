import { reviews } from "../constants";
import ReviewCard from "./ReviewCard";

const CustomerReviews = () => {
  return (
    <section id="customer-reviews" className="max-container">
      <h3 className="font-palanquin text-4xl font-bold text-center ">
        what our <span className="text-coral-red">customers</span> say?
      </h3>
      <p className="mt-4 info-text m-auto text-center max-w-lg">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div
        className="mt-24 flex flex-1 justify-evenly item-center 
      max-lg:flex-col gap-14"
      >
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
