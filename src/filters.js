const filters = {
    searchText: '',
    hideCompleted: false
}

const getFilters = () => filters

const setFilters = (uptades) => {
    if (typeof uptades.searchText === 'string') {
        filters.searchText = `${uptades.searchText}`        
    }
    
    if (typeof uptades.hideCompleted === 'boolean') {
        filters.hideCompleted = uptades.hideCompleted
    }
}

export { getFilters, setFilters }