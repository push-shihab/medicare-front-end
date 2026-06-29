import { getAllReviews } from "@/app/utility/fetchData/review/review";
import FeaturedPatientReviewsClient from "./FeaturedPatientReviewsClient";

const FeaturedPatientReviews = async () => {
  const reviews = await getAllReviews();
  return (
    <div>
      <FeaturedPatientReviewsClient
        reviews={reviews}
      ></FeaturedPatientReviewsClient>
    </div>
  );
};

export default FeaturedPatientReviews;
