import { IFeatureFunction } from "@/interface/feature.interface";
import { motion } from "framer-motion";

interface IProps {
  item: IFeatureFunction;
}
const FeatureDetailsFunctionContent = ({ item }: IProps) => {
  const { description_1, description_2 } = item || {};
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="h-full flex flex-col justify-center items-center gap-10 text-xl text-primary font-medium"
    >
      <p className="leading-8">{description_1}</p>
      {description_2 && <p className="leading-8">{description_2}</p>}
    </motion.div>
  );
};

export default FeatureDetailsFunctionContent;
