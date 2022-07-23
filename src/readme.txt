config目录中为本次大作业的Home Assistant中的全部的配置文件，另外本次大作业使用的Home Assistant容器的相关信息也已经上传到https://github.com/1114796814/myhome-assistant，如需使用请在运行容器时挂载config目录。
MyHome目录中为房屋的模型。
sensor目录中为产生随机温度并发送到MQTT服务器的程序。





docker镜像 registry.cn-shanghai.aliyuncs.com/lianger/myhome-assistant:1.0


使用方式 docker pull registry.cn-shanghai.aliyuncs.com/lianger/myhome-assistant:1.0

docker run -d -p {config}:/config --name ${name} registry.cn-shanghai.aliyuncs.com/lianger/myhome-assistant:1.0

访问ip:${port}即可查看