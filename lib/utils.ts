import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function parseServerActionResponse<T>(response: T) {
  return JSON.parse(JSON.stringify(response));
}

export const fetchUsers = async (s: string) => {
  console.log("fetchUsers.......", s)
  const users = await fetch(`https://jsonplaceholder.typicode.com/users/`);
  const usersJson = await users.json();
  if (s.trim() === "") return usersJson;
  //search by first name
  const filteredUsers = usersJson.filter((user: { name: string }) =>
    user.name.toLowerCase().includes(s.trim().toLowerCase())
  );
  console.log("filter", filteredUsers);
  return filteredUsers;
};
