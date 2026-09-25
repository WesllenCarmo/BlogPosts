module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define("Posts", {
    title: {
      type: DataTypes.STRING,
      AllowNull: false,
    },
    postText: {
      type: DataTypes.STRING,
      AllowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      AllowNull: false,
    },
  });

  return Posts;
};
