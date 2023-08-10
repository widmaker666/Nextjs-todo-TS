import { TaskProps } from "@/types";
import { CheckIcon, DeleteIcon } from "@chakra-ui/icons";
import { Button, Card, Flex, Text } from "@chakra-ui/react";

const Task = ({
  individualTask,
  handleCompleteTask,
  handleDeleteTask,
}: TaskProps) => {
  return (
    <Card p="2rem" mb="0.5rem" variant="outline">
      <Flex alignItems="center">
        {individualTask.completed ? (
          <Text flexGrow="1" as="del">
            {individualTask.task}
          </Text>
        ) : (
          <Text flexGrow="1">{individualTask.task}</Text>
        )}
        <Flex>
          {individualTask.completed ? (
            <Button ml="1rem" colorScheme="whatsapp" isDisabled>
              <CheckIcon />
            </Button>
          ) : (
            <Button
              ml="1rem"
              colorScheme="whatsapp"
              onClick={() => handleCompleteTask(individualTask._id)}
            >
              <CheckIcon />
            </Button>
          )}

          <Button
            ml="1rem"
            colorScheme="red"
            onClick={() => handleDeleteTask(individualTask._id)}
          >
            <DeleteIcon />
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
};

export default Task;
