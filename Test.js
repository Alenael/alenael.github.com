var demonData;

function LoadData() {
    $.getJSON("data/demons.json", function(demons) {
        demonData = demons;

        var select = document.getElementById("demon");

        for (var i = 0; i <= demons.length-1; i++) {
            var option = document.createElement('option');
            option.text = demons[i].Name;
            select.add(option, 0);
        }

        var sel = $('#demon');
        var selected = sel.val(); // cache selected value, before reordering
        var opts_list = sel.find('option');
        opts_list.sort(function (a, b) { return $(a).text() > $(b).text() ? 1 : -1; });
        sel.html('').append(opts_list);
        sel.val(selected); // set cached selected value
    });

}