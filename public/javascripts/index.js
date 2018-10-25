const obtainLink = document.getElementById('obtenir');
const menu = document.getElementById('liste-des-factures');

menu.addEventListener('change', function() {
    obtainLink.setAttribute('href', '/facture/' + menu.value);
});
