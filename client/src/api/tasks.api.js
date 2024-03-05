import axios from "axios";

export const getTasksRequest = async () => {
  try {
    const response = await axios.get("http://localhost:4000/tasks");
    return response; // Add this line to return the response data
  } catch (error) {
    console.error("Error in getTasksRequest:", error);
    throw error; // Optionally rethrow the error if needed
  }
};

export const createTaskRequest = async (task) => {
  await axios.post("http://localhost:4000/tasks", task);
};

export const deleteTaskRequest = async (id) => {
  await axios.delete(`http://localhost:4000/tasks/${id}`);
};

export const getTaskRequest = async (id) => {
  const response = await axios.get(`http://localhost:4000/tasks/${id}`);
  return response;
};

export const updateTaskRequest = async (id, newFields) => {
  const response = await axios.put(
    `http://localhost:4000/tasks/${id}`,
    newFields
  );
  return response;
};

export const toggleTaskDoneRequest = async (id, done) => {
  await axios.put(`http://localhost:4000/tasks/${id}`, {
    done,
  });
};
