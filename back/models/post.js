module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.definen('Post', { // mySql에는 복수인 users로 저장됨
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    charset = 'utf8mb4',
    collate: 'utf8mb4_general_ci', // 이모티콘 저장
  });
  Post.associate = (db) => {};
  return Post;
}