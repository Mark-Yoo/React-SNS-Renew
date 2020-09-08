module.exports = (sequelize, DataTypes) => {
  const User = sequelize.definen('User', { // mySql에는 복수인 users로 저장됨
    // id가 기본적으로 제공되므로 굳이 테이블에 미리 넣어줄 필요가 없다.
    email: {
      type: DataTypes.STRING(30), // STRING, TEXT, BOOLEAN, FLOAT, INTEGER, DATETIME
      allowNull: false, // 필수
      unique: true, // 고유한 값
    },
    nickname: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(100), // 비밀번호를 암호화 할 경우 늘어날 길이를 대비하여 전체 길이를 넉넉하게 잡음
      allowNull: false,
    },
  }, {
    charset = 'utf8',
    collate: 'utf8_general_ci', // 한글 저장
  });
  User.associate = (db) => {};
  return User;
}