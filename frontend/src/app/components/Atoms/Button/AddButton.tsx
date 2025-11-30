import { Button } from "@chakra-ui/react";

type Props = {
  onClick: () => void;
};

// コメント
const AddButton = ({ onClick }: Props) => {
  return (
    <Button
      bg={"blue.500"}
      color={"white"}
      px={"5"}
      py={"2"}
      borderRadius="xl"
      boxShadow={"sm"}
      onClick={onClick}
    >
      追加
    </Button>
  );
};

export default AddButton;
