ALTER TABLE mentify.likes
ADD CONSTRAINT FK_userId
FOREIGN KEY (user_id) REFERENCES users(id);