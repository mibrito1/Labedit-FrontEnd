export function Input({
    placeholder, nome, valor, setValor
}) {
    function onChange(e) {
        e.preventDefault()
        const { name, value } = e.target
        // name: value
        setValor(value)
    }
    return (<input className="border border-gray-200 w-80 p-4" placeholder={placeholder} name={nome} value={valor} onChange={onChange} />)
}