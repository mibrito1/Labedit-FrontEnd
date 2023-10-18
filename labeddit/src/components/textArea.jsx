export function TextArea({ placeholder, nome, valor, setValor }) {

    function onChange(e) {
        e.preventDefault()
        const { name, value } = e.target
        // name: value
        setValor(value)
    }

    return (
        <>
            <textarea placeholder={placeholder} className="bg-[#EDEDED] p-5 h-32 rounded-xl resize-none" name={nome} value={valor} onChange={onChange} />
        </>
    )

}