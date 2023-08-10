import { Flex, Input, Button } from "@chakra-ui/react";
import { SmallAddIcon } from "@chakra-ui/icons";

import { AddTaskPropos } from "@/types";

const AddTask = ({ task, setTask, handleCreateTask }: AddTaskPropos) => {
  return (
    <>
    <div className="input-container">
      label
    </div>
      <Flex pt="2rem" pl="2rem" pr="2rem" pb="1rem">
        <Input
          placeholder="Add a task"
          size="lg"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={{'background': "white"}}
        />
        <Button colorScheme="twitter"
        size="lg"
        onClick={()=> handleCreateTask()}>
            <SmallAddIcon />
        </Button>
      </Flex>
    </>
  );
};

export default AddTask;
