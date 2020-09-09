module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', { // mySql에는 복수인 users로 저장됨
    src: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  }, {
    charset: 'utf8',
    collate: 'utf8_general_ci', // 한글 저장
  });
  Image.associate = (db) => {
    db.Image.belongsTo(db.Post);
  };
  return Image;
}