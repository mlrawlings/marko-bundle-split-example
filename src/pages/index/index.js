import template from "./template.marko";

export default (req, res) => {
  res.marko(template, { componentName: req.query.componentName });
};
