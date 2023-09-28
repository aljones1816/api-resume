const getExperience = async (req, res) => {
  res.send("you got my work experience!");
};

const getExperienceByID = async (req, res) => {
  const id = req.params.id;
  if (id) {
    res.send(`you got the experience for job ${id}`);
  }
};

export { getExperience, getExperienceByID };
