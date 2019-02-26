title: SpringCloud之理论概念
author: WanLong
tags:
  - 'SpringCloud  '
categories:
  - 'SpringCloud  '
date: 2019-01-16 20:11:00
---
**1.传统架构模式以及分布式架构区别  **
![image](https://bigyyl-1256623201.cos.ap-chongqing.myqcloud.com/blog/20190226/springcloud%E4%BC%A0%E7%BB%9F%E6%9E%B6%E6%9E%84%E6%A8%A1%E5%BC%8F%E4%BB%A5%E5%8F%8A%E5%88%86%E5%B8%83%E5%BC%8F%E6%9E%B6%E6%9E%84%E5%8C%BA%E5%88%AB.png)  
** 2.什么是微服务**  
根据业务（有可能是技术等）拆分成一个一个的服务，彻底地去耦合，每一个微服务提供单个业务功能的服务，一个服务做一件事（要么只下订单等），从技术角度看就是一种小而独立的处理过程，类似进程概念，能够自行单独启动或销毁，甚至拥有自己独立的数据库。
是具体解决某一个问题/提供落地对应服务的一个服务应用，狭义的看，可以看作Eclipse里面的一个个微服务或者Module，它具体是用springboot开发的一个个小模块，专业的事情交给专业的模块来做，一个模块就做一件事。

由业务拆分成的一个个小模块，处理这个业务的某个服务，它能够独立的运行并有自己的数据库。

** 3.什么是SpringCloud**  
一堆（大概21种技术）分布式架构技术的整合
SpringCloud为是一套能够快速构建分布式系统的一些工具

Spring Cloud就是分布式微服务架构下的一站式解决方案，是各个微服务架构落地技术的集合体，俗称微服务全家桶。

** 4.微服务之间是如何独立通讯的**  


** 5.springCloud和Dubbo有哪些区别？Dubbo是怎么到SpringCloud的？该怎么选择？以及其优缺点。**  
1.springCloud采用Rest通信（http），而Dubbo是RPC（TCP/UDP）。
2.springcloud大量技术都是自己的全家桶，而Dubbo很多技术是整合各个公司，并且Dubbo不具备很多技术如：  
![image](https://bigyyl-1256623201.cos.ap-chongqing.myqcloud.com/blog/20190226/SpringCloud%E5%92%8CDubbo.png)  


** 6.springboot和springcloud，请你谈谈对他们的理解**  
SpringBoot是一个一个微服务的实现，关注微观，而SpringCloud是分布式微服务下的一站式解决方案，关注全局的微服务协调整理治理框架，将SpringBoot开发的一个个单体微服务整合并管理起来，更偏向宏观。
SpringBoot可以单独使用，但是SpringCloud依赖一个一个SpringBoot微服务，属于依赖关系。

** 7.什么是服务熔断？什么是服务降级？**  
服务熔断一般是某个服务故障或者异常引起，类似现实世界中的“保险丝”，当某个异常条件被触发，直接熔断整个服务，而不是一直等待到此服务超时。


** 8.微服务的优缺点分别是什么？说下你在项目开发中遇到的坑**  
优点：
![image](https://bigyyl-1256623201.cos.ap-chongqing.myqcloud.com/blog/20190226/%E5%BE%AE%E6%9C%8D%E5%8A%A1%E4%BC%98%E7%82%B9.png)
缺点：  
![image](https://bigyyl-1256623201.cos.ap-chongqing.myqcloud.com/blog/20190226/%E5%BE%AE%E6%9C%8D%E5%8A%A1%E7%BC%BA%E7%82%B9.png)
** 9.你所知道的微服务技术栈有哪些？请列举**  

** 10.eureka和zookeeper都可以提供服务注册与发现功能，请说说两个的区别。**  
Eureka是采用AP（高可用分区容错性），而Zookeeper是CP（一致性和分区容错性）