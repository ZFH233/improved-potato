/*
* 系统中JS的扩展函数
*
*
*/

//// 清除两边的空格
//String.prototype.trim = function () {
//    return this.replace(/(^\s*)|(\s*$)/g, '');
//};
//// 合并多个空白为一个空白
//String.prototype.ResetBlank = function () {
//    var regEx = /\s+/g;
//    return this.replace(regEx, ' ');
//};

//// 保留数字
//String.prototype.GetNum = function () {
//    var regEx = /[^\d]/g;
//    return this.replace(regEx, '');
//};

//// 保留中文
//String.prototype.GetCN = function () {
//    var regEx = /[^\u4e00-\u9fa5\uf900-\ufa2d]/g;
//    return this.replace(regEx, '');
//};

//// String转化为Number
//String.prototype.ToInt = function () {
//    return isNaN(parseInt(this)) ? this.toString() : parseInt(this);
//};

//// 得到字节长度
//String.prototype.GetLen = function () {
//    var regEx = /^[\u4e00-\u9fa5\uf900-\ufa2d]+$/;
//    if (regEx.test(this)) {
//        return this.length * 2;
//    } else {
//        var oMatches = this.match(/[\x00-\xff]/g);
//        var oLength = this.length * 2 - oMatches.length;
//        return oLength;
//    }
//};

//// 获取文件全名
String.prototype.GetFileName = function () {
    var regEx = /^.*\/([^\/\?]*).*$/;
    return this.replace(regEx, '$1');
};

//// 获取文件扩展名
//String.prototype.GetExtensionName = function () {
//    var regEx = /^.*\/[^\/]*(\.[^\.\?]*).*$/;
//    return this.replace(regEx, '$1');
//};

///******add By 刘景宁 2010-12-09 *******/
//String.prototype.replaceAll = function (reallyDo, replaceWith, ignoreCase) {
//    if (!RegExp.prototype.isPrototypeOf(reallyDo)) {
//        return this.replace(new RegExp(reallyDo, (ignoreCase ? "gi" : "g")), replaceWith);
//    } else {
//        return this.replace(reallyDo, replaceWith);
//    }
//};
////格式化字符串 add By 刘景宁 2010-12-09 
//String.Format = function () {
//    if (arguments.length == 0) {
//        return '';
//    }

//    if (arguments.length == 1) {
//        return arguments[0];
//    }

//    var reg = /{(\d+)?}/g;
//    var args = arguments;
//    var result = arguments[0].replace(reg, function ($0, $1) {
//        return args[parseInt($1) + 1];
//    });
//    return result;
//};

//// 数字补零
//Number.prototype.LenWithZero = function (oCount) {
//    var strText = this.toString();
//    while (strText.length < oCount) {
//        strText = '0' + strText;
//    }
//    return strText;
//};

//// Unicode还原
//Number.prototype.ChrW = function () {
//    return String.fromCharCode(this);
//};

//// 数字数组由小到大排序
//Array.prototype.Min2Max = function () {
//    var oValue;
//    for (var i = 0; i < this.length; i++) {
//        for (var j = 0; j <= i; j++) {
//            if (this[i] < this[j]) {
//                oValue = this[i];
//                this[i] = this[j];
//                this[j] = oValue;
//            }
//        }
//    }
//    return this;
//};

//// 数字数组由大到小排序
//Array.prototype.Max2Min = function () {
//    var oValue;
//    for (var i = 0; i < this.length; i++) {
//        for (var j = 0; j <= i; j++) {
//            if (this[i] > this[j]) {
//                oValue = this[i];
//                this[i] = this[j];
//                this[j] = oValue;
//            }
//        }
//    }
//    return this;
//};

//// 获得数字数组中最大项
//Array.prototype.GetMax = function () {
//    var oValue = 0;
//    for (var i = 0; i < this.length; i++) {
//        if (this[i] > oValue) {
//            oValue = this[i];
//        }
//    }
//    return oValue;
//};

//// 获得数字数组中最小项
//Array.prototype.GetMin = function () {
//    var oValue = 0;
//    for (var i = 0; i < this.length; i++) {
//        if (this[i] < oValue) {
//            oValue = this[i];
//        }
//    }
//    return oValue;
//};

