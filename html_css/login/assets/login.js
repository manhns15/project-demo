$(document).ready(function () {
    $('.show-hide').on('click', function () {
        if ($('.pw').attr('psswd-shown') == 'false') {
            $('.pw').removeAttr('type');
            $('.pw').attr('type', 'text');
            $('.pw').removeAttr('psswd-shown');
            $('.pw').attr('psswd-shown', 'true');
            $('#eye').attr('hidden', 'true')
            $('#eyeff').removeAttr('hidden')
        } else {
            $('.pw').removeAttr('type');
            $('.pw').attr('type', 'password');
            $('.pw').removeAttr('psswd-shown');
            $('.pw').attr('psswd-shown', 'false');
            $('#eyeff').attr('hidden', 'true')
            $('#eye').removeAttr('hidden')



        }

    });

});