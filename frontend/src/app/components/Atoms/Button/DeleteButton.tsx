import { Button } from "@chakra-ui/react";

const DeleteButton = () => {
  return (
    <Button
      bg={"red.500"}
      color={"white"}
      px={"2"}
      py={"1"}
      height="30px"
      borderRadius="xl"
      boxShadow={"sm"}
    >
      削除
    </Button>
  );
};

export default DeleteButton;
