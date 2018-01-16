module.exports = $(() => {
  let orgData = {
    1: {'date': '0101', 'content': 'hogehoge'},
    2: {'date': '0102', 'content': 'hogehoge'},
    3: {'date': '0103', 'content': 'hogehoge'},
    4: {'date': '0104', 'content': 'hogehoge'},
    5: {'date': '0105', 'content': 'hogehoge'},
    6: {'date': '0106', 'content': 'hogehoge'},
    7: {'date': '0107', 'content': 'hogehoge'},
    8: {'date': '0108', 'content': 'hogehoge'},
    9: {'date': '0109', 'content': 'hogehoge'},
    10: {'date': '0110', 'content': 'hogehoge'}
  }
  let $list = $('.data-list');

  // exec
  Object.keys(orgData).forEach((key) => {
    $list.append(`<li>Data: ${orgData[key]['date']}, Content: ${orgData[key]['content']}</li>`);
  });
});
