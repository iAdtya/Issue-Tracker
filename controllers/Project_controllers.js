import Project from "../models/projects.js";
import issue from "../models/issue.js";

export const createProject = async (req, res) => {
  console.log(req.body);
  try {
    const { name, description, author } = req.body;
    // console.log(
    //   `name: ${name}, description: ${description}, author: ${author}`
    // );
    const project = new Project({ name, description, author });
    await project.save();
    res.redirect("back");
  } catch (error) {
    console.log(`Error in creating project: ${error}`);
    return res.redirect("back");
  }
};

export const Isuues = async (req, res) => {
  try {
    const { title, description, author, labels } = req.body;
    console.log(
      `name: ${title}, description: ${description}, author: ${author},labels:${labels}`
    );
    const issues = new issue({ title, description, author, labels });
    await issues.save();
    res.redirect("back");
  } catch (error) {
    console.log(`Error in getting project issues: ${error}`);
    return res.redirect("back");
  }
};

export const projectDetails = async (req, res) => {
  // const projects = await Project.findById().sort(" -createdAt");
  const details = await Project.findById(req.params.id);
  const issues = await issue.find({ project: details._id }).populate('project');
  console.log( issues);
  try {
    return res.render("projectDetails", {
      details,
      issues,
      //?or use this
      //? project:details, project.author
      title: "Project Details",
    });
  } catch (error) {
    console.log(`Error in getting project details: ${error}`);
    return res.redirect("back");
  }
};
