import { useRoute, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../types/navigation";

type ReadingDetailsRouteProp = RouteProp<RootStackParamList, "ReadingDetails">;

export const useReadingDetailsViewModel = () => {
  const route = useRoute<ReadingDetailsRouteProp>();
  const item = route.params?.item;

  return {
    id: item?.id,
    fileUri: item?.fileUri,
    title: item?.title,
    date: item?.date,
    type: item?.type,
    fileName: item?.fileName || item?.title,
    fileSize: item?.fileSize || "1.2 MB",
    uploadDate: item?.uploadDate || item?.date,
    descriptionText: item?.descriptionText,
  };
};