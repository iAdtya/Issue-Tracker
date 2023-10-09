import Project from "../models/projects.js";

export const createProject = async (req, res) => {
  console.log(req.body);
  try {
    const { name, description, author } = req.body;
    // console.log(`name: ${name}, description: ${description}, author: ${author}`);
    const project = new Project({ name, description, author });
    await project.save();
    // res.json({ project });
    res.redirect("back");
  } catch (error) {
    console.log(`Error in creating project: ${error}`);
    return res.redirect("back");
  }
};

export const projectDetails = async (req, res) => {
  const details = await Project.findById(req.params.id);
  console.log(details);
  try {
    return res.render("projectDetails", {
      title: "Project Details",
    });
  } catch (error) {
    console.log(`Error in getting project details: ${error}`);
    return res.redirect("back");
  }
};
