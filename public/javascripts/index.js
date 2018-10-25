const obtainLink = document.getElementById('obtenir');
const menu = document.getElementById('liste-des-factures');

menu.addEventListener('change', function() {
    // obtainLink.setAttribute('href', '/facture/' + menu.value);
    if( menu.value === '#') {
        obtainLink.href = '/new'
    } else {
        obtainLink.href = '/facture/' + menu.value;
    }
});
