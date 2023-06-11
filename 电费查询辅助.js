// ==UserScript==
// @name         电费查询辅助
// @namespace    http://qingtingwl.cn/
// @version      1.0
// @description  电费查询辅助
// @author       蜻蜓和卓卓
// @match        http://192.168.84.3:9090/cgcSims/login.do*
// @grant        none
// ==/UserScript==

(() => {
    setTimeout(() => {
        // Get current date
        let currentDate = new Date();

        // Subtract 5 days from current date
        let beforeDate = new Date(currentDate.getTime() - (7 * 24 * 60 * 60 * 1000));

        // Format dates as YYYY-MM-DD strings
        let formattedCurrentDate = currentDate.toISOString().slice(0, 10);
        let formattedBeforeDate = beforeDate.toISOString().slice(0, 10);

        // Construct URL with formatted dates
        let url = `http://192.168.84.3:9090/cgcSims/selectList.do?&type=7&beginTime=${formattedBeforeDate}&endTime=${formattedCurrentDate}&client=192.168.84.110&roomId=8699&roomName=1505&actionType=6`;

        // Redirect user to URL
        window.location.href = url;


    }, 200);
})();