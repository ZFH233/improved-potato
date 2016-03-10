#PHP面试刷题

- 表单提交get和post有何区别？

答：get的方式是把数据在地址栏中发送，get传送的数据量较小，不能大于2KB。post传送的数据量较大，一般被默认为不受限制。但理论上，IIS4中最大量为80KB，IIS5中为100KB。

- 用PHP打印出前一天的时间格式是2006-5-10 22:21:21

echo date("Y-m-d H:i:s",time()-(3600*24));或echo date("Y-m-d H:i:s",strtotime("-1 day"));

- php中include和require的区别？

这两种结构除了在如何处理失败之外完全一样。include() 产生一个警告而 require() 则导致一个致命错误。换句话说，如果你想在遇到丢失文件时停止处理页面就用 require()。include() 就不是这样，脚本会继续运行。

- echo(),print(),print_r()的区别

echo可以接多个参数,print只能接一个参数,它们都是PHP的语言结构,print_r是递规打印,用来打印数组或对象

- 能够使HTML和PHP分离开使用的模板

smarty,phplib,SmartTemplate

- 你如何理解MVC模式？

首先说一下框架，框架:就是别人把一些底层,常用操作.比如数据操作(增,删,改,查)写好.你来直接用.其它的功能要自己来做。MVC:设计模式,M模型,V显示,C控制.现在许多框架都是基于MVC来做的把逻辑和显示分开.比如你要换页面,只需要改V里面的东西并不需要再去变动程序!（详细的东西可以 上网上查一下）

- 如何实现PHP、JSP交互？

PHP提供了支持JAVA的类库文件,或者通过HTTP协议来交互数据

- 使用哪些工具进行版本控制？

Git，SVN

- 如何实现字符串翻转？

不考虑中英文混合,不是最优算法,不用php库函数翻转字符串:
```
function   str_to_reverse($str){  
    for($length=0;$str[$length]!=null;$length++){;}  
  	$strlength=$length-1;  
  	unset($length);
	for($start=0,$end=$strlength;$start<$end;$start++,$end--){  
	  	$temp = $str[$start];  
	  	$str[$start] = $str[$end];  
	  	$str[$end] = $temp;  
	}  
  	unset($temp,$start,$end,$strlength);  
  	return $str;  
}
```
如果PHP库函数的话这样
```
$str=strrev("Junhey");
echo $str;
```



- 优化MYSQL数据库的方法。

1） 将where中用的比较频繁的字段建立索引,联合索引。
2） 保证单表数据不超过200W，适时分割表。
3） 避免使用长连接。
4） 修改my.cnf里面的各项参数，比如最大连接数，查询缓存等。根据你的服务器内存来最大化调节那些配置参数。
5） 针对需求，使用正确的表引擎，是myisam或是innodb。

- 用PHP写出显示客户端IP与服务器IP的代码

echo $_SERVER['REMOTE_ADDR'] //客户端ip
echo $_SERVER['SERVER_ADDR'] //服务器端ip

- apache+mysql+php实现最大负载的方法

1）问的太笼统,生成静态html页面,squid反向代理,apache,mysql的负载均衡。
2）可以采取数据缓存的方法，我们通常在统计数据的时候，需要在原始数据的基础上经过计算等一系列操作，才会得到最终的结果，如果每做一个查询都需要这样一系 列操作，当数据量大时，势必会带来很多问题。可以建立一个结果表，写一个脚本，用crontab定时触发脚本去原始表取数据，计算，写入到结果表，前端查 询从结果表取数据，这也是比较常用的一种做法。
3）采用分布式，多个apache，多个mysql，其实就是dns负载均衡，dns根据当前用户解析几个ip的ping值，将用户转移到某一台最快的服务器，或者平均分配。
4）money不是问题的话,可以考虑F5硬件负载均衡!
5）可以使用Microsoft Windows Server系统的负载均衡设置

- 优化MYSQL数据库的方法

