const getHomeSrc = (name: string) => {
    if (typeof name === 'undefined') return 'error.png'
    const path = `/src/assets/images/Home/${name}`
    const modules = import.meta.globEager('/src/assets/images/Home/*')
    return modules[path]?.default
}

export default getHomeSrc
