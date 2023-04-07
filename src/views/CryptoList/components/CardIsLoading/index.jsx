import { SpinnerLoad } from "@/components";

const CardIsLoading = ({ loading, children }) => {
  return loading ? <SpinnerLoad /> : children;
};
export default CardIsLoading;
