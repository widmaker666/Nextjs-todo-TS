import { Flex, Input, Button } from "@chakra-ui/react";
import { SmallAddIcon } from "@chakra-ui/icons";

import { AddTaskPropos } from "@/types";

const AddTask = ({ task, setTask, handleCreateTask }: AddTaskPropos) => {
  return (
    <>
      <Flex
        pt="2rem"
        pl="2rem"
        pr="2rem"
        pb="1rem"
        margin="10px auto"
        width="500px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Input
          placeholder="Add a task"
          size="lg"
          mr="1rem"
          background="white"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <Button
          colorScheme="twitter"
          size="lg"
          onClick={() => handleCreateTask()}
        >
          <SmallAddIcon />
        </Button>
      </Flex>
    </>
  );
};

export default AddTask;
