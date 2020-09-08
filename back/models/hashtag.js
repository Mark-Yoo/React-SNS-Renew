module.exports = (sequelize, DataTypes) => {
  const Hashtag = sequelize.definen('Hashtag', { // mySql에는 복수인 users로 저장됨
    name: {},
  }, {
    charset = 'utf8mb4',
    collate: 'utf8mb4_general_ci', // 한글 저장
  });
  Hashtag.associate = (db) => {};
  return Hashtag;
}