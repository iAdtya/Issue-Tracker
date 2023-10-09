import Project from "../models/projects.js";

const home = async (req, res) => {
  try {
    const projects = await Project.find();
    return res.render("home", {
      projects,
      title: "Issue-Tracker",
    });
  } catch (err) {
    console.log("Error", err);
    return res.redirect("/");
  }
};

export default home;
