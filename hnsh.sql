 -- 创建数据库xm
-- 1.设置客户端连接sql  使用编码UTF-8
SET NAMES UTF8;
-- 2.丢弃、删除指定的数据库如果存在的话
DROP DATABASE IF EXISTS hnsh;
-- 3.创建新的数据库
CREATE DATABASE hnsh CHARSET=UTF8;
-- 4.进入创建好的额数据库
USE hnsh;
-- 创建数据表
CREATE TABLE hnsh_contact_news(
    id INT,
    uname VARCHAR(32),
    email VARCHAR(64),
    phone VARCHAR(16),
    title VARCHAR(64),
    content VARCHAR(2000)
);

 INSERT INTO hnsh_contact_news VALUES(null,'tom','989654321@qq.com',19087654323,"最好玩的地方",'我很喜欢'); 
