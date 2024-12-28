import React, { createContext, useState, useEffect } from "react";

export const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
  const [role, setRole] = useState(""); 
  const [name, setName] = useState(""); 
  const [teams, setTeams] = useState([]);
  const [position, setPosition] = useState("");
  const [projects, setProjects] = useState("");

  useEffect(() => {
    // Fetch data from localStorage
    const storedRole = localStorage.getItem("role") || "";
    const storedName = localStorage.getItem("name") || "";
    const storedTeams = localStorage.getItem("teams") 
      ? JSON.parse(localStorage.getItem("teams")) 
      : [];
    const storedPosition = localStorage.getItem("position") || "";
    const storedProjects = localStorage.getItem("projects") || "";

    setRole(storedRole);
    setName(storedName);
    setTeams(storedTeams);
    setPosition(storedPosition);
    setProjects(storedProjects);
  }, []);

  return (
    <RoleContext.Provider value={{ role, name, teams, position, projects }}>
      {children}
    </RoleContext.Provider>
  );
};