//// 获取当前时间的中文形式
//Date.prototype.GetCNDate = function () {
//    var oDateText = '';
//    oDateText += this.getFullYear().LenWithZero(4) + new Number(24180).ChrW();
//    oDateText += this.getMonth().LenWithZero(2) + new Number(26376).ChrW();
//    oDateText += this.getDate().LenWithZero(2) + new Number(26085).ChrW();
//    oDateText += this.getHours().LenWithZero(2) + new Number(26102).ChrW();
//    oDateText += this.getMinutes().LenWithZero(2) + new Number(20998).ChrW();
//    oDateText += this.getSeconds().LenWithZero(2) + new Number(31186).ChrW();
//    oDateText += new Number(32).ChrW() + new Number(32).ChrW() + new Number(26143).ChrW() + new Number(26399).ChrW() + new String('26085199682010819977222352011620845').substr(this.getDay() * 5, 5).ToInt().ChrW();
//    return oDateText;
//};
//扩展Date格式化
Date.prototype.Format = function (format) {
    var o = {
        "M+": this.getMonth() + 1, //月份         
        "d+": this.getDate(), //日         
        "h+": this.getHours() % 12 == 0 ? 12 : this.getHours() % 12, //小时         
        "H+": this.getHours(), //小时         
        "m+": this.getMinutes(), //分         
        "s+": this.getSeconds(), //秒         
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度         
        "S": this.getMilliseconds() //毫秒         
    };
    var week = {
        "0": "\u65e5",
        "1": "\u4e00",
        "2": "\u4e8c",
        "3": "\u4e09",
        "4": "\u56db",
        "5": "\u4e94",
        "6": "\u516d"
    };
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    if (/(E+)/.test(format)) {
        format = format.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "\u661f\u671f" : "\u5468") : "") + week[this.getDay() + ""]);
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return format;
}
//增加天 
function AddDays(date, value) {
    date.setDate(date.getDate() + value);
    return date;
}
//将指定的小时数加到此实例的值上。 
function AddHours(date,value){ 
    
	 date.setHours(date.getHours() + value);
    return date; 
} 
//将指定的分钟数加到此实例的值上。 
function AddMinutes(date,value){ 
   
    
    date.setMinutes(date.getMinutes() + value); 
    return date; 
} 

//Date.prototype.Diff = function (interval, objDate) {
//    //若参数不足或 objDate 不是日期类型則回传 undefined
//    if (arguments.length < 2 || objDate.constructor != Date) { return undefined; }
//    switch (interval) {
//        //计算秒差                                                        
//        case 's': return parseInt((objDate - this) / 1000);
//            //计算分差
//        case 'n': return parseInt((objDate - this) / 60000);
//            //计算時差
//        case 'h': return parseInt((objDate - this) / 3600000);
//            //计算日差
//        case 'd': return parseInt((objDate - this) / 86400000);
//            //计算周差
//        case 'w': return parseInt((objDate - this) / (86400000 * 7));
//            //计算月差
//        case 'm': return (objDate.getMonth() + 1) + ((objDate.getFullYear() - this.getFullYear()) * 12) - (this.getMonth() + 1);
//            //计算年差
//        case 'y': return objDate.getFullYear() - this.getFullYear();
//            //输入有误
//        default: return undefined;
//    }
//};

////检测是否为空
//Object.prototype.IsNullOrEmpty = function () {
//    var obj = this;
//    var flag = false;
//    if (obj == null || obj == undefined || typeof (obj) == 'undefined' || obj == '') {
//        flag = true;
//    } else if (typeof (obj) == 'string') {
//        obj = obj.trim();
//        if (obj == '') {//为空
//            flag = true;
//        } else {//不为空
//            obj = obj.toUpperCase();
//            if (obj == 'NULL' || obj == 'UNDEFINED' || obj == '{}') {
//                flag = true;
//            }
//        }
//    }
//    else {
//        flag = false;
//    }
//    return flag;
//};
//*/
Array_remove = function (arr, val) {
    var index = arr.indexOf(val);
    if (index > -1) {
    	arr.splice(index, 1);
    }
};
/*
function trapError(msg, URI, ln) {
   
	alert(msg);
    //$.post(jserrlogurl, {logstring:msg+",,,"+ URI+",,,"+ ln });
}
window.onerror = trapError;

$(document).ajaxError(function (event, jqXHR, options, errorMsg) {
	alert(msg);
    //$.post(jserrlogurl, { logstring: JSON.stringify({event: event,jqXHR: jqXHR,options: options,errorMsg: errorMsg }) });
});*/

