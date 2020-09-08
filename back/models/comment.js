module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.definen('Comment', { // mySql에는 복수인 users로 저장됨
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    charset = 'utf8mb4',
    collate: 'utf8mb4_general_ci', // 한글 저장
  });
  Comment.associate = (db) => {};
  return Comment;
}