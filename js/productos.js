// Función para mostrar/ocultar los filtros en móviles
function toggleFilters() {
    const filterArea = document.getElementById('filters');
    const filterIcon = document.getElementById('filter-icon');

    if (filterArea.classList.contains('show')) {
        filterArea.classList.remove('show');
        filterIcon.textContent = '+';
    } else {
        filterArea.classList.add('show');
        filterIcon.textContent = '-';
    }
}