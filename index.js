// 設定取消全選功能
var checkboxes = document.querySelectorAll('input[type="checkbox"]');
var button = document.getElementById('toggle_check_btn');

document.getElementById('toggle_check_btn').addEventListener('click', function () {
    checkboxes.forEach(function (checkbox) {
        checkbox.checked = !checkbox.checked;
    });

    button.textContent = button.textContent === '全選' ? '取消全選' : '全選';
});

// 按下搜尋按鈕
var enter_keyword = document.getElementById('enter_keyword');
var search_box= document.getElementById('search_box');
document.getElementById('search').addEventListener('click', function () {
    var noCheckboxChecked = true;

    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            noCheckboxChecked = false;
        }
    });

    if (enter_keyword.value === "" && noCheckboxChecked) {
        alert("搜尋欄位不可空白且至少選擇一個選項");
    }
    else{
        search_box.style.display='none';
    }

});
