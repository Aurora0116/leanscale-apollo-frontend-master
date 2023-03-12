import { StarEmpty, StarFull, StarHalf } from "./SvgIcons";

export default function RatingStars(props: {
  rating: number;
  size?: "lg" | "sm";
}) {
  const { rating } = props;
  return (
    <div className="flex items-center my-2">
      {[1, 2, 3, 4, 5].map((item, key) =>
        Math.floor(rating) > key ? (
          <StarFull key={key} size={props.size ? props.size : "sm"} />
        ) : rating - key > 0.5 ? (
          <StarHalf key={key} size={props.size ? props.size : "sm"} />
        ) : (
          <StarEmpty key={key} size={props.size ? props.size : "sm"} />
        )
      )}
    </div>
  );
}