(1)选取最适用的字段属性,尽可能减少定义字段长度,尽量把字段设置NOT NULL,例如’省份,性别’,最好设置为ENUM
(2)使用连接（JOIN）来代替子查询:
(3)使用联合(UNION)来代替手动创建的临时表
(4)事务处理:保证数据完整性,例如添加和修改同时,两者成立则都执行,一者失败都失败
	mysql_query(”BEGIN”);
	mysql_query(”INSERT INTO customerinfo (name) VALUES (’$name1′)”;
	mysql_query(”SELECT * FROM `orderinfo` where customerid=”.$id”);
	mysql_query(”COMMIT”);
(5)锁定表,优化事务处理:我们用一个 SELECT 语句取出初始数据，通过一些计算，用 UPDATE 语句将新值更新到表中。包含有 WRITE 关键字的 LOCK TABLE 语句可以保证在 UNLOCK TABLES 命令被执行之前，不会有其它的访问来对 inventory 进行插入、更新或者删除的操作
	mysql_query(”LOCK TABLE customerinfo READ, orderinfo WRITE”);
	mysql_query(”SELECT customerid FROM `customerinfo` where id=”.$id);
	mysql_query(”UPDATE `orderinfo` SET ordertitle=’$title’ where customerid=”.$id);
	mysql_query(”UNLOCK TABLES”);
(6)使用外键,优化锁定表
(7)建立索引
(8)优化查询语句:最好在相同字段进行比较操作,在建立好的索引字段上尽量减少函数操作
	SELECT * FROM order WHERE YEAR(orderDate)<2008;(慢)
	SELECT * FROM order WHERE orderDate<"2008-01-01";(快)
	SELECT * FROM order WHERE addtime/7<24;(慢)
	SELECT * FROM order WHERE addtime<24*7;(快)
	SELECT * FROM order WHERE title like "%good%";
	SELECT * FROM order WHERE title>=”good” and name<"good";
	
- 实现中文字串截取无乱码的方法
```
$str = "我是一串比较长的中";
echo "mb_substr:" . mb_substr($str, 0, 6, "utf-8");
echo "mb_strcut:" . mb_strcut($str, 0, 6, "utf-8");
```
打印结果：
		mb_substr：我是一串比较
		mb_strcut：我是

mb_substr是按字来切分字符，而mb_strcut是按字节来切分字符，但是都不会产生半个字符的现象



- 在PHP中，当前脚本的名称（不包括路径和查询字符串）记录在预定义变量中；而链接到当前页面的URL记录在预定义变量中

```
echo $_SERVER["PHP_SELF"];
echo $_SERVER["HTTP_REFERER"];
```

- 如下代码

```
	$null = NULL;
	$bool = FALSE;
	$notSet;
	$array = array();
	
	//以下是问题
	$a = "hello";
	$b = &$a;
	unset($b);
	//答案为:hello
	echo $a;
	$b = "world";
	//答案为:hello
	echo $a;
	
	//以下是问题
	$a = 1;
	$x = &$a;
	$b = $a++;
	//答案为:1
	echo $b;
	
	//以下是问题
	$x = empty($array);
	//答案为:1
	echo $x;
	//答案为:true
	echo $x?"true":"false";
```
- 表单中 get与post提交方法的区别

get是发送请求HTTP协议通过url参数传递进行接收,而post是实体数据,可以通过表单提交大量信息

- session与cookie的区别

session:储存用户访问的全局唯一变量,存储在服务器上的php指定的目录中的（session_dir）的位置进行的存放
cookie:用来存储连续訪問一个頁面时所使用，是存储在客户端，对于Cookie来说是存储在用户WIN的Temp目录中的。
两者都可通过时间来设置时间长短

- 数据库中的事务是什么

事务（transaction）是作为一个单元的一组有序的数据库操作。如果组中的所有操作都成功，则认为事务成功，即使只有一个操作失败，事务也不成功。如果所有操作完成，事务则提交，其修改将作用于所有其他数据库进程。如果一个操作失败，则事务将回滚，该事务所有操作的影响都将取消

- MYSQL取得当前时间的函数是 

now()

- 格式化日期的函数是 

date()

- 语句include和require的区别是什么

require->require是无条件包含也就是如果一个流程里加入require,无论条件成立与否都会先执行require
include->include有返回值，而require没有(可能因为如此require的速度比include快)

- 如何修改SESSION的生存时间

将php.ini中的session.gc_maxlifetime设置为9999重启apache
或:
	$savePath = “./session_save_dir/”;
	$lifeTime = 小时 * 秒;
	session_save_path($savePath);
	session_set_cookie_params($lifeTime);
	session_start();
	
- 有一个网页地址，比如http://www.murray.cn/,如何得到它的内容

```
$readcontents = fopen(”http://www.murray.cn/”, “rb”);
$contents = stream_get_contents($readcontents);
fclose($readcontents);
echo $contents;
```
或
```
echo file_get_contents(”http://www.murray.cn/”);
```


- 在HTTP 1.0中，状态码401的含义是 未被授权

如果返回“找不到文件”的提示，则可用 header 函数，其语句为 header(”Location:www.murray.cn”);


- 请说明php中传值与传引用的区别。什么时候传值什么时候传引用?

按值传递：函数范围内对值的任何改变在函数外部都会被忽略
按引用传递：函数范围内对值的任何改变在函数外部也能反映出这些修改
优缺点：按值传递时，php必须复制值。特别是对于大型的字符串和对象来说，这将会是一个代价很大的操作。
按引用传递则不需要复制值，对于性能提高很有好处。

- 在PHP中error_reporting这个函数有什么作用

设置错误级别与错误信息回报

- 请写一个函数验证电子邮件的格式是否正确

$pregEmail = "/([a-z0-9]*[-_\.]?[a-z0-9]+)*@([a-z0-9]*[-_]?[a-z0-9]+)+[\.][a-z]{2,3}([\.][a-z]{2})?/i";
return preg_match($pregEmail,$email);

- 如何得到当前执行脚本路径，包括所得到参数

```
$script_name = basename(__file__);
print_r($script_name);
```

- JS表单弹出对话框函数是

alert(),prompt(),confirm();
获得输入焦点函数是focus();

- 如何声明一个名为”myclass”的没有方法和属性的类

class myclass{} 

如何实例化一个名为”myclass”的对象
new myclass()

如何访问和设置一个类的属性
$object = new myclass();
$newstr = $object->test;
$object->test = “info”;

- 可以打开一个文件，以对文件进行读和写操作: 

fopen()

- 以下的输出结果

```
$num = 10;
function multiply(){
	$num = $num * 10;
}
multiply();
echo $num;
//输出:10
```

- 写一个函数，尽可能高效的，从一个标准 url 里取出文件的扩展名
function getExt($url){
	$arr = parse_url($url);
	$file = basename($arr["path"]);
	$ext = explode(”.”,$file);
	return $ext[1];
}

- PHP5权限控制修饰符

public(公共),private(私用),protected(继承)

