import up from "../assets/up.svg"
import down from "../assets/down.svg"
import coment from "../assets/coment.svg"

export function PostBox() {
    return (
        <div className="flex flex-col items-start justify-start h-fit  px-2.5 py-2 bg-neutral-100 border border-neutral-300 rounded-xl gap-4">
            <p className="text-center text-xs ">
                Enviado por: Mirian
            </p>
            <p className=" text-xl tracking-tight text-start break-words font-ibm font-medium">
                Porque a maioria dos desenvolvedores usam Linux? ou as empresas de tecnologia usam Linux ?
            </p>
            <div className="flex gap-[1.7rem]">
                <div className="border border-neutral-200 rounded-3xl items-center p-1 flex gap-3">
                    <button>
                        <img src={up} />
                    </button>
                    <p className="text-xs font-bold text-neutral-500">
                        1.2k
                    </p>
                    <button>
                        <img src={down} />
                    </button>
                </div>
                <div className="border border-neutral-200 rounded-3xl items-center p-1 flex gap-3 px-3">
                    <button>
                        <img src={coment} />
                    </button>
                    <p className="text-xs text-neutral-500">
                        132
                    </p>

                </div>

            </div>


        </div>
    )
}
