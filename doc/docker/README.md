- 1.部署主机需预安装docker及docker compose。
- 2.参照技术文档快速入门>源码部署章节，解压缩产生build/aj-report-xxxx目录。
- 3.修改数据库连接，MySQL JDBC url指向部署主机，root密码默认为123456。
- 4.使用docker-compose up -d命令启动程序即可。
- 5.MySQL数据存储在目录build/aj-report-mysql。
- 6.AJ-Report执行日志存储在目录build/aj-report-logs。
- 7.注意Dockerfile和docker-compose.yml中文件的路径、名称、参数，和你自己系统保持一致。





sh build.sh
cd doc/docker
docker build -t aj-report -f Dockerfile ../../  