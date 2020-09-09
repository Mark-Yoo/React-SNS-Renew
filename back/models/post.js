module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', { // mySql에는 복수인 users로 저장됨
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci', // 이모티콘 저장
  });
  Post.associate = (db) => {
    db.Post.belongsTo(db.User);
    db.Post.hasMany(db.Comment);
    db.Post.hasMany(db.Image);
    db.Post.belongsToMany(db.Hashtag);
    db.Post.belongsToMany(db.User, { through: 'Like', as: 'LikedPeople' });
    db.Post.belongsToMany(db.Post, { as: 'Retweet' })
  };
  return Post;
}