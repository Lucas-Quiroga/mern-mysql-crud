import axios from "axios";

export const getTasksRequest = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}api/tasks`,
      {
        headers: {
          Origin: "https://mern-mysql.netlify.app",
        },
      }
    );
    return response; // Add this line to return the response data
  } catch (error) {
    console.error("Error in getTasksRequest:", error);
    throw error; // Optionally rethrow the error if needed
  }
};

export const createTaskRequest = async (task) => {
  await axios.post(`${import.meta.env.VITE_API_URL}api/tasks`, task, {
    headers: {
      Origin: "https://mern-mysql.netlify.app",
    },
  });
};

export const deleteTaskRequest = async (id) => {
  await axios.delete(`${import.meta.env.VITE_API_URL}api/tasks/${id}`, {
    headers: {
      Origin: "https://mern-mysql.netlify.app",
    },
  });
};

export const getTaskRequest = async (id) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}api/tasks/${id}`,
    {
      headers: {
        Origin: "https://mern-mysql.netlify.app",
      },
    }
  );
  return response;
};

export const updateTaskRequest = async (id, newFields) => {
  const response = await axios.put(
    `${import.meta.env.VITE_API_URL}api/tasks/${id}`,
    newFields,
    {
      headers: {
        Origin: "https://mern-mysql.netlify.app",
      },
    }
  );
  return response;
};

export const toggleTaskDoneRequest = async (id, done) => {
  await axios.put(
    `${import.meta.env.VITE_API_URL}api/tasks/${id}`,
    {
      done,
    },
    {
      headers: {
        Origin: "https://mern-mysql.netlify.app",
      },
    }
  );
};
