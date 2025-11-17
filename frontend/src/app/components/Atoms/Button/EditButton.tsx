import { Button } from "@chakra-ui/react";

const EditButton = () => {
  return (
    <Button
      bg={"yellow.500"}
      color={"white"}
      px={"2"}
      py={"1"}
      height="30px"
      borderRadius="xl"
      boxShadow={"sm"}
    >
      編集
    </Button>
  );
};

export default EditButton;
