import Image from "next/image";

type BotaoProps = {
    children: React.ReactNode;
    tipo: "submit" | "reset" | "button" | undefined
    onClick?: () => void
    img?: string
}

const Botao = ({ onClick, children, tipo, img }: BotaoProps) => {

    return (
        <div onClick={onClick}  className="group cursor-pointer flex flex-row justify-center items-center min-w-52 hover:bg-primary hover:text-white font-semibold text-lg w-2/5 rounded-xl p-3 border-2 border-primary shadow-md">
            {img ? <Image height={40} width={40} className="h-10 group-hover:invert" src={img} alt="Imagem do botão" /> : <></>}
            <button className="w-full h-full flex flex-row justify-center items-center" type={tipo}>{children}</button>
        </div>
    )
}

export default Botao