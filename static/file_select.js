document.querySelector('.file_select').addEventListener('click', function () {
    this.querySelector('input[type="file"]').click();
});
document.querySelector('.file_select [type="file"]').addEventListener('change', function () {
    var names = [];
    for (var i = 0; i < this.files.length; i++) {
        names.push(this.files[i].name);
    }
    document.querySelector('[data-file-name="' + this.getAttribute('name') + '"]').innerHTML = names.join(', ');
    document.querySelector('.file_select').classList.add('active');
});