#### 《交互设计与案例分析》家居物联交互设计大作业

#### 挂载文件 config

#### 演示视频 demo

#### docker镜像 registry.cn-shanghai.aliyuncs.com/lianger/myhome-assistant:1.0

使用方式
docker pull registry.cn-shanghai.aliyuncs.com/lianger/myhome-assistant:1.0

docker run -d -p ${port}:8123 -v ${config}:/config  --name ${name}  registry.cn-shanghai.aliyuncs.com/lianger/myhome-assistant:1.0

访问ip:${port}即可查看
