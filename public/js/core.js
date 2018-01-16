(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(() => {
	// require modules
	// let amoeba = require('./amoeba.js');
	let printData = require('./printData.js');
});

},{"./printData.js":2}],2:[function(require,module,exports){
module.exports = $(() => {
  let orgData = {
    1: { 'date': '0101', 'content': 'hogehoge' },
    2: { 'date': '0102', 'content': 'hogehoge' },
    3: { 'date': '0103', 'content': 'hogehoge' },
    4: { 'date': '0104', 'content': 'hogehoge' },
    5: { 'date': '0105', 'content': 'hogehoge' },
    6: { 'date': '0106', 'content': 'hogehoge' },
    7: { 'date': '0107', 'content': 'hogehoge' },
    8: { 'date': '0108', 'content': 'hogehoge' },
    9: { 'date': '0109', 'content': 'hogehoge' },
    10: { 'date': '0110', 'content': 'hogehoge' }
  };
  let $list = $('.data-list');

  // exec
  Object.keys(orgData).forEach(key => {
    $list.append(`<li>Data: ${orgData[key]['date']}, Content: ${orgData[key]['content']}</li>`);
  });
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++


function postModifiedData() {

  $('a.modified_data_post_btn').on('click', function () {

    swal({
      title: "修正したデータをアップデートしますか？",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {

        // 取得データクラス
        var data_num = $('th.order_date').length; // データ数
        // post_modified_data  = []; // 修正されたデータを格納
        var bbbbbbbbbbb = {}; // 修正されたデータを格納
        var aaaaaaaaaaa = {}; // 修正された1行のデータを格納
        var getting_data_class = ['order_date', 'total_orders', 'normal_orders', 'tradein_orders', 'arigato_orders', 'zozo_payment_count', 'member_orders', 'new_member_orders', 'new_db_member_orders', 'new_rb_member_orders', 'repeat_member_orders', 'repeat_db_member_orders', 'repeat_rb_member_orders', 'guest_orders']; // データ取得のクラス

        var acd = {};
        acd['order_date'] = $('th.order_date').eq(1).text();
        acd['total_orders'] = Number($('.' + 'total_orders').eq(1).text().replace(/件/g, "").replace(/,/g, ""));
        acd['normal_orders'] = Number($('.' + 'normal_orders').eq(1).text().replace(/件/g, "").replace(/,/g, ""));
        acd['tradein_orders'] = Number($('.' + 'tradein_orders').eq(1).text().replace(/件/g, "").replace(/,/g, ""));

        console.log(acd);
        // データ取得と格納
        for (var z = 0; z < data_num; z++) {

          getting_data_class.forEach(function (class_name, index) {

            if (class_name == 'order_date') {
              acd[class_name] = $('th.order_date').eq(z).text();
            } else {
              acd[class_name] = Number($('.' + class_name).eq(z).text().replace(/件/g, "").replace(/,/g, ""));
            }
          });

          bbbbbbbbbbb[z] = acd;
        } // end for(var z = 0; z < data_num; z ++)

        console.log(bbbbbbbbbbb);

        // Ajax設定
        $.ajaxSetup({
          headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          }
        });

        // Ajax
        $.ajax({
          url: '/admin/update_modified_data',
          type: 'POST',
          dataType: 'json',
          data: {
            'update_data': JSON.stringify(post_modified_data)
          }
        }).done(function (update_result) {

          // UPDATE成功時の表示
          swal("データをアップデートしました！", {
            icon: "success"
          });
        }).fail(function () {
          console.log("error");
        });
      }
    });
  });
}

},{}]},{},[1]);
