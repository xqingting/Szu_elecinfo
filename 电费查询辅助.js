// ==UserScript==
// @name         电费查询辅助
// @namespace    http://qingtingwl.cn/
// @version      1.0
// @description  电费查询辅助
// @author       蜻蜓
// @match        http://192.168.84.3:9090/*
// @grant        none
// ==/UserScript==

(() => {
  const url = window.location.href;

  if (url.startsWith('http://192.168.84.3:9090/cgcSims/login.do')) {
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
  } else if (url.startsWith('http://192.168.84.3:9090/cgcSims/selectList.do')) {
    setTimeout(() => {
      const xpathExpression = '//*[@id="oTable"]/tbody/tr[8]/td[3]';
      const result = document.evaluate(xpathExpression, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
      const targetElement = result.singleNodeValue;
      const value = parseFloat(targetElement.textContent);
      if (value < 15) {
        alert('该数字小于15');
      }
    }, 200);
  }
})();
