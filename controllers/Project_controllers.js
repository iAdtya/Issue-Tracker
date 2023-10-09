import Project from "../models/projects.js";

export const createProject = async (req, res) => {
  console.log(req.body);
  try {
    const { name, description, author } = req.body;
    // console.log(`name: ${name}, description: ${description}, author: ${author}`);
    const project = new Project({ name, description, author });
    await project.save();
    // res.json({ project });
    res.redirect('back');
  } catch (error) {
    console.log(`Error in creating project: ${error}`);
    return res.redirect("back");
  }
};