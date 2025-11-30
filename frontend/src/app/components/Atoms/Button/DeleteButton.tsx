import { Button } from "@chakra-ui/react";

type Props = {
  onClick: () => void;
};

const DeleteButton = ({ onClick }: Props) => {
  return (
    <Button
      bg={"red.500"}
      color={"white"}
      px={"2"}
      py={"1"}
      height="30px"
      borderRadius="xl"
      boxShadow={"sm"}
      onClick={onClick}
    >
      削除
    </Button>
  );
};

export default DeleteButton;
