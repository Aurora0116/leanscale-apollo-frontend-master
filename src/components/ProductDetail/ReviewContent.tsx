import { Button } from "components/Button";
import RatingStars from "components/RatingStars";

export default function ReviewContent() {
  return (
    <div className="">
      {/* Beginning Submit Review */}
      <div className="flex justify-between items-center">
        <div className="">
          <label className="font-bold text-title-2 text-dark-gray">4.6</label>
          <RatingStars rating={4.5} size="lg" />
        </div>
        <Button title="Submit Review" variant="primary" />
      </div>
      {/* End Submit Review */}
      {/* Beginning Review List */}
      <div className="py-4 border-t-2 border-solid border-lightest-gray">
        <div className="flex items-end justify-between">
          <div className="">
            <p className="text-subhead text-dark-gray font-bold">Joan P.</p>
            <RatingStars rating={5} />
          </div>
          <p className="text-caption-1 text-dark-gray font-medium">
            1 week ago
          </p>
        </div>
        <p className="text-caption-1 text-dark-gray font-semibold pt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          pellentesque sit amet augue ut pretium. Proin vitae justo quis eros
          vestibulum condimentum vitae quis erat.
        </p>
      </div>
      <div className="py-4 border-t-2 border-solid border-lightest-gray">
        <div className="flex items-end justify-between">
          <div className="">
            <p className="text-subhead text-dark-gray font-bold">Joan P.</p>
            <RatingStars rating={5} />
          </div>
          <p className="text-caption-1 text-dark-gray font-medium">
            1 week ago
          </p>
        </div>
        <p className="text-caption-1 text-dark-gray font-semibold pt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          pellentesque sit amet augue ut pretium. Proin vitae justo quis eros
          vestibulum condimentum vitae quis erat.
        </p>
      </div>
      <div className="py-4 border-t-2 border-solid border-lightest-gray">
        <div className="flex items-end justify-between">
          <div className="">
            <p className="text-subhead text-dark-gray font-bold">Joan P.</p>
            <RatingStars rating={5} />
          </div>
          <p className="text-caption-1 text-dark-gray font-medium">
            1 week ago
          </p>
        </div>
        <p className="text-caption-1 text-dark-gray font-semibold pt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          pellentesque sit amet augue ut pretium. Proin vitae justo quis eros
          vestibulum condimentum vitae quis erat.
        </p>
      </div>
      {/* End Review List */}
    </div>
  );
}
