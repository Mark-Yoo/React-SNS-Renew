module.exports = (sequelize, DataTypes) => {
  const Hashtag = sequelize.define('Hashtag', { // mySql에는 복수인 users로 저장됨
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci', // 한글 저장
  });
  Hashtag.associate = (db) => {
    // belongsToMany는 중간 테이블을 만들어 각각의 hashtag가 연결되는 post들을 가지고 있다.
    db.Hashtag.belongsToMany(db.Post);
  };
  return Hashtag;
}