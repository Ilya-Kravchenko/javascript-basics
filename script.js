let userName = prompt ('Кто там ?')
if ( userName == 'Админ') {
    let pass = prompt ('Пароль')
if (pass == 'Главный'){
    alert ('Добро пожаловать')
} else if ( pass == '' || pass == null){
    alert ('Ошибка')
} else {
    alert ('Отмена')
}
} else if ( userName == '' || userName == null){
    alert ('Отмена')
} else {
    alert ('Отмена')
}

    