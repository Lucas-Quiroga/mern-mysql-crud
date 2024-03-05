import React from "react";
import { useTasks } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

const TaskCard = ({ task }) => {
  const { deleteTask, toggleTaskDone } = useTasks();
  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleTaskDone(task.id);
  };

  return (
    <>
      <section class="mb-2 border bg-neutral-100 p-4 rounded-lg max-w-full mx-3 lg:mx-2">
        <div class="mx-auto">
          <div class="card md:flex max-w-lg">
            <div class="flex-grow text-center md:text-left">
              <header className="flex justify-between">
                <p class="font-bold text-xl">{task.title}</p>
                <span>{task.done === 1 ? "✅" : "❌"}</span>
              </header>
              <h3 class="text-xl heading">{task.createAt}</h3>
              <p class="mt-2 mb-3">{task.description}</p>
              <div className="flex gap-x-3 flex-wrap">
                <button
                  class="inline-flex items-center px-4 py-2 bg-red-600 transition ease-in-out delay-75 hover:bg-red-700 text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110"
                  onClick={() => deleteTask(task.id)}
                >
                  <svg
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    fill="none"
                    class="h-5 w-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      stroke-width="2"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                  Delete
                </button>
                <button
                  class="inline-flex items-center px-4 py-2 bg-blue-600 transition ease-in-out delay-75 hover:bg-blue-600 text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110"
                  onClick={() => navigate(`/edit/${task.id}`)}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    class="h-5 w-5 mr-2"
                    stroke="#ffffff"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
                        stroke="#ffffff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                      <path
                        d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
                        stroke="#ffffff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                  Edit
                </button>
                <button
                  class="inline-flex items-center px-4 py-2 bg-gray-600 transition ease-in-out delay-75 hover:bg-gray-700 text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110"
                  onClick={() => {
                    handleDone(task.id);
                    window.location.reload();
                  }}
                >
                  <span className="mr-2">{task.done === 1 ? "✅" : "❌"}</span>
                  Toggle
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskCard;
