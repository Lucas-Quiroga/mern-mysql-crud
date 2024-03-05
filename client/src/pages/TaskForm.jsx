import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { useTasks } from "../context/TaskContext";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const TaskForm = () => {
  const { createTask, getTask, updateTask } = useTasks();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setTask({
          title: task.title,
          description: task.description,
        });
      }
    };
    loadTask();
  }, []);

  return (
    <div>
      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          if (params.id) {
            await updateTask(params.id, values);
            navigate("/");
          } else {
            await createTask(values);
            navigate("/");
          }
          setTask({
            title: "",
            description: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <div class="flex flex-col items-center justify-center mt-[10rem] light">
            <div class="w-full max-w-md bg-white rounded-lg shadow-md p-6">
              <h2 class="text-2xl font-bold text-gray-800 mb-4">
                {params.id ? "Edit task" : "Create Task"}
              </h2>
              <Form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <label class="text-base font-medium text-gray-900">title</label>
                <input
                  type="text"
                  name="title"
                  placeholder="Write a title"
                  onChange={handleChange}
                  value={values.title}
                  class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <label class="text-base font-medium text-gray-900">
                  Description
                </label>
                <textarea
                  name="description"
                  rows="3"
                  placeholder="Write a description"
                  onChange={handleChange}
                  value={values.description}
                  class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                ></textarea>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  class="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  {isSubmitting ? "Saving..." : "Save"}
                </button>
              </Form>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default TaskForm;