String.prototype.endWith = function (s) {
    if (s == null || s == "" || this.length == 0 || s.length > this.length)
        return false;
    if (this.substring(this.length - s.length) == s)
        return true;
    else
        return false;
    return true;
}
String.prototype.startWith = function (s) {
    if (s == null || s == "" || this.length == 0 || s.length > this.length)
        return false;
    if (this.substr(0, s.length) == s)
        return true;
    else
        return false;
    return true;
}

//交换数组元素
function swapItems(arr, index1, index2) {
    arr[index1] = arr.splice(index2, 1, arr[index1])[0];
    return arr;
};

// 上移
 function upRecord(arr, $index) {
    if($index == 0) {
        return;
    }
    return swapItems(arr, $index, $index - 1);
};

// 下移
 function downRecord(arr, $index) {
    if($index == arr.length -1) {
        return;
    }
    return swapItems(arr, $index, $index + 1);
};

(function(window){
	var base64 = {};
	base64.map = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
	base64.decode = function(s){
		s += '';
		var len = s.length;
		if((len === 0) || (len % 4 !== 0)){
			return s;
		}
		
		var pads = 0;
		if(s.charAt(len - 1) === base64.map[64]){
			pads++;
			if(s.charAt(len - 2) === base64.map[64]){
				pads++;
			}
			len -= 4;
		}
		
		var i, b, map = base64.map, x = [];
		for(i = 0; i < len; i += 4){
			b = (map.indexOf(s.charAt(i)) << 18) | (map.indexOf(s.charAt(i + 1)) << 12) | (map.indexOf(s.charAt(i + 2)) << 6) | map.indexOf(s.charAt(i + 3));
			x.push(String.fromCharCode(b >> 16, (b >> 8) & 0xff, b & 0xff));
		}
		
		switch(pads){
			case 1:
				b = (map.indexOf(s.charAt(i)) << 18) | (map.indexOf(s.charAt(i)) << 12) | (map.indexOf(s.charAt(i)) << 6);
				x.push(String.fromCharCode(b >> 16, (b >> 8) & 0xff));
				break;
			case 2:
				b = (map.indexOf(s.charAt(i)) << 18) | (map.indexOf(s.charAt(i)) << 12);
				x.push(String.fromCharCode(b >> 16));
				break;
		}
		return unescape(x.join(''));
	};
	
	base64.encode = function(s){
		if(!s){
			return;
		}
		
		s += '';		
		if(s.length === 0){
			return s;
		}
		s = escape(s);
		
		var i, b, x = [], map = base64.map, padchar = map[64];
		var len = s.length - s.length % 3;
		
		for(i = 0; i < len; i += 3){
			b = (s.charCodeAt(i) << 16) | (s.charCodeAt(i+1) << 8) | s.charCodeAt(i+2);
			x.push(map.charAt(b >> 18));
			x.push(map.charAt((b >> 12) & 0x3f));
			x.push(map.charAt((b >> 6) & 0x3f));
			x.push(map.charAt(b & 0x3f));
		}
		
		switch(s.length - len){
			case 1:
				b = s.charCodeAt(i) << 16;
				x.push(map.charAt(b >> 18) + map.charAt((b >> 12) & 0x3f) + padchar + padchar);
				break;
			case 2:
				b = (s.charCodeAt(i) << 16) | (s.charCodeAt(i + 1) << 8);
				x.push(map.charAt(b >> 18) + map.charAt((b >> 12) & 0x3f) + map.charAt((b >> 6) & 0x3f) + padchar);
				break;
		}
		return x.join('');
	};
	
	window.base64 = base64;
 })(window);